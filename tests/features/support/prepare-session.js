const { join } = require('path');

const vrtService = ['image-comparison',
	{
		baselineFolder: join(process.cwd(), './vrt-images/baseline'),
		formatImageName: '{tag}-{logName}-{width}x{height}',
		screenshotPath: join(process.cwd(), './vrt-images/latest'),
		savePerInstance: true,
		autoSaveBaseline: true,
		blockOutStatusBar: true,
		blockOutToolBar: true,
		clearRuntimeFolder: true,
	},
];

module.exports = {
	addVRTServiceInConfig(service) {
		let servicesArray;

		if (service === 'local') {
			servicesArray = ['selenium-standalone'];
		} else if (service === 'browserstack') {
			servicesArray = ['browserstack'];
		}

		// const servicesArray = ['selenium-standalone'];
		if (process.env.runvisualtest === 'true') {
			servicesArray.push(vrtService);
		}
		return servicesArray;
	},
};
// export default prepareSession;
