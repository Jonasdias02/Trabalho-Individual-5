const http = require ('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type','text/plain');
     res.end('Servidor funcionando, Projeto Individual 5!');

});

server.listen(port,hostname, () => {
    console.log("Servidor rodando!");
})

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = [];

function addProperty() {
  rl.question('Insira uma propriedade CSS (ou SAIR para encerrar): ', (answer) => {
    if (answer.toUpperCase() === 'SAIR') {
      properties.sort();
      console.log('Propriedades ordenadas em ordem alfabética:');
      properties.forEach((property) => console.log(property));
      rl.close();
    } else {
      properties.push(answer);
      addProperty();
    }
  });
}

addProperty();