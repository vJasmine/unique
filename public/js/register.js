$(function(){
    // 1.验证用户名
    var $uname=$("li.name>input");
    $uname.on("blur",function(){
        var $warn=$(this).next();
        var $warnText=$warn.children().last();
        var $val=$(this).val();
        var reg=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
        // console.log($val,$warnText);
        if($val==""){
            $warn.css("opacity",1);
            $warnText.text("用户名不能为空");
        }else if(reg.test($val.trim())){
            $warn.css("opacity",0);
        }else{
            $warn.css("opacity",1);
            $warnText.text("由3-16位汉字、字母、数字组成");
        }
    });
    // 1.2验证电话是否合法
    var $phone=$("li.phone>input");
    $phone.on("blur",function(){
        var $warn=$(this).next();
        var $warnText=$warn.children().last();
        var $val=$(this).val();
        var reg=/^1[3-9]\d{9}$/;
        if($val==""){
            $warn.css("opacity",1);
            $warnText.text("手机号码不能为空");
        }else if(reg.test($val.trim())){
            $warn.css("opacity",0);
        }else{
            $warn.css("opacity",1);
            $warnText.text("请输入正确的手机号码");
        }
    });
    // 1.3验证密码是否合法
    var $upwd1=$("li.pwd1>input");
    $upwd1.on("blur",function(){
        var $warn=$(this).next();
        var $warnText=$warn.children().last();
        var $val=$(this).val();
        var reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+\*\-:;^_`]+$)[,\.#%'\+\*\-:;^_`0-9A-Za-z]{6,12}$/;
        // console.log($val);
        if($val==""){
            $warn.css("opacity",1);
            $warnText.text("密码不能为空");
        }else if(reg.test($val.trim())){
            $warn.css("opacity",0);
        }else{
            $warn.css("opacity",1);
            $warnText.text("6-12位，必含数字、字母、符号三种中的两种");
        }
    });
    // 1.4验证密码是否一致
    var $upwd2=$("li.pwd2>input");
    $upwd2.on("blur",function(){
        var $warn=$(this).next();
        var $warnText=$warn.children().last();
        var $val=$(this).val();
        if($val==""){
            $warn.css("opacity",1);
            $warnText.text("密码不能为空");
        }else if($val.trim()==$upwd1.val().trim()){
            $warn.css("opacity",0);
        }else{
            $warn.css("opacity",1)
        }
    });
    // 2.后端验证输入的用户名和电话是否已经存在
    // $.ajax({
    //     url:"/register",
    //     type:"post",
        
    // })
})
























/*使footer始终固定在页面底部 */
/*$(function(){
    function footerPosition(){
        $("#footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight;//网页正文全文高度
        var winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(contentHeight < winHeight){
            console.log(contentHeight , winHeight);
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("#footer").addClass("stay-bottom");
        } else {
            $("#footer").removeClass("stay-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});*/