const {expect} = require('chai')

// Express
const express = require('express')
const router = express.Router()
const app = express()

// Module
const isExpressRouter = require('./isExpressRouter')

describe('isExpressRouter', () => {
  it('Should be a function', () => {
    expect(isExpressRouter).to.be.a('function')
  })

  it('Should return a Boolean', () => {
    expect(isExpressRouter()).to.be.a('boolean')
  })

  it('Should return true', () => {
    expect(isExpressRouter(router)).to.be.true
  })

  it('Should return false #1', () => {
    expect(isExpressRouter(undefined)).to.be.false
  })

  it('Should return false #2', () => {
    expect(isExpressRouter(null)).to.be.false
  })

  it('Should return false #3', () => {
    expect(isExpressRouter({})).to.be.false
  })

  it('Should return false #4', () => {
    expect(isExpressRouter([])).to.be.false
  })

  it('Should return false #5', () => {
    expect(isExpressRouter(() => {})).to.be.false
  })

  it('Should return false #6', () => {
    expect(isExpressRouter('String')).to.be.false
  })

  it('Should return false #7', () => {
    expect(isExpressRouter(0)).to.be.false
  })

  it('Should return false #8', () => {
    expect(isExpressRouter(true)).to.be.false
  })

  it('Should return false #9', () => {
    expect(isExpressRouter(express)).to.be.false
  })

  it('Should return false #10', () => {
    expect(isExpressRouter(app)).to.be.false
  })

  it('Should return false #11', () => {
    expect(isExpressRouter(app.get)).to.be.false
  })

  it('Should return false #12', () => {
    expect(isExpressRouter(router.get)).to.be.false
  })
})
