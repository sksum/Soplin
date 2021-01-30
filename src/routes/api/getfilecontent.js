import fetch from "node-fetch";
require('dotenv').config()
const OrgName = process.env.OrgName;
const RepName = process.env.RepName;

export async function post(req, res, next) {
  let repos = await fetch(`https://api.github.com/repos/${OrgName}/${RepName}/contents/${req.body.path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((resp) => resp.json());
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ success: true, content: repos }));

}
