const TrandingWrap=$('.tranding-wrap');
let offset=TrandingWrap.offset().left;
/* console.log(offset) */

TrandingWrap.on({mousemove(e){
    //console.log(e.pageX)
    if(e.pageX>=1570){
        return false;
    }else{
        $(this).css({left: -e.pageX})
    }
   
}})

$('.footer-currency>a').click(function(){
    $('.currencies').toggleClass('currencies1');
});
