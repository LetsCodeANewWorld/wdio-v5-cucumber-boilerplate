# wdio-v5-cucumber-boilerplate
It is a boilerplate project of integration tests along with visual & accessibility testing using Webdriverio-V5 with Cucumber. In this the user perform a basic interaction of webdriverio home page - 
  1. search for a command in search box of webdriverio home page (UI).
  2. compare baselien image on reed.co.uk website/webdriverio page (visual).
  3. run accessibility checks (WCAGA, WCAGAA, WCAGAAA) on Webdriverio home page using axe-core library.
  
These tests are developed in JS with WebDriverIO and Cucumber

# Features: 

   Framework: Cucumber
   Features:
  1. Page Object Pattern
  2. ES6 style class base with Babel support
  3. Chai
  4. Multiple reports (Spec, Dot, Html, Json)
  5. Visual regression tests (Image comparison service)
  6. Code formatter (Eslint)
  7. Gherkin Formatter (Gherkin-lint)
  8. Husky
  9. Accessibility tests (axe-core)
  10. BrowserStack Intehration

# Requirements
node >= 10.15.x - how to install Node
npm >= 6.x - how to install npm

# Getting Started
Install the dependencies:

# npm install
In wdio.conf.js file configure the host of the Selenium Server hostname (default: localhost).

You don't need to install selenium-server as we're using selenium-standalone-service in local conf.

# Run e2e tests:

gulp execute --config=local (to execute on local)
gulp execute (to execute on browserstack (pipeline))
gulp execute --browserstacklocal=true (to execute on browserstack from local)

** If gulp is not identified,please install gulp globally using :
npm install -g gulp

Run visual regression tests:

gulp execute --config=local --testfolder=visual (to execute on local)
gulp execute --testfolder=visual (to execute on browserstack (pipeline))
gulp execute --browserstacklocal=true --testfolder=visual (to execute on browserstack from local)



## Reports

CucuberJs-Json: is used to generate cucumber json report.
multiple-cucumber-html-report: is used to generate html report for combined json.

By default, report is generated in tests > reports > html folder and will be opened in browser once execution is done.

## Eslint
Run npm run lint

## Gherkin-lint :
npm run glint
