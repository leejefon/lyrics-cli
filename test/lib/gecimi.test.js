import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Promise from 'bluebird';
import { lyrics } from '../../lib/gecimi';

chai.use(chaiAsPromised);
chai.should();

describe('Test Gecimi', () => {
	it('should return lyrics for 蒲公英的約定', (done) => {
		lyrics('蒲公英的約定').should.eventually.have.string('已经长大的约定 那样清晰').notify(done);
	});

	it('should return no song found', (done) => {
		lyrics('NoSuchSong').should.eventually.have.string('No song found...').notify(done);
	});
});
