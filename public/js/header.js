//ajax("http://localhost:3000/header.html")
$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get"
    })
    .then(function(res){
        $("#header").replaceWith(res);
    })
})