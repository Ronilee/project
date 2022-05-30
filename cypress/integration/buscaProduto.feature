Feature: Feature name

    Acessar site Code shop

    Scenario: Validar Login
        Given que acesso a pagina
        And acessar com usuario "standard_user" e senha "secret_sauce"
        Then validar login efetuado com sucesso

    Scenario: Validar Login invalido
        Given que acesso a pagina
        And acessar com usuario "standard_user" e senha "invalida"
        Then validar login invalido


    Scenario: Adicionar produto no carrinho e finalizar compra
        Given que acesso a pagina
        And acessar com usuario "standard_user" e senha "secret_sauce"
        And adicionar produto ""
        And clicar no carrinho
        And clicar em checkout
        And selecionar endereço
        And selecionar forma de pagamento
        Then validar mensagem de compra com sucesso

    