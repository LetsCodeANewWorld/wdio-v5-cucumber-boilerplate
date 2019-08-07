/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */

const axeSource = require('axe-core').source;
const AxeReports = require('axe-reports');
const fs = require('fs-extra');

class AccessibilityConfig {
	testAccessibility(standards) {
		try {
			fs.ensureDirSync('tests/reports/accessibility-reports');
			const standardsArray = [];
			standards.includes(',') ? Array.prototype.push.apply(standardsArray, standards.split(',')) : standardsArray.push(standards);

			browser.execute(axeSource);
			const options = { runOnly: { type: 'tag', values: ['wcaga,wcagaa,wcagaaa'] } };
			// run inside browser and get results
			const results = browser.executeAsync((options, done) => {
				axe.run(document, options, (err, output) => {
					if (err) done(err);
					done(output);
				});
			}, options);

			AxeReports.processResults(results, 'csv', 'tests/reports/accessibility-reports/accessibility-test-results', true);
			AxeReports.createCsvReportHeaderRow();
			// AxeReports
			AxeReports.createCsvReportRow(results);

			const axeViolations = results.violations.length;
			console.log('accessibility violations are : ', axeViolations);

			// const report = results.violations;

			if (axeViolations > 0) {
				throw new Error('Accessibility errors reported..');
			}
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = new AccessibilityConfig();
