@ui
Feature: As an automation tester, i want to search for browser commands on webdriverio home page

  Scenario Outline: Navigate to Webdriverio home page and search for browser commands
    Given User open browser with webdriverio home page
    When User Search for "<Command>" in search box

    Examples:
      | Command        |
      | Click          |
      | SaveScreenshot |
