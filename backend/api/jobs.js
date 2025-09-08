import { handleJobsFetch } from "../helpers/helpers.js";

// @desc    Fetch all jobs
// @route   GET /api/jobs
export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET") {
    return handleJobsFetch(req, res);
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
