export function notFound(req, res) {
  res.status(404).json({
    message: "Sorry, the requested page was not found.",
    path: req.url,
    status: 404,
    success: false,
  });
}
