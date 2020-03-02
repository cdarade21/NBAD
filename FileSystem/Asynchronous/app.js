var fs = require('fs');

fs.readFile('ReadFile.txt','utf8',function(err,data){
  fs.writeFile('WriteFile.txt',data,()=>{});
});
