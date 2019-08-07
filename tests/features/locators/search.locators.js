class homeLocators {
	constructor() {
		this.searchField = '//input[@id="search_input_react"]';
		this.getStartedLink = '//*[@class="button getstarted"]';
		this.noResultsFound = './/div[@class="algolia-docsearch-suggestion--text"][contains(text(), "No results found for query")]';
	}
}

module.exports = homeLocators;
