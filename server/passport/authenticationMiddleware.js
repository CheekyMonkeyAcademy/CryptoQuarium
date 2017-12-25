function authenticationMiddleware () {
    console.log(`DING DING DING - WE HAVE AUTHENTICATION VALIDATION!  Woot!`)
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/login')
    }
}

module.exports = authenticationMiddleware;