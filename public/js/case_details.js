$(function(){
    var cid=location.search.split("=")[1];
    $.ajax({
        url:"http://127.0.0.1:3000/cdetail",
        type:"get",
        data:{cid},
        dataType:"json",
        success:function(res){
            console.log(res);
            var {cname,case_details,cstyle,hname,price,ctime,case_pic_0,case_pic_1,case_pic_2,case_pic_3,case_pic_4,case_pic_5}=res;
            $(".nav").children().last().html(cname);
            $(".title").html(cname);
            $(".case_style>span").html(cstyle.split("、").join(' | '));
            $(".subtitle").html(case_details);
            $(".price").children().last().html("￥"+price);
            $(".ctime").html(ctime);
            $(".hotel").html(hname);
            $(".bigPic>img").attr("src",case_pic_1)
            $(".detail_left>ul").children().first().html(`<img class="w-100" src="${case_pic_1}" />`)
                .next().html(`<img class="w-100" src="${case_pic_2}" />`)
                .next().html(`<img class="w-100" src="${case_pic_3}" />`)
                .next().html(`<img class="w-100" src="${case_pic_4}" />`)
                .next().html(`<img class="w-100" src="${case_pic_5}" />`)
            var minPics = $(".detail_left>ul");
            minPics.on("mouseover",function(e){
                $(".bigPic>img").attr("src",e.target.src)
            })
            $(".plist").children().first().html(`<img class="w-100" src="${case_pic_1}" />`)
                .next().html(`<img class="w-100" src="${case_pic_2}" />`)
                .next().html(`<img class="w-100" src="${case_pic_3}" />`)
                .next().html(`<img class="w-100" src="${case_pic_4}" />`)
                .next().html(`<img class="w-100" src="${case_pic_5}" />`)
            var intro = $(".intro");
            intro.on("click","li",function(e){
                console.log(e.target)
                $(e.target).addClass("active")
                    .siblings().removeClass("active");
                if($(e.target).html()=="案例详情"){
                    $(".desc>div>div:first-child").removeClass("myhide")
                        .siblings().addClass("myhide");
                }else if($(e.target).html()=="报价详情"){
                    $(".desc>div>div:nth-child(2)").removeClass("myhide")
                        .siblings().addClass("myhide");
                }else{
                    $(".desc>div>div:last-child").removeClass("myhide")
                        .siblings().addClass("myhide");
                }
            })
            
        }
        
    })
})