/* eslint-disable import/no-named-default */
import { default as cucumberJson } from 'wdio-cucumberjs-json-reporter';
import { After } from 'cucumber';

After((scenario) => {
	if (scenario.result.status === 'failed') {
		// Attach the original state
		cucumberJson.attach(browser.takeScreenshot(), 'image/png');
	}
	return Promise.resolve(scenario.result.status);
});
