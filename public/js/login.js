/*使footer始终固定在页面底部 */
$(function(){
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
});