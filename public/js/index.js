$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index/carousel",
        type:"get",
        datatype:"json",
        success:function(res){
            // console.log(res);
            var carousel = $("div.carousel-inner");
            var html = "";
            for(var img of res){
                html += `<div class="carousel-item"><a href="${img.lb_href}"><img class="w-100" src="${img.lb_pic}" /></a></div>`;
            }
            carousel.html(html);
            $("div.carousel-inner").children().first().addClass("active");
        }
    })
})