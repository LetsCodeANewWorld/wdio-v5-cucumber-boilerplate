import { Given, When, Then } from 'cucumber';

const searchPanel = '[class="styles__form__L5Svni styles__hideMobile__2ISuUi form-inline"]';

Given(/^User is on the taxCalculator page$/, () => {
	browser.url('https://reedonline:LoveMondays@web-jobseeker-tax-calculator.devtest.reedpoc.co.uk/tax-calculator');
	browser.pause(1000);
});

Given(/^User is on the reed home page$/, () => {
	browser.url('https://new-test.reedlabs.co.uk/');
	browser.pause(1000);
});

When(/^User is on maximised screen resolution$/, () => {
	browser.maximizeWindow();
	browser.pause(2000);
});

When(/^User is on screen resolution width "([^"]*)" and height "([^"]*)"$/, (width, height) => {
	const screenWidth = Number(width);
	const screenHeight = Number(height);
	browser.setWindowSize(screenWidth, screenHeight);
	browser.pause(2000);
});

Then(/^Header component should match the baseline image$/, () => {
	assert.equal((browser.checkElement($('.fixedHeaderContainer'), 'header', {})), 0, 'header does not match');
});

Then(/^search panel component should match the baseline image$/, () => {
	assert.equal((browser.checkElement($(searchPanel), 'searchPanel', {})), 0, 'Search panel does not match');
});


Then(/^home page should match the baseline image$/, () => {
	assert.equal((browser.checkScreen('reedHomePage', { disableCSSAnimation: true })), 0, 'Reed home page does not match');
});
