let winW=$(window).innerWidth();
let winH=$(window).innerHeight();
let vidH=$('#mainVideo').innerHeight();
let vidW=$('#mainVideo').innerWidth();
$('.m-video').css({width:'100%', height: winH});
if(winH > vidH){
    $('#mainVideo').css({width:'auto', height: winH})
}
if(winW > vidW){
    $('#mainVideo').css({width:winW, height: 'auto'})
}

$(window).resize(videoResizeFn)

function videoResizeFn(){
    winW=$(window).innerWidth();
    winH=$(window).innerHeight();
    vidH=$('#mainVideo').innerHeight();
    vidW=$('#mainVideo').innerWidth();

    $('.m-video').css({width:'100%', height: winH});
    if(winH > vidH){
        $('#mainVideo').css({width:'auto', height: winH})
    }
    if(winW > vidW){
        $('#mainVideo').css({width:winW, height: 'auto'})
    }
}



let videoPlay='on';
let soundMuted='off';
$('#mainVideo').get(0).autoPlay=true;
$('#mainVideo').get(0).loop=0;
$('#mainVideo').get(0).muted=true;

$('.m-again').hide();

$('.pauseIcon').on({click:function(){
    if(videoPlay==='on'){
        videoPlay='off';
        $('#mainVideo').get(0).pause()
        $('.pauseIcon').find('i').attr('class','fas fa-play' )
    }else{
        videoPlay='on';
        $('#mainVideo').get(0).play()
        $('.pauseIcon').find('i').attr('class','fas fa-pause' )
        $('.m-again').hide();
    }
}});

$(document).keypress(function(e){
    if(e.keyCode === 32 && videoPlay==="on"){
        e.preventDefault();
        videoPlay='off';
        $('#mainVideo').get(0).pause()
        $('.pauseIcon').find('i').attr('class','fas fa-play' )
       
    }else if(e.keyCode === 32 && videoPlay==="off"){
        videoPlay='on';
        $('#mainVideo').get(0).play()
        $('.pauseIcon').find('i').attr('class','fas fa-pause' )
    }
})
$('.mutedIcon').on({click:function(){
    if(soundMuted==='off'){
        soundMuted='on';
        $('#mainVideo').get(0).muted=false;
        $('.mutedIcon').find('i').attr('class','fas fa-volume-up' )
    }else{
        soundMuted='off';
        $('#mainVideo').get(0).muted=true;
        $('.mutedIcon').find('i').attr('class','fas fa-volume-mute' )
    }
}});

$(document).keypress(function(e){
    if(e.keyCode === 13 && soundMuted==="on"){
        e.preventDefault();
        soundMuted='off';
        $('#mainVideo').get(0).muted=true;
        $('.mutedIcon').find('i').attr('class','fas fa-volume-mute' )
       
    }else if(e.keyCode === 13 && soundMuted==="off"){
        soundMuted='on';
        $('#mainVideo').get(0).muted=false;
        $('.mutedIcon').find('i').attr('class','fas fa-volume-up' )
    }
})

let setId=setInterval(videoTimeCountFn,100);
function videoTimeCountFn(){
    //console.log('비디오 진행시간:'+ $('#mainVideo').get(0).currentTime)
    /* console.log('정지:'+ $('#mainVideo').get(0).ended)
    console.log('진행시간:'+ $('#mainVideo').get(0).duration) */
    if($('#mainVideo').get(0).ended==true){
        $('.m-again').show()
        videoPlay='off';    
        $('.pauseIcon').find('i').attr('class','fas fa-play' );
        clearInterval(setId)
    }
}

$('.m-again').on({click:function(){
    videoPlay='on'; 
    $('#mainVideo').get(0).play();
    $('.pauseIcon').find('i').attr('class','fas fa-pause' );
    $(this).hide();
}});
    

let nextTop=$('#section2').offset().top;
/* console.log(a) */

$('.nextIcon').click(function(){
    $(window).scrollTop(nextTop)
});
