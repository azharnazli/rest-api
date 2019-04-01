module.exports = (req, res, next) => {
  if (req.authenticated.role === 'admin') {
    next()
  } else res.status(401).json({
    error: 'Authorization error'
  })
}