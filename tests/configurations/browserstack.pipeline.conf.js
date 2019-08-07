/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import argv from 'yargs';

const preparesession = require('../features/support/prepare-session');


const baseconfig = require('./base.conf.js');
require('dotenv').config({ path: './.env' });

process.env.browserstacklocal = (argv.browserstacklocal) ? argv.browserstacklocal : process.env.browserstacklocal;
const browserstacklocal = process.env.browserstacklocal === 'undefined' ? false : argv.browserstacklocal;

var config = Object.assign(baseconfig.config, {
	user: process.env.BROWSERSTACK_USER,
	key: process.env.BROWSERSTACK_KEY,
	services: preparesession.addVRTServiceInConfig('browserstack'),

	capabilities: [

		{
			os: 'Windows',
			os_version: '10',
			browserName: 'Chrome',
			browser_version: '74.0',
			'browserstack.local': browserstacklocal,
			'browserstack.debug': 'true',
		},
	],
});
exports.config = config;
