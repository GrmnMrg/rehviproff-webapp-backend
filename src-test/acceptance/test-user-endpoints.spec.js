const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('User endpoint tests', () => {

    let testUsername = "testuser" + Math.floor(Math.random() * 1000000000);

    describe('Register new user (GET /api/user/register)', () => {

        it('should return JSON with new user id', (done) => {

            chai.request('localhost:3000')
                .post('/api/user/register')
                .set('Accept', 'application/json')
                .send({
                    "username": testUsername,
                    "email": testUsername + "@email.com",
                    "password": testUsername,
                    "firstname": testUsername,
                    "lastname": testUsername
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.all.keys(['user_id', 'username']);
                    res.body.username.should.equal(testUsername);
                    done();
                });




        });

    });

});