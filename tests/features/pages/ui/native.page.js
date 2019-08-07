import PageFactory from './page.factory';

class NativePage {
	constructor() {
		this.page = {};
	}

	getPage(name) {
		if (!(name in this.page)) {
			this.page.name = PageFactory.getNativePage(name);
		}
		return this.page.name;
	}
}

// eslint-disable-next-line import/prefer-default-export
export const nativePage = new NativePage();
