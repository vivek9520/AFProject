
const request = require('supertest')
const app = require('../route/complientRoute')
describe('Login', () => {
  it('login', async () => {
    const res = await request(app)
      .get('http://localhost:2500/api/complient')
      .send({
        username: "DIALOG",
        password: 'DIALOG',
      })
    expect(res.statusCode).toEqual(200)
    
  })
})

