/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { nativePage } from '../native.page';

// const serchPageTestData = require('../../../testdata/testdata');

class HomePage {
	get searchPageElement() {
		return nativePage.getPage('search.locators');
	}

	openWebdriverIOHomePage() {
		browser.url('http://www.webdriver.io');
	}

	searchText(text) {
		const searchBox = browser.$(this.searchPageElement.searchField);
		searchBox.click();
		browser.pause(3000);
		searchBox.setValue(text);
		browser.pause(3000);
	}
}

export const homePage = new HomePage();
