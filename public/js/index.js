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
                html += `<div class="carousel-item"><a href="http://127.0.0.1:3000/case_details.html?cid=${img.cid}"><img class="w-100" src="${img.lb_pic}" /></a></div>`;
            }
            carousel.html(html);
            $("div.carousel-inner").children().first().addClass("active");
        }
    });
    $.ajax({
        url:"http://127.0.0.1:3000/index/index_case",
        type:"get",
        datatype:"json",
        success:function(res){
            var case_ul = $("#case>ul");
            var html = "";
            for(var idx_case of res){
                html += `<li class="mb-3">
                    <a href="http://127.0.0.1:3000/case_details.html?cid=${idx_case.cid}"><img class="w-100" src="${idx_case.case_pic}"></a>
                    <p class="h5 pl-1 pt-2 text-danger">￥${idx_case.price}</p>
                    <p class="pl-1 pb-2">
                        <span class="pr-2">${idx_case.cname}</span>
                        <span class="pr-2">|</span>
                        <span>${idx_case.hname}</span>
                    </p>
                </li>`
            }
            case_ul.html(html);
        }
    });
    $.ajax({
        url:"http://127.0.0.1:3000/index/index_hotel",
        type:"get",
        datatype:"json",
        success:function(res){
            var hotel_ul = $("#hotel>ul");
            var html = "";
            for(var hotel of res){
                html += `<li class="mb-3">
                    <a href="http://127.0.0.1:3000/hotel_details.html?hid=${hotel.hid}"><img class="w-100" src="${hotel.hotel_pic}"></a>
                    <a href="http://127.0.0.1:3000/hotel_details.html?hid=${hotel.hid}">
                        <p class="">${hotel.hname}</p>
                    </a>
                </li>`
            }
            hotel_ul.html(html);
        }
    });
    $.ajax({
        url:"http://127.0.0.1:3000/index/index_tips",
        type:"get",
        datatype:"json",
        success:function(res){
            var tips_div = $("#tips").children().last();
            var html = "";
            for(var tip of res){
                html += `<ul class="d-sm-flex mb-3 w-50">
                    <li>
                        <a href="http://127.0.0.1:3000/hotel_details.html?hid=${tip.tid}"><img title="${tip.title}" src="${tip.tip_pic}"></a>
                    </li>
                    <li class="d-flex ml-3 flex-column justify-content-between">
                        <p class="mr-0"><a href="http://127.0.0.1:3000/hotel_details.html?hid=${tip.tid}">${tip.title}</a></p>
                        <p class="mr-0" href="http://127.0.0.1:3000/tip_details?cid=${tip.tid}">${tip.desc}</p>
                        <p class="mr-0 small"><a href="#">READ MORE &gt;</a></p>
                    </li>
                </ul>`
            }
            tips_div.html(html);
        }
    })
})

