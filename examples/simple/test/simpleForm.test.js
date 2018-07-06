const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('simple form', function() {
  this.timeout('60s')

  let nightmare;

  before(function() {
    nightmare = Nightmare()
  });

  it('should sync the values to the store', function(done) {
    nightmare
      .goto('http://localhost:3000/')
      .type('input[name="firstName"]', 'John')
      .type('input[name="lastName"]', 'Snow')
      .type('input[name="email"]', 'john.snow@hbo.com')
      .check('input[name="sex"][value="male"]')
      .select('select[name="favoriteColor"]', '00ff00')
      .click('input[name="employed"]')
      .type('textarea[name="notes"]', 'You know nothing!')
      .evaluate(() => document.querySelector('code').innerText)
      .then(outputJson => {
        expect(JSON.parse(outputJson)).to.deep.equal({
          firstName: 'John',
          lastName: 'Snow',
          email: 'john.snow@hbo.com',
          favoriteColor: '00ff00',
          employed: true,
          notes: 'You know nothing!'
        })
        done()
      })
      .catch(done)
  })

  it('should clear the value when click Clear Values button', (done) => {
    nightmare
      .click('button[type="button"]')
      .evaluate(() => document.querySelector('code').innerText)
      .end()
      .then(outputJson => {
        expect(JSON.parse(outputJson)).to.deep.equal({})
        done();
      })
      .catch(done)
  });
})