var fs = require('fs');

fs.unlink('./stuff/WriteFile.txt',function(){
  fs.rmdir('stuff',()=>{});
});
