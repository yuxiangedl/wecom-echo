export default function handler(req, res) {
  const { echostr } = req.query;
  res.status(200).send(echostr || 'Hello from Vercel');
}
// trigger redeploy
