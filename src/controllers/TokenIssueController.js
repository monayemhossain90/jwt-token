let jwt = require('jsonwebtoken');

exports.TokenIssue =(req,res)=>{

    let Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: { Name: "Monayem Hossain", City: "Chittagong", admin: true },
      };
    
      let Token = jwt.sign(Payload, "SecretKey");
    
      res.send(Token);
}