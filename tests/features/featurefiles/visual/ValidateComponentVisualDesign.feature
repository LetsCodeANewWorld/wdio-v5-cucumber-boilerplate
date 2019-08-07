@visual
Feature: Valdiate visual design of component for pages (WebdriverIO and TaxCalculator).
  Scenario: Navigate to taxCalculator page and check search panel component
    Given User is on the taxCalculator page
    When User is on screen resolution width "984" and height "788"
    Then search panel component should match the baseline image

  Scenario: Navigate to reed home page and check home page
    Given User is on the reed home page
    When User is on maximised screen resolution
    Then home page should match the baseline image
