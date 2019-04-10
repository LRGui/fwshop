// 六张图片插件
// ---如何使用---
//1.将标题加上jc-title类
//2. 将六张图片用id为 jc 包裹起来
//3.引入这个文件


$(function() {
    var jcindex = 0;
    var containerW = 0;
    //jc容器
    var $jc = $('#jc').children();
    var jcLen = $jc.length;
    //contaner容器
    var $container = $('#jc').closest('.container');
    $container.append('<a href="#"><div id="jc-last">&lt;</div></a><a href="#"><div id="jc-next">&gt;</div></a>');
    jcheng();

    function jcheng() {
        if ($(window).outerWidth() < 1024) { //手机端不操作

            $container.css({
                    position: 'static',
                    height: 'auto',
                    overflow: 'initial'
                })
                //jc容器中的每个盒子样式
            for (var i = 0; i < jcLen; i++) {
                $jc.eq(i).css({
                    position: 'static',
                })
            }
            //隐藏上下按钮
            $('#jc-last,#jc-next').css('display', 'none');
            return false;
        }
        $('#jc-last,#jc-next').css('display', 'block');
        //容器的宽度
        containerW = $container.width();
        //标题
        var $title = $container.find('.jc-title').eq(0);
        //标题的高度
        var titleH = $title.outerHeight();
        //jc容器的其中一个元素高度为
        var jcItemHeight = $jc.eq(0).outerHeight();
        var jcItemWidth = $jc.eq(0).outerWidth();
        //给容器设置样式
        $container.css({
                position: 'relative',
                height: titleH + jcItemHeight,
                overflow: 'hidden'
            })
            //jc容器中的每个盒子样式
        for (var i = 0; i < jcLen; i++) {
            $jc.eq(i).css({
                position: 'absolute',
                top: titleH,
                left: containerW / 4 * (i - jcindex)
            })
        }
    }
    $(window).on('resize', jcheng);


    //<!-- 上下控制箭头 -->
    //<div id="jc-last"><a href="#">&lt;</a></div>
    //<div id="jc-next"><a href="#">&gt;</a></div>
    //在容器中插入这两个元素


    //jc-last，jc-next样式
    $('#jc-last,#jc-next').css({
        position: 'absolute',
        width: 30,
        height: 30,
        'text-align': 'center',
        'line-height': '30px',
        border: '1px solid #ccc',
        right: 70,
        top: 30
    });
    $('#jc-next').css('right', '30px');

    //jc-next控制
    $('#jc-next').click(function(e) {
            e.preventDefault();
            jcindex++;
            if (jcindex >= (jcLen - 4)) {
                jcindex = jcLen - 4;
            }
            for (var i = 0; i < jcLen; i++) {
                $jc.eq(i).animate({
                    left: containerW / 4 * (i - jcindex)
                }, 1000);
            }
        })
        //jc-last控制
    $('#jc-last').click(function(e) {
        e.preventDefault();
        jcindex--;
        if (jcindex <= 0) {
            jcindex = 0;
        }
        for (var i = 0; i < jcLen; i++) {
            $jc.eq(i).animate({
                left: containerW / 4 * (i - jcindex)
            }, 1000);
        }
    })
})