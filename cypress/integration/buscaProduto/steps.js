





Given(/^que acesso a pagina$/, () => {
    cy.visit('/')
});

When(/^acessar com usuario "([^"]*)" e senha "([^"]*)"$/, (user,pass) => {
	realizarLogin(user,pass)
});


When(/^adicionar produto "([^"]*)"$/, (produto) => {
    adicionarProduto(produto);

});

When(/^clicar no carrinho$/, () => {
	clicarCarrinho();
});



When(/^selecionar endereço$/, () => {
    selecionarEnderecoExistente();
});

When(/^selecionar forma de pagamento$/, () => {
    finalizarPagamento();
});

Then(/^validar mensagem de compra com sucesso$/, () => {
	validarCompra();
});

When(/^selecionar forma de pagamento com boleto$/, () => {
	selecionarPagamentoBoleto();
});


Then(/^validar login efetuado com sucesso$/, () => {
	validarLoginEfetuado();
});


Then(/^validar login invalido$/, () => {
validarLoginInvalido();

});


When(/^clicar em checkout$/, () => {
    clicarCheckout();
});


//******* FUNCTIONS *******/





function adicionarProduto(produto) {
    cy.get('#add-to-cart-sauce-labs-backpack').click({ force: true })

}

function clicarCarrinho() {
    cy.get('div.page_wrapper div:nth-child(1) div.header_container:nth-child(1) div.primary_header div.shopping_cart_container:nth-child(3) > a.shopping_cart_link').click();
    
}


function selecionarEnderecoExistente() {
    cy.get('#first-name').type('Qa');
    cy.get('#last-name').type('Expert');
    cy.get('#postal-code').type('06840000');
    cy.get('#continue').click();
}

function finalizarPagamento() {
    cy.get('#finish').click();
}

function validarCompra() {
    cy.wait(3000);
    cy.get('div:nth-child(2) div.page_wrapper div:nth-child(1) div.checkout_complete_container > h2.complete-header').should('be.visible');
}

function selecionarPagamentoBoleto() {
    cy.get(':nth-child(2) > .form-check-input').click()
    cy.get(':nth-child(3) > .btn').click();
}

function realizarLogin(user,pass) {
    cy.get('#user-name').type(user)
    cy.get('#password').type(pass)
    cy.get('#login-button').click()
}

function validarLoginEfetuado() {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible');
}

function validarLoginInvalido() {
    cy.get('.error-button > .svg-inline--fa > path').click();
}

function clicarCheckout() {
    cy.get('#checkout').click();
}