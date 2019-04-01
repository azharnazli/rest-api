module.exports = ( req, res, next) => {
  if(req.authenticated.role == 'admin' || req.params.id == req.authenticated.id) next()
  else res.send(401).json({error : 'Authorization Error'})
}