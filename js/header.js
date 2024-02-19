const mobileMenu=$('.mobile-menu');
const appBtn=$('.header-appBar-wrap');
const closeBt=$('.appbarCloseBt');
const movileMenuBar=$('.header-mobile-menu-bar-wrap');

appBtn.on({click:function(){
    mobileMenu.css('display','block').stop().animate({left:0},500);
    movileMenuBar.stop().animate({left:'100%'},500);

}})
closeBt.on({click:function(){
    mobileMenu.stop().animate({left:'-100%'},500,function(){
        mobileMenu.css('display','none');
    })
    movileMenuBar.stop().animate({left:0},500);
}})