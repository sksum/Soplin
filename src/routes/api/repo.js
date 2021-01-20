import fetch from "node-fetch";
require('dotenv').config()
const OrgName = process.env.OrgName;
const RepName = process.env.RepName;
console.log(OrgName)
export async function post(req, res, next) {
  let repos = await fetch(`https://api.github.com/orgs/${OrgName}/repos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((resp) => resp.json());
  let res_ = repos.filter((element) => element.name == RepName);
  if (!res_.length) {
    let response = await fetch(`https://api.github.com/orgs/${OrgName}/repos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${req.body.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: "soplin-resources",
      }),
    }).then((resp) => resp.json());
    console.log(response);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true, user: response }));
  }
  else {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: false }));
  }
}
