var PATH_TO_KEY = "",
    PATH_TO_CERT = "";

var http = require('http'),
    httpProxy = require('http-proxy');

var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    httpProxy = require('http-proxy');

var options = {
  ssl: {
    key: fs.readFileSync(PATH_TO_KEY, 'utf8'),
    cert: fs.readFileSync(PATH_TO_CERT, 'utf8')
  },
  target : "http://localhost",
  ws: true,
  xfwd: true
};

var server = httpProxy.createProxyServer(options).listen(443);