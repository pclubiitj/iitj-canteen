const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai');
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

describe('## Auth APIs', () => {
	describe('# GET /api/auth/user', () => {
		it('should give error message regarding missing header', (done) => {
			request(app)
				.get('/api/auth/user')
				.expect(httpStatus.UNAUTHORIZED)
				.then((res) => {
					expect(res.body.message).to.equal('Authorization Header Missing');
					done();
				})
				.catch(done);
		});

		it('should give wrong format', (done) => {
			request(app)
				.get('/api/auth/user')
				.set('Authorization', 'token')
				.expect(httpStatus.UNAUTHORIZED)
				.then((res) => {
					expect(res.body.message).to.equal('Authentication error: Bad Format');
					done();
				})
				.catch(done);
		});

		it('should give wrong scheme', (done) => {
			request(app)
				.get('/api/auth/user')
				.set('Authorization', 'Bear token')
				.expect(httpStatus.UNAUTHORIZED)
				.then((res) => {
					expect(res.body.message).to.equal('Authentication error: Bad Scheme');
					done();
				})
				.catch(done);
		});

		it('should give wrong number of segments in token', (done) => {
			request(app)
				.get('/api/auth/user')
				.set('Authorization', 'Bearer 1')
				.expect(httpStatus.UNAUTHORIZED)
				.then((res) => {
					expect(res.body.message).to.equal(
						'Wrong number of segments in token: 1'
					);
					done();
				})
				.catch(done);
		});

		it('should give invalid token', (done) => {
			request(app)
				.get('/api/auth/user')
				.set('Authorization', 'Bearer 1.2.2')
				.expect(httpStatus.UNAUTHORIZED)
				.then((res) => {
					expect(res.body.message).to.equal(
						"Can't parse token envelope: 1': Unexpected end of JSON input"
					);
					done();
				})
				.catch(done);
		});
	});
});
