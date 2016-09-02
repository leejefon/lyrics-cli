
var qs = require('querystring');
var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'), { multiArgs: true });

var LYRICS_API_URL = 'http://gecimi.com/api/lyric/';

module.exports = {
	lyrics: function (name, artist) {

	}
};
