const https = require('https'); 
const fs = require('fs'); 
 
const privateKey = fs.readFileSync('LAB.key', 'utf8'); 
const certificate = fs.readFileSync('LAB.crt', 'utf8'); 
 
const credentials = { key: privateKey, cert: certificate }; 
 
const server = https.createServer(credentials, (req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain' }); 
  res.end('Hello, world!\n'); 
}); 
 
server.listen(3443, () => { 
  console.log(); 
})