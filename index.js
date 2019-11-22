module.exports = () => {
  return (req, res, next) => {
    // polka/express compat
    res.status = (code) => {
      res.statusCode = code
      return res
    }
    res.send = (data) => {
      res.end(JSON.stringify(data))
      return res
    }
    next()
  }
}
