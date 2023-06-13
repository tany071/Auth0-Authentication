const express = require("express");
const cors = require("cors");
 

const app = express();
app.use(cors());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

// midddleware
// const verifyJWT = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "dev-pgp3db74pzkuqt0j.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "this is a unique identifier",
//   issuer: "https://dev-pgp3db74pzkuqt0j.us.auth0.com/",
//   algorithm: ["RS256"],
// }).unless({ path: ["/"] });

// const jwtCheck = auth({
//   audience: "this is a unique identifier ",
//   issuerBaseURL: "https://dev-pgp3db74pzkuqt0j.us.auth0.com/",
//   tokenSigningAlg: "RS256",
// });

// app.use(verifyJWT);

//routes
app.get("/", (req, res) => {
  res.send("Hello from index route");
});
app.get("/protected", (req, res) => {
  res.send("Hello from protected route");
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

app.listen(4000, () => console.log("Server on port 4000"));
