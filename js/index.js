/*
* ����
*       1.����Ļ��С �� ����Ļ��ʱ��ͼ��ش�ͼ
*       2.����Ļ�ǳ�С��Ļ��ʱ��ͼ���Сͼ
* */
$(function () {
    // ��ʼ����ʾ����
    $('[data-toggle="tooltip"]').tooltip();
    $(window).on("resize",function () {
        //console.log(123)
        // ��ȡ��Ļ���
        var windowWidth = $(window).width();
        // ��ȡ���е�item
        var items = $('.carousel-inner .item');
        //console.log(windowWidth);
        // �����Ļ��ȴ���640����ʾ��ͼ
        if (windowWidth >= 640) {
            // ��ʾ��ͼ
            items.each(function(index, value) {
                var largeImage = $(value).data('large-image');
                //console.log(largeImage);
                $(value).html('<a href="javascript:;" class="large-image" style="background-image: url('+ largeImage +');"></a>');
            })
        } else {
            // ��ʾСͼ
            items.each(function(index, value) {
                var smallImage = $(value).data('small-image');
                $(value).html('<a href="javascritp:;" class="small-image"><img src="'+ smallImage +'" alt=""/></a>')
            })
        }
    }).trigger("resize");

    /* ���������ʼ�� */
    var myScroll = new IScroll('.ul-wrapper', {
        /* ֧��ˮƽ���� */
        scrollX: true,
        /* ��ֹ��ֱ���� */
        scrollY: false,
        /* ֧�������� */
        mouseWheel: true
    });
})