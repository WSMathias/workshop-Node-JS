const jwt = require("jsonwebtoken");

const validation: any = {
  validateToken(req, res, next) {
    // validatr token here is its valid here
    const token = req.headers.authorisation;
    if (token) {
      jwt.verify(token, "secretkey", (err, data) => {
        if (err) {
          res.status(403).json({ message: "unauthorised User" });
        }
        req.user = data;
        next();
      });
    } else {
      res.status(403).json({ message: "token is not provided in headers" });
    }
  }
};

export default validation;
