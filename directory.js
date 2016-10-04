var fs = require('fs');

if(fs.existsSync("inc")){
  console.log("Directory already exists");
}else{
  fs.mkdir("inc", function(err){
    if(err){
      console.log(err);
    }else{
      console.l  og("Directory Created");
    }ß
  });
}
