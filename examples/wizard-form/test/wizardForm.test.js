const Nightmare = require('nightmare')
const {expect} = require('chai')

const firstFormModelDataSelector = 'tbody tr:nth-child(2) td:nth-child(3)'
const secondFormViewDataSelector = 'tbody tr:nth-child(3) td:nth-child(2)'
const thirdFormViewDataSelector = 'tbody tr:nth-child(4) td:nth-child(2)'

describe('wizard form', function() {
  this.timeout('20s')

  let nightmare

  before(function() {
    nightmare = Nightmare()
  })

  it('should has correct view data and model data', function(done) {
    nightmare
      .goto('http://localhost:3000/')
      .type('input[name="firstName"]', 'John')
      .type('input[name="lastName"]', 'Snow')
      .click('button[type="submit"]')
      .type('input[name="email"]', 'john.snow@hbo.com')
      .click('input[name="sex"][value="male"]')
      .evaluate((firstFormModelDataSelector, secondFormViewDataSelector) => ({
        firstFormModelData: JSON.parse(document.querySelector(firstFormModelDataSelector).innerText),
        secondFormViewData: JSON.parse(document.querySelector(secondFormViewDataSelector).innerText),
      }), firstFormModelDataSelector, secondFormViewDataSelector)
      .then(({firstFormModelData, secondFormViewData}) => {
        expect(firstFormModelData).to.deep.equal({firstName: 'John', lastName: 'Snow'})
        expect(secondFormViewData).to.deep.equal({email: 'john.snow@hbo.com', sex: 'male'})
        done()
      })
      .catch(done)
  })

  it('should keep form data after back and forward', function(done) {
    nightmare
      .back()
      .forward()
      .evaluate(
        (secondFormViewDataSelector) => JSON.parse(document.querySelector(secondFormViewDataSelector).innerText),
        secondFormViewDataSelector
      )
      .then((secondFormViewData) => {
        expect(secondFormViewData).to.deep.equal({email: 'john.snow@hbo.com', sex: 'male'})
        done()
      })
      .catch(done)
  })

  it('should clear third form data after submit the second form', function(done) {
    nightmare
      .click('button[type="submit"]')
      .select('select[name="favoriteColor"]', '00ff00')
      .click('input[name="employed"]')
      .type('textarea[name="notes"]', 'You know nothing!')
      .back()
      .click('button[type="submit"]')
      .evaluate(
        (thirdFormViewDataSelector) => JSON.parse(document.querySelector(thirdFormViewDataSelector).innerText),
        thirdFormViewDataSelector
      )
      .end()
      .then((thirdFormViewData) => {
        expect(thirdFormViewData).to.deep.equal({})
        done()
      })
      .catch(done)
  })
})