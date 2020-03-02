var fs = require('fs');

var readMe = fs.readFileSync('ReadFile.txt','utf8');
fs.writeFileSync('WriteFile.txt',readMe);
