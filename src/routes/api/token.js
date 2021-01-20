import fetch from "node-fetch";

export async function post(req, res, next) {
  let client_id = process.env.CLIENT_ID_GIT;
  let client_secret = process.env.CLIENT_SECRET_GIT;
  console.log(
    "ok",
    `http://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${req.body.codeReceived}`
  );
  let response = await fetch(
    `http://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${req.body.codeReceived}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  ).then((resp) => resp.json());
  console.log(response);

  req.session.token = response.access_token;

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ success: true, token: req.session.token }));
}
