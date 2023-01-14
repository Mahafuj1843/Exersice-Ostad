var file = require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

  if(req.url=="/"){
     let data= file.readFileSync('home.html');
     res.end(data);
  }
  else if(req.url=="/blog"){
    let data= file.readFileSync('blog.html');
    res.end(data);
  }
  else if(req.url=="/skill"){
    let data= file.readFileSync('skill.html');
    res.end(data);
  }
  else if(req.url=="/about"){

      let data= file.readFileSync('about.html');
      res.end(data);
  }
  else if(req.url=="/contact"){
    let data= file.readFileSync('contact.html');
    res.end(data);
  }else{
    let data= file.readFileSync('error.html');
    res.end(data);
  }
});
server.listen(5000);
console.log("Server Run Successfully.");
