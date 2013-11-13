var PATH_TO_KEY = "",
    PATH_TO_CERT = "";
    PATH_TO_CHAIN = "";

var fs = require('fs'),
    httpProxy = require('http-proxy');

var options = {
  ssl: {
    key: fs.readFileSync(PATH_TO_KEY, 'utf8'),
    cert: fs.readFileSync(PATH_TO_CERT, 'utf8'),
    ca : fs.readFileSync(PATH_TO_CHAIN, 'utf8')
  },
  target : "http://localhost",
  ws: true,
  xfwd: true
};

var server = httpProxy.createProxyServer(options).listen(443);
