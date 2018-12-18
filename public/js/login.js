$(function(){
    /*使footer始终固定在页面底部 */
    // function footerPosition(){
    //     $("#footer").removeClass("fixed-bottom");
    //     var contentHeight = document.body.scrollHeight;//网页正文全文高度
    //     var winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
    //     if(contentHeight < winHeight){
    //         console.log(contentHeight , winHeight);
    //         //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
    //         $("#footer").addClass("stay-bottom");
    //     } else {
    //         $("#footer").removeClass("stay-bottom");
    //     }
    // }
    // footerPosition();
    // $(window).resize(footerPosition);

    // 用户名和密码的正则验证
    $("li.uname>input").on("blur",function(){
        if(!$(this).val().trim()){
            $("li.uname").next().css("opacity",1);
        }else{
            $("li.uname").next().css("opacity",0);
        }
    })
    $("li.pwd>input").on("blur",function(){
        if(!$(this).val().trim()){
            $("li.pwd").next().css("opacity",1)
                .children("span").text("密码不能为空!")
            
        }else{
            $("li.pwd").next().css("opacity",0);
        }
    })
    $("li.btn_login>input").click(function(){
        $("input").blur();
        var condition=$(".uname").next().css("opacity") + $(".pwd").next().css("opacity")
        // console.log(condition);
        if(condition="00"){
            var uname=$(".uname>input").val();
            var upwd=$(".pwd>input").val();
            $.ajax({
                url:"http://localhost:3000/login/signin",
                type:"post",
                data:{uname,upwd},
                dataType:"json",
                success:function(res){
                    // console.log(res);
                    if(res.ok==0){
                        // alert(res.msg);
                        $("li.pwd").next().css("opacity",1);
                    }else{
                        alert("登录成功，即将返回之前页面")
                        if(location.search.startsWith("?back=")){
                            var url=location.search.slice(6);
                        }else{
                            var url="index.html";
                        }
                        location.href=url;
                    }
                }
            })
        }
    })
});