//ajax("http://localhost:3000/header.html")
$(function(){
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
    $.ajax({
        url:"http://127.0.0.1:3000/footer.html",
        type:"get",
        success:function(res){
            $("#footer").replaceWith(res);
        }
    })
})