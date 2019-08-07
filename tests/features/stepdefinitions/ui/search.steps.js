import { Given, When } from 'cucumber';
// import { assert } from 'chai';
import { homePage } from '../../pages/ui/home/home.page';

// const searchPanel = '[class="styles__form__L5Svni styles__hideMobile__2ISuUi form-inline"]';

Given(/^User open browser with webdriverio home page$/, () => {
	homePage.openWebdriverIOHomePage();
});

When(/^User Search for (.*) in search box$/, (searchtext) => {
	if (searchtext === 'Click') {
		throw new Error(`${searchtext} should throw an error`);
	}
	homePage.searchText(searchtext);
});

Given(/^User is on the home page$/, () => {
	browser.url('https://webdriver.io/');
	browser.pause(2000);
});
