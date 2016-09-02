
var qs = require('querystring');
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'), { multiArgs: true });

var LYRICS_API_ORIGIN = 'http://music.163.com';
var LYRICS_API_URL = LYRICS_API_ORIGIN + '/api';

module.exports = {
	lyrics: function (name, artist) {

		var defaultHeader = {
			'Origin': LYRICS_API_ORIGIN,
			'Referer': LYRICS_API_ORIGIN,
			'Content-Type': 'application/x-www-form-urlencoded'
		};

		var wangyiyunAPIs = {
			search: LYRICS_API_URL + '/search/suggest/web',
			lyrics: LYRICS_API_URL + '/song/lyric'
			// artist: function (key) {
			// 	return LYRICS_API_URL + '/artist/' + key;
			// },
			// album: function (key) {
			// 	return LYRICS_API_URL + '/album/' + key;
			// },
			// song: function () {
			// 	return LYRICS_API_URL + '/song/detail';
			// },
			// mv: function () {
			// 	return LYRICS_API_URL + '/mv/detail';
			// }
		};

		request
			.postAsync({
				method: 'POST',
				url: wangyiyunAPIs.search,
				headers: defaultHeader,
				body: qs.encode({ s: name, limit: 3 }),
				json: true
			})
			.spread((response, body) => {
				var song = body.result.songs[0];

				var options = {
					method: 'GET',
					url: wangyiyunAPIs.lyrics,
					qs: {
						lv: -1,
						id: song.id
					},
					json: true
				};

				return options;
			})
			.then(request.getAsync)
			.spread((response, body) => {
				console.log(body.lrc.lyric);
			});
	}
};
