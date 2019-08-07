/* eslint-disable import/no-unresolved */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable global-require */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */

// eslint-disable-next-line prefer-destructuring
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');
const { generate } = require('multiple-cucumber-html-reporter');

process.env.browser = (argv.browser) ? argv.browser : process.env.browser;
const webbrowser = process.env.browser === 'undefined' ? 'chrome' : `${argv.browser}`;

process.env.runvisualtest = (argv.runvisualtest) ? argv.runvisualtest : process.env.runvisualtest;
// eslint-disable-next-line no-unused-vars
const runvisualtest = process.env.runvisualtest === 'undefined' ? false : `${argv.runvisualtest}`;

process.env.testfolder = (argv.testfolder) ? argv.testfolder : process.env.testfolder;
const testfolderpath = process.env.testfolder === 'undefined' ? 'tests/features/featurefiles/ui' : `tests/features/featurefiles/${argv.testfolder}`;

process.env.ff = (argv.ff) ? argv.ff : process.env.ff;
const featureFilePath = process.env.ff === 'undefined' ? `${testfolderpath}/*.feature` : `${testfolderpath}/${argv.ff}.feature`;

/** Retrieve file paths from a given folder and its subfolders. */
const getStepDefsPaths = (folderPath) => {
	const entryPaths = fs.readdirSync(folderPath).map(entry => path.join(folderPath, entry));
	const filePaths = entryPaths.filter(entryPath => fs.statSync(entryPath).isFile());
	const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath));
	const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getStepDefsPaths(curr)), []);
	return [...filePaths, ...dirFiles];
};


var config = {

	// defaultTags: ['~@descoped', '~@manual', '~@wip'],

	browsername: webbrowser,
	//
	// ==================
	// Specify Test Files
	// ==================
	specs: [
		featureFilePath
	],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	//
	// ============
	// Capabilities
	// ============
	maxInstances: 4,
	//
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'silent',
	//
	// If you only want to run your tests until a specific amount of tests have failed use
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,
	//
	// Set a base URL in order to shorten url command calls. If your `url` parameter starts
	// with `/`, the base url gets prepended, not including the path portion of your baseUrl.
	// If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
	// gets prepended directly.
	baseUrl: 'http://localhost',
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 10000,
	//
	// Default timeout in milliseconds for request
	// if Selenium Grid doesn't send response
	connectionRetryTimeout: 90000,
	//
	// Default request retries count
	connectionRetryCount: 3,

	// Make sure you have the wdio adapter package for the specific framework installed
	// before running any tests.
	framework: 'cucumber',
	//
	// The number of times to retry the entire specfile when it fails as a whole
	// specFileRetries: 1,
	//
	// Test reporter for stdout.
	// The only one supported by default is 'dot'
	// see also: https://webdriver.io/docs/dot-reporter.html
	reporters: ['spec',
		['cucumberjs-json', {
			jsonFolder: 'tests/reports/json/',
		}]
	],

	//
	// If you are using Cucumber you need to specify the location of your step definitions.
	cucumberOpts: {
		require: getStepDefsPaths('./tests/features/stepdefinitions/').concat(['tests/features/support/*.js']), // <string[]> (file/dir) require files before executing features
		backtrace: false, // <boolean> show full backtrace for errors
		// requireModule: ['@babel/register'],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
		// tagExpression: 'not @manual',
		dryRun: false, // <boolean> invoke formatters without executing steps
		failFast: false, // <boolean> abort the run on first failure
		format: ['json'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
		colors: true, // <boolean> disable colors in formatter output
		snippets: true, // <boolean> hide step definition snippets for pending steps
		source: true, // <boolean> hide source uris
		profile: [], // <string[]> (name) specify the profile to use
		strict: false, // <boolean> fail if there are any undefined or pending steps
		tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
		timeout: 60000, // <number> timeout for step definitions
		verbose: 'true',
		ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	},

	//
	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.


	/**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
	// onPrepare() {

	// },

	onComplete: () => {
		// Generate the report when it all tests are done
		generate({
			// Required
			// This part needs to be the same path where you store the JSON files
			saveCollectedJSON: true,
			jsonDir: 'tests/reports/json/',
			reportPath: 'tests/reports/html/',
			openReportInBrowser: true,
			// eslint-disable-next-line no-irregular-whitespace
			reportName: `Execution-Result-${new Date().toJSON().replace(/:/g, '-')}`
			// for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
		});
	},

	/**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
	beforeSession() {
		require('@babel/register')({
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: 'current'
						}
					}
				]
			]
		});
	},

	before: () => {
		browser.setWindowSize(1280, 800);
	},
};

exports.config = config;
