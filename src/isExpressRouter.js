const methods = require('express-router-methods')
const isFunction = require('is-function')
const isDefined = require('./isDefined')

/**
 * @description :: Checking if the passed in argument is a function created by express.Router()
 * @param {Any} arg :: Argument to check
 * @return {Boolean}
 */
module.exports = (arg) =>
  isDefined(arg) && isFunction(arg) && arg.name === 'router' && [...methods].every((method) => isDefined(method) && isFunction(arg[method]))
