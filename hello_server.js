/*var http = require('http');

var server = http.createServer(function(request,response)
{
	response.writeHead(200,{"Content-Type": "text/html"});
	response.write("<h1>Hello World Daniel!</h1>");
	response.end();

});

server.listen(3000);
*/

var http = require('http');

var atendeRequisicao = function(request,response)
{
	response.writeHead(200, {"Contente-Type": "text/tml"});
	response.write("<h1>Hello World Daniell !</h1>");
	response.end();
} 

var server = http.createServer(atendeRequisicao);

var servidorLigou = function()
{
	console.log("Servidor Hello World rodando!");
}

server.listen(3000,servidorLigou);
