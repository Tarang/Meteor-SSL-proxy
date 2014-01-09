# A SSL Proxy for Meteor

To setup up, run meteor as you always would on port 80.

Run this with forever or something

Set up your SSL certs & key path with `PATH_TO_KEY` and `PATH_TO_CERT`

# Free SSL certs?

StartSSL offers free SSL certs

http://startssl.com

# Websocket Issues?

Use the `caronte-merge` branch of node-http-proxy instead. There are issues with node 0.10 and node-http-proxy.
