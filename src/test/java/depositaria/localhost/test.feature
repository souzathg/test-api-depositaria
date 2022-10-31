Feature: Testando chamada no localhost

Background:
  * url baseURL
  * header correlation-id = "12345"

  * def body = read("classpath:data/issue_body.json")

Scenario:
  Given path "issue"
  And request body
  When method POST
  Then status 202
