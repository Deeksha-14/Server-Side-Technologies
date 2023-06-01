const http=require("http")
const url=require("url")


function processrequest(req, resp){
var q = url.parse(req.url, true)
console.log(q);
resp.writeHeader(200, {"content-type":"text/html"})
switch(q.pathname)
{
    case "/home": 
    resp.write("<h1> in home page</h1>")
    resp.end("<h2>end</h2>")

    break;

    case "/aboutus": 
    resp.write("<h1> in aboutus page</h1>")
    resp.end()

    break;

    default : 
    resp.write("<h1> in home page</h1>")
    resp.end()

    break;
}

}


var server=http.createServer(processrequest)
server.listen(3002,()=>{
    console.log("server started at port 3002")
})
