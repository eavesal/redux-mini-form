const Nightmare = require('nightmare')
const {expect} = require('chai')

describe('sync validation form', function() {
  this.timeout('60s')

  let nightmare;

  before(function() {
    nightmare = Nightmare()
  })

  it('should show required errors', function(done) {
    nightmare
      .goto('http://localhost:3000/')
      .click('button[type="submit"]')
      .evaluate(() => document.querySelectorAll('.required-error').length)
      .then((requiredErrorCount) => {
        expect(requiredErrorCount).to.equal(3)
        done()
      })
      .catch(done)
  })

  it('should show field validation errors', function(done) {
    nightmare
      .type('input[name="username"]', 'some characters greater than 15')
      .type('input[name="email"]', 'an invalid email')
      .type('input[name="age"]', 24)
      .click('button[type="submit"]')
      .evaluate(() => Array.from(document.querySelectorAll('.field-error')).map((el) => el.innerText))
      .end()
      .then((errorMessages) => {
        expect(errorMessages).to.deep.equal([
          'Must be 15 characters or less',
          'Invalid email address',
          'Must be a number'
        ])
        done()
      })
      .catch(done)
  })
})