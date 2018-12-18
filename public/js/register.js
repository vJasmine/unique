$(function(){
    var checkElem=function(elem,reg,text1,text2){
        var elem_val = elem.val();
        var elem_warn = elem.next();
        var warn = elem_warn.children().last();
        if(elem_val==""){
            elem_warn.css("opacity",1);
            warn.text(text1);
        }else if(reg.test(elem_val.trim())){
            elem_warn.css("opacity",0);
        }else{
            elem_warn.css("opacity",1);
            warn.text(text2);
        }
    }
    // 1.验证用户名
    var elem_uname=$("li.name>input");
    elem_uname.on("blur",function(){
        var uname=$(this).val();
        var reg=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
        checkElem($(this),reg,"用户名不能为空","由3-16位汉字、字母、数字组成");        
        // 发送ajax请求，验证用户名是否已经存在
        $.ajax({
            url:"http://127.0.0.1:3000/register/checkname",
            type:"get",
            data:{uname},
            dataType:"json",
            success:(res)=>{
                console.log(res);
                // 根据服务器响应回来的状态码给出提示信息
                if(res.code==0){
                    $(this).next().css("opacity",1)
                    .children().last().text("用户名已被占用!");
                }
            }
        })
    });
    // 2.验证电话
    var elem_phone=$("li.phone>input");
    elem_phone.on("blur",function(){
        var phone=$(this).val();
        var reg=/^1[3-9]\d{9}$/;
        checkElem($(this),reg,"手机号码不能为空","请输入正确的手机号码");
        // 发送ajax请求，验证手机号是否已经存在
        $.ajax({
            url:"http://127.0.0.1:3000/register/checkphone",
            type:"get",
            data:{phone},
            dataType:"json",
            success:(res)=>{
                // console.log(res);
                // 根据服务器响应回来的状态码给出提示信息
                if(res.code==0){
                    $(this).next().css("opacity",1)
                    .children().last().text("该手机号已被注册!");
                }
            }
        })
    });
    // 3.验证密码是否合法
    var elem_upwd=$("li.pwd1>input");
    elem_upwd.on("blur",function(){
        var reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+\*\-:;^_`]+$)[,\.#%'\+\*\-:;^_`0-9A-Za-z]{6,12}$/;
        checkElem($(this),reg,"密码不能为空","6-12位，必含数字、字母、符号三种中的两种");
    });
    // 4.验证密码是否一致
    var elem_upwd2=$("li.pwd2>input");
    elem_upwd2.on("blur",function(){
        var elem_warn=$(this).next();
        var warn=elem_warn.children().last();
        var upwd2=$(this).val();
        if(upwd2==""){
            elem_warn.css("opacity",1);
            warn.text("密码不能为空");
        }else if(upwd2.trim()==elem_upwd.val().trim()){
            elem_warn.css("opacity",0);
        }else{
            elem_warn.css("opacity",1);
            warn.text("两次输入的密码不一致");
        }
    });
    // 5.为注册按钮添加事件：前后端验证均通过则成功注册(插入数据到数据库)并跳转首页页，否则提示注册失败。
    var btn=$("li.reg_btn");
    btn.on("click",function(){
        $("input").blur();
        var checkname=$("li.name>div").css("opacity");
        var checkphone=$("li.phone>div").css("opacity");
        var checkupwd1 = $("li.pwd1>div").css("opacity");
        var checkupwd2 = $("li.pwd2>div").css("opacity");
        var checkagree = $("li.agree>input").prop("checked") ? "0" : "1";
        var checkRes=[checkname,checkphone,checkupwd1,checkupwd2,checkagree];
        // console.log(checkRes);
        var uname=elem_uname.val();
        var phone=elem_phone.val();
        var upwd=elem_upwd.val();
        var sum=0;
        for(var i=0; i<checkRes.length; i++){
            sum += parseInt(checkRes[i]);
        }
        // console.log(sum);
        if(sum==0){
            // console.log("ok");
            $.ajax({
                url:"http://127.0.0.1:3000/register",
                type:"post",
                data:{uname,phone,upwd},
                dataType:"json",
                success:function(res){
                    // console.log(res);
                    if(res.code==0){
                        alert("注册失败了！");
                    }else{
                        alert("注册成功，跳转登录页...");
                        location.replace("http://127.0.0.1:3000/login.html");
                    }
                }
            })
        }
    })
})