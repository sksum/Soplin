import fetch from "node-fetch";
require('dotenv').config()
const OrgName = process.env.OrgName;
const RepName = process.env.RepName;
console.log(OrgName)

/**
 * 
 * @param {*} req : {token, content, path} 
 * @param {*} res 
 * @param {*} next 
 */


export async function post(req, res, next) {
  let checkResponse = await fetch(`https://api.github.com/repos/${OrgName}/${RepName}/contents/${req.body.path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((resp) => resp.json());

  var dayt = new Date();
  console.log(dayt,req.body.token,OrgName,RepName)
  // let repos = await fetch(`https://api.github.com/orgs/${OrgName}/repos/${RepName}/contents/`, {
  let repos = await fetch(`https://api.github.com/repos/${OrgName}/${RepName}/contents/${req.body.path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body : JSON.stringify ({
      message: `Soplin Update: ${dayt.getDate()}-${dayt.getMonth()}`,
      content: req.body.content,
      sha: checkResponse.sha
    })
  }).then((resp) => resp.json());
  console.log(repos)
  res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ resp: repos }));


}
