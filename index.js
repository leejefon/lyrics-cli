/**
 * Lyrics Cli
 *
 * @author: Jeff Lee
 * @createdAt: 2016/08/26
 */

var request = require('request');
var program = require('commander');
var chineseConv = require('chinese-conv');
var qs = require('querystring');

var LYRICS_API_URL = 'http://gecimi.com/api/lyric/';

program
	.version('v0.1.0')
	.arguments('<name> [artist]')
	.action((name, artist) => {
		var songNameSimplified = qs.escape(chineseConv.sify(name));

		if (artist) {
			songNameSimplified += '/' + qs.escape(chineseConv.sify(artist));
		}

    	request
			.get(LYRICS_API_URL + songNameSimplified, {
				json: true
			}, function (err, response, body) {
				if (body.result.length > 0) {
					request.get(body.result[0].lrc, function (err2, res2, body2) {
						console.log(body2);
					});
				}
			});
	});

program.parse(process.argv);
