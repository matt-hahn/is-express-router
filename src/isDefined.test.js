const {expect} = require('chai')

// Module
const isDefined = require('./isDefined')

describe('isDefined', () => {
  it('Should be a function', () => {
    expect(isDefined).to.be.a('function')
  })

  it('Should return a boolean', () => {
    expect(isDefined()).to.be.a('boolean')
  })

  it('Should return false', () => {
    expect(isDefined(undefined)).to.be.false
  })

  it('Should return true #1', () => {
    expect(isDefined(0)).to.be.true
  })

  it('Should return true #2', () => {
    expect(isDefined(null)).to.be.true
  })

  it('Should return true #3', () => {
    expect(isDefined('')).to.be.true
  })

  it('Should return true #4', () => {
    expect(isDefined([])).to.be.true
  })

  it('Should return true #5', () => {
    expect(isDefined({})).to.be.true
  })
})
