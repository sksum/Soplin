import fetch from "node-fetch";

export async function post(req, res, next) {
  let response = await fetch(`https://api.github.com/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((resp) => resp.json());
  console.log(response);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ success: true, user: response }));
}
