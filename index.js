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
	.option('-s, --source <value>', 'API to use (gecimi, wangyiyun)')
	.action((name, artist, options) => {
		var source = 'wangyiyun';

		if (options.source) {
			source = options.source;
		}

		switch (source) {
			case 'gecimi':
				APIs.gecimi.lyrics(name, artist); break;
			default:
				APIs.wangyiyun.lyrics(name, artist); break;
		}
	});

program.parse(process.argv);
