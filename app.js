var app = require('./config/express')();

app.listen(3000,function(){
    console.log("servidor rodando em http://localhost:3000");
});