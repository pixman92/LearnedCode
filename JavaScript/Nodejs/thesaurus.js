//route called to take in variables for thesaurus work
//requires "var thesaurus = require("thesaurus");"
app.get("/print/myWord/:word", function(req, res){

  
  global.gather = []; 
   
  for(var i=0;thesaurus.find(req.params.word)[i]!==undefined;i++){
      global.gather.push(thesaurus.find(req.params.word)[i]);    
  }
  res.send(global.gather); 
});
