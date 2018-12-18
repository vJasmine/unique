//ajax("http://localhost:3000/header.html")
$(function(){
    // 动态创建link引用header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get",
        success:function(res){
            // 请求header.html片段
            $("#header").replaceWith(res);
            // 搜索功能
            var userInput=$("#search>input");
            var btn=$("#search>button");
            btn.on("click",function(){
                // 获取输入框中的关键字并作为参数传递到案例列表页
                var kw = userInput.val().trim();
                if(kw!==""){
                    location.href = `case_list.html?kw=${kw}`;
                }
            })
            if(location.search.indexOf("kw") != -1){
                var kw = decodeURI(
                    location.search.split("=")[1]
                )
            }
            // 点击登录时，将当前所在网页的url作为参数传递到登录页，以方便登录成功后进行跳转
            $("#signin").on("click","a",function(e){
                e.preventDefault();
                location.href = "login.html?back="+location.href;
            })
            // 判断用户是否登录
            $.ajax({
                url:"http://127.0.0.1:3000/login/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                    // console.log(res);
                    if(res.ok == 0){
                        $("#signin>a").show()
                            .next().hide();
                    }else{
                        $("#signin>a").hide()
                            .next().show()
                            .children().first().html("aaa,");
                    }
                }
            })
            // 退出登录
            $("#signin>span").children().last().on("click",function(){
                $.ajax({
                    url:"http://127.0.0.1:3000/login/signout",
                    type:"get",
                    success:function(){
                        location.reload();
                    }
                })
            })
        }
    })
})