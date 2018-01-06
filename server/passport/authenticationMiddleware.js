function authenticationMiddleware () {
    console.log(`Validating Authentication... so... we should see something here...`)
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/login') // TODO get this routing more appropriately with an error 
    }
}

module.exports = authenticationMiddleware;