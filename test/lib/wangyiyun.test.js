import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Promise from 'bluebird';
import { lyrics } from '../../lib/wangyiyun';

chai.use(chaiAsPromised);
chai.should();

describe('Test Wangyiyun', () => {
	it('should return lyrics for 龍捲風', (done) => {
		lyrics('龍捲風').should.eventually.have.string('爱情来得太快就像龙卷风').notify(done);
	});

	it('should return no song found', (done) => {
		lyrics('NoSuchSong').should.eventually.have.string('No song found...').notify(done);
	});

	it('should return no lyrics found', (done) => {
		lyrics('龍井茶').should.eventually.have.string('No lyrics found...').notify(done);
	});
});
