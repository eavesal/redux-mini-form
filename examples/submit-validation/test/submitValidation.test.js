const Nightmare = require('nightmare')
const {expect} = require('chai')

describe('simple form', function() {
  this.timeout('10s')

  let nightmare;

  before(function() {
    nightmare = Nightmare()
  })

  it('should show username error', function(done) {
    nightmare
      .goto('http://localhost:3000/')
      .type('input[name="username"]', 'Bob')
      .click('button[type="submit"]')
      .wait('.sk-spinner')
      .wait('.field-error')
      .evaluate(() => document.querySelector('.field-error').innerText)
      .then((text) => {
        expect(text).to.equal('User does not exist')
        done()
      })
      .catch(done)
  })

  it('should show password error', function(done) {
    nightmare
      .click('button[type="button"]')
      .type('input[name="username"]', 'john')
      .type('input[name="password"]', 'wrong password')
      .click('button[type="submit"]')
      .wait('.sk-spinner')
      .wait('.field-error')
      .evaluate(() => document.querySelector('.field-error').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Wrong password')
        done()
      })
      .catch(done)
  })
})