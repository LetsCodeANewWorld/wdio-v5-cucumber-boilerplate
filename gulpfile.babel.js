/* eslint-disable import/no-named-default */
import gulp from 'gulp';
import del from 'del';
import path from 'path';
import { argv } from 'yargs';
import { default as Launcher } from '@wdio/cli';

process.env.config = (argv.config) ? argv.config : process.env.config;
const configfile = process.env.config === 'undefined' ? 'browserstack.pipeline' : `${argv.config}`;

// Delete temp files and last run results/screenshots
gulp.task('prepare', async () => {
	await del(['tests/reports/json/*', 'tests/reports/html/*', 'tests/reports/xml/*', 'tests/reports/screenshots/*']);
});

// Run wdio task to trigger execution
gulp.task('wdio', ['prepare'], async () => {
	const wdio = new Launcher(path.join(__dirname, 'tests', 'configurations', `${configfile}.conf.js`));
	await wdio.run();
	await process.exit();
});

gulp.task('execute', ['wdio'], () => {
	console.log('execution finished..');
});
