// 验证用户名是否合法
var $uname=$("li.name>input");
$uname.on("blur",function(){
    var $warn=$(this).next();
    var $val=$(this).val();
    var reg=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
    // console.log($val);
    if(reg.test($val.trim())){
        $warn.css("opacity",0);
    }else{
        $warn.css("opacity",1)
    }
});
// 验证电话是否合法
var $phone=$("li.phone>input");
$phone.on("blur",function(){
    var $warn=$(this).next();
    var $val=$(this).val();
    var reg=/^1[3-9]\d{9}$/;
    // console.log($val);
    if(reg.test($val.trim())){
        $warn.css("opacity",0);
    }else{
        $warn.css("opacity",1)
    }
});
// 验证密码是否合法
var $upwd1=$("li.pwd1>input");
$upwd1.on("blur",function(){
    var $warn=$(this).next();
    var $val=$(this).val();
    var reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+\*\-:;^_`]+$)[,\.#%'\+\*\-:;^_`0-9A-Za-z]{6,12}$/;
    // console.log($val);
    if(reg.test($val.trim())){
        $warn.css("opacity",0);
    }else{
        $warn.css("opacity",1)
    }
});
// 验证密码是否一致
var $upwd2=$("li.pwd2>input");
$upwd2.on("blur",function(){
    var $warn=$(this).next();
    var $val=$(this).val();
    // var $upw=$("li.pwd1>input").val();
    // console.log($val);
    if($val.trim()==$upwd1.val().trim()){
        $warn.css("opacity",0);
    }else{
        $warn.css("opacity",1)
    }
});