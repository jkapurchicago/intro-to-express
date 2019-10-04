var express = require("express"); //initialized express and saved it ot the app variable
var app = express(); 

//var catMe = require("cat-me"); 

// "/" => "Hi there! "
app.get("/", function(request, response){ 
    response.send("Hi there!"); 

}); 
app.get("/bye", function(request, response){ 
    response.send("Goodbye!!!"); 
}); 

app.get("/dog", function(request, response){ 
    response.send("MEOW!"); 

}); 

//app.post("/")

// "/bye" => "Goodbye!"


// "/dog" => "MEOW!"



//console.log("Our express app will go here!"); 

app.listen(3000, function(){ 
    console.log("server has started!!!"); 
}); 

