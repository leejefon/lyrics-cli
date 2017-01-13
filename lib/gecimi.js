var chineseConv = require('chinese-conv');
var qs = require('querystring');
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'), { multiArgs: true });

var LYRICS_API_URL = 'http://gecimi.com/api/lyric/';

module.exports = {
	lyrics: function (name, artist) {
		var songNameSimplified = qs.escape(chineseConv.sify(name));

		if (artist) {
			songNameSimplified += '/' + qs.escape(chineseConv.sify(artist));
		}

    return request
			.getAsync(LYRICS_API_URL + songNameSimplified, { json: true })
			.spread((response, body) => {
				if (body.result.length > 0) {
					return body.result[0].lrc;
				} else {
					throw new Error('Song not found');
				}
			})
			.then(request.getAsync)
			.spread((response, body) => {
				return body;
			})
			.catch((e) => {
				return 'No song found...';
			});
	}
};
