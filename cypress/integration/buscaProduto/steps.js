Given(/^que acesso a pagina$/, () => {
    cy.visit('/')
});

When(/^adicionar produto "([^"]*)"$/, (produto) => {
    adicionarProduto(produto);

});

When(/^clicar no carrinho$/, () => {
	clicarCarrinho();
});

When(/^realizar login com usuario existente$/, () => {
   realizarLoginExistente();
});

When(/^selecionar endereço$/, () => {
    selecionarEnderecoExistente();
});

When(/^selecionar forma de pagamento com cartão$/, () => {
    preenchePagamentoCartao();
});

Then(/^validar mensagem de compra com sucesso$/, () => {
	validarCompra();
});

When(/^selecionar forma de pagamento com boleto$/, () => {
	selecionarPagamentoBoleto();
});



//******* FUNCTIONS *******/



function adicionarProduto(produto) {
    cy.get('.form-control').type(produto);
    cy.get(':nth-child(1) > .overlay > .card-button').click({ force: true })
}

function clicarCarrinho() {
    cy.get('.cart').click();
    cy.get('.btn').click();
}

function realizarLoginExistente() {
    cy.get(':nth-child(1) > .input-field').type('qaexpert@mozej.com');
    cy.get(':nth-child(2) > .input-field').type('123456');
    cy.get('.btn').click();
}

function selecionarEnderecoExistente() {
    cy.get(':nth-child(4) > :nth-child(1) > .form-controll').type('Av. paulista');
    cy.get('#zipecode > .form-controll').type('01500000');
    cy.get(':nth-child(5) > :nth-child(1) > .form-controll').type('São Paulo');
    cy.get(':nth-child(5) > :nth-child(2) > .form-controll').type('101');
    cy.get('.btn').click();
}

function preenchePagamentoCartao() {
    cy.get(':nth-child(1) > .form-check-input').click();
    cy.get(':nth-child(1) > :nth-child(1) > .form-controll').type('010101010101')
    cy.get(':nth-child(1) > :nth-child(2) > .form-controll').type('122')
    cy.get('.mt-15 > :nth-child(1) > .form-controll').type('qa expert')
    cy.get('.mt-15 > :nth-child(2) > .form-controll').type('10/29')
    cy.get('select').select('1 x 99.00')
    cy.get(':nth-child(2) > .btn').click();
}

function validarCompra() {
    cy.get('.section-title').should('be.visible');
}

function selecionarPagamentoBoleto() {
    cy.get(':nth-child(2) > .form-check-input').click()
    cy.get(':nth-child(3) > .btn').click();
}