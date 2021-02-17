export default (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ status: 'Login Autorizado' })
  }
}
