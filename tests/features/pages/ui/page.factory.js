/* eslint-disable no-restricted-syntax */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';

class PageFactory {
	static getNativePage(name) {
		return PageFactory.createPage([
			`../locators/${name}.js`,
		]);
	}

	static createPage(trialPaths) {
		for (const trialPath of trialPaths) {
			if (fs.existsSync(path.join(__dirname, trialPath))) {
				const Page = require(trialPath);
				return new Page();
			}
		}
		throw new Error(`Page ${trialPaths.join(' or ')} not found!`);
	}
}

export default PageFactory;
