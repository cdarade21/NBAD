var fs = require('fs');

fs.mkdir('stuff',function(){
  fs.readFile('ReadFile.txt','utf8',function(err,data){
    fs.writeFile('./stuff/WriteFile.txt',data,()=>{});
  });
});
