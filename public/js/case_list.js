$(function(){
    // 获取搜索关键字
    var kw="";
    if(location.search.indexOf("kw=")!=-1){
        var kw=decodeURI(
          location.search.split("=")[1]
        );
    }
    function loadPage(pNum=1,pram,kw){
        $.ajax({
            url:"http://127.0.0.1:3000/clist",
            type:"get",
            data:{pNum,pram,kw},
            dataType:"json",
            success:function(res){
                // console.log(res);
                var {pCount,pNum} = res[0].output;
                // 获取案例内容
                var caseHtml = "";
                for(var item of res){
                    caseHtml +=`<li class="d-flex flex-column justify-content-between mb-4 p-1">
                        <a href="http://127.0.0.1:3000/case_details.html?cid=${item.cid}">
                            <img src="${item.case_pic_0}" />
                        </a>
                        <p class="case_row1 d-flex justify-content-between">
                            <a href="http://127.0.0.1:3000/case_details.html?cid=${item.cid}">${item.cname}</a>
                            <span class="myc00">￥${item.price}</span>
                        </p>
                        <p class="case_row2 d-flex justify-content-between">
                            <span>策划师：${item.plan_name}</span>
                            <span>
                                <img src="img/case/eye.png" />
                                ${item.watched}
                            </span>
                        </p>
                        <p class="case_row3">
                            <img src="img/case/addr.png" />
                            <span>${item.hname}</span>
                        </p>
                    </li>`;
                }
                $("#case_list>ul").html(caseHtml);
                // 获取页码内容
                var pageHtml = `<li>上一页</li>`;
                for(var i=1;i<=pCount;i++){
                    pageHtml+=`<li class="${i==pNum?'choosed':''}">${i}</li>`
                }
                pageHtml+=`<li>下一页</li>`;
                var pageUl=$("#page>ul");
                pageUl.html(pageHtml);
                // 上一页和下一页按钮禁用
                if(pNum==1){
                    pageUl.children(":first-child").addClass("forbidden");
                }
                if(pNum==pCount){
                    pageUl.children(":last-child").addClass("forbidden")
                }
            }
        })
    }
    // 页面首次加载时，立即调用函数
    if(kw==""){
        loadPage()
    }else{
        loadPage(1,1,kw);
    }
    // 点击按浏览量/价格排序时重新加载页面
    $(".order p").on("click","span",function(e){
        var span=$(this);
        if(span.is(".order p>span:not(:first)")){
            span.addClass("activity")
                .siblings().removeClass("activity")
            if(span.html()=="浏览量"){
                loadPage(1,2,kw)
            }else if(span.html()=="价格"){
                loadPage(1,3,kw)
            }else{
                loadPage(1,1,kw)
            }
        }
    })
    // 点击上/下页和页码时重新加载页面
    $("#page>ul").on("click","li",function(e){
        var li=$(this);
        // console.log(li);
        if(li.is(":not(.choosed,.forbidden)")){
            // var $lis=$("#page>ul>li:gt(0):not(:last)");
            // console.log($lis);
            var i=parseInt($("#page>ul>li.choosed").html());
            // console.log(i)
            if(li.is(":first-child")){
                pNum=i-1;
            }else if(li.html()=="下一页"){
                pNum=i+1;
            }else{
                pNum=li.html();
            }
            var ordered =$(".order p>span.activity").html();
            var pram = ordered=="综合"?1:(ordered=="浏览量"?2:3)
            loadPage(pNum,pram,"");
        }
    });
})