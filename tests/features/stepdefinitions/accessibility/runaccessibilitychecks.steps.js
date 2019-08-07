import { When } from 'cucumber';

const axe = require('../../pages/accessibility/axe-config');

When(/^User valdidate the accessibility standard "([^"]*)" using AXE$/, async (standards) => {
	axe.testAccessibility(standards);
});
