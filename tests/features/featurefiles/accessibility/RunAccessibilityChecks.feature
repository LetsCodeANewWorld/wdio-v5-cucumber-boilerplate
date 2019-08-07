@accessibility
Feature: Run accessibility checks on pages

  Scenario: Run accessibility checks A, AA, & AAA on the pages and validate the response
    
    Given User open browser with webdriverio home page
    When User valdidate the accessibility standard "wcaga,wcagaa,wcagaaa" using AXE
