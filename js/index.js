/*
* 需求
*       1.当屏幕是小 中 大屏幕的时候就加载大图
*       2.当屏幕是超小屏幕的时候就加载小图
* */
$(function () {
    // 初始化提示工具
    $('[data-toggle="tooltip"]').tooltip();
    $(window).on("resize",function () {
        //console.log(123)
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 获取所有的item
        var items = $('.carousel-inner .item');
        //console.log(windowWidth);
        // 如果屏幕宽度大于640就显示大图
        if (windowWidth >= 640) {
            // 显示大图
            items.each(function(index, value) {
                var largeImage = $(value).data('large-image');
                //console.log(largeImage);
                $(value).html('<a href="javascript:;" class="large-image" style="background-image: url('+ largeImage +');"></a>');
            })
        } else {
            // 显示小图
            items.each(function(index, value) {
                var smallImage = $(value).data('small-image');
                $(value).html('<a href="javascritp:;" class="small-image"><img src="'+ smallImage +'" alt=""/></a>')
            })
        }
    }).trigger("resize");

    /* 滚动插件初始化 */
    var myScroll = new IScroll('.ul-wrapper', {
        /* 支持水平滚动 */
        scrollX: true,
        /* 禁止垂直滚动 */
        scrollY: false,
        /* 支持鼠标滚动 */
        mouseWheel: true
    });
})