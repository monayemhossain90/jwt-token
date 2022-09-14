var jwt = require("jsonwebtoken");

exports.createToken = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: { Name: "Monayem Hossain", City: "Chittagong", admin: true },
  };

  let Token = jwt.sign(Payload, "SecretKey");
  res.send(Token);
};

exports.decodeToken = (req, res) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "SecretKey", function (err, decoded) {
    if (err) {
      res.status(401).json({ status: "invalid token", data: err });
    } else {
      res.status(200).json({ status: "success", data: decoded });
    }
  });
};
