#!/bin/sh

npm -g config set proxy http://tk0py01a.jbcc.co.jp:8080
npm -g config set https-proxy http://tk0py01a.jbcc.co.jp:8080

echo '{ "proxy" : "http://tk0py01a.jbcc.co.jp:8080", "https-proxy" : "http://tk0py01a.jbcc.co.jp:8080" }' > .bowerrc