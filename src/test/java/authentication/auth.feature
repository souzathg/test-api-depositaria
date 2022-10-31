Feature: Autenticação

  Background:
    * url baseURL
    * header Authorization = call read("classpath:utils/javascript/basic-auth.js") {username: "#(clientId)", password: "#(clientSecret)"}

  Scenario: Autenticação com sucesso
    # Dado que eu acesso o endpoint
    Given path "oauth/token"
    # E que registro o tipo de formulário correto
    And form field grant_type = "client_credentials"
    # Quando envio a requisição com o método POST
    When method POST
    # Então o status deverá ser 200
    Then status 200
    # E armazeno o token da resposta
    And match response.access_token == "#uuid"
    And def token = response.access_token
