Feature: Send GraphQL mutation using external JSON

  Scenario Outline:  <title>
    * def requestData = karate.read('classpath:examples/Graphql/UserCreate.json')


    Given url BaseUrl
    And request requestData
    When method post
    Then status <status>
    And print response


  Examples:
    |read('ExistingEmail.csv')|