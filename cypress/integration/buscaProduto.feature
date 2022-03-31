Feature: Feature name

    Acessar site Code shop

    Scenario: Adicionar produto no carrinho e finalizar compra com cartão de credito
        Given que acesso a pagina
        And adicionar produto "Pokemom"
        And clicar no carrinho
        And realizar login com usuario existente
        And selecionar endereço
        And selecionar forma de pagamento com cartão
        Then validar mensagem de compra com sucesso

    Scenario: Adicionar produto no carrinho e finalizar compra com boleto
        Given que acesso a pagina
        And adicionar produto "Star Wars"
        And clicar no carrinho
        And realizar login com usuario existente
        And selecionar endereço
        And selecionar forma de pagamento com boleto
        Then validar mensagem de compra com sucesso