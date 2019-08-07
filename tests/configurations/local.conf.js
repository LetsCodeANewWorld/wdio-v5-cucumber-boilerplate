/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const preparesession = require('../features/support/prepare-session');
const baseconfig = require('./base.conf.js');

var config = Object.assign(baseconfig.config, {
	runner: 'local',
	hostname: 'localhost',
	port: 4444,
	path: '/wd/hub',
	services: preparesession.addVRTServiceInConfig('local'),
	capabilities: [
		{
			browserName: baseconfig.config.browsername,
		},
	],
});
exports.config = config;
