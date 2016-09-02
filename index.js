#!/usr/bin/env node
'use strict';

/**
 * Lyrics Cli
 *
 * @author: Jeff Lee
 * @createdAt: 2016/08/26
 */

var program = require('commander');

var APIs = {
	gecimi: require('./lib/gecimi'),
	wangyiyun: require('./lib/wangyiyun')
};

program
	.version('v0.1.0')
	.arguments('<name> [artist]')
	.action((name, artist) => {
		APIs.gecimi.lyrics(name, artist);
	});

program.parse(process.argv);
