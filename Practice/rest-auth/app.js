const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      req.sendStatus(403);
    } else {
      res.json({
        message: "Post Created",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "brad",
    email: "brad@gmail.com",
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "7days" }, (err, token) => {
    res.json({
      token,
    });
  });
});

//FORMAT OF TOKEN
// Authorization:Bearer <access_token>

//verifyToken
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined

  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");
    //  get token from array
    const bearerToken = bearer[1];

    req.token = bearerToken;
    //next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log(`server started on http://localhost:3000`));
