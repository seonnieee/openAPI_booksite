$(document).ready(function(){

var i = 0;

//slider text 변화
//메인슬라이더 prev/next 버튼
$('#prev1').click(function(){
    i--;
    if(i < 0){
        i = $('.slider_content:last').index();
    }

    $('.slider_content').eq(i).stop().fadeIn('fast');
    $('.slider_content').eq(i-$('.slider_content:last').index()).stop().fadeOut('fast');
    
});

$('#next1').click(function(){
    i++;
    if(i > $('.slider_content:last').index()){
        i = 0;
    }
    $('.slider_content').eq(i).stop().fadeIn('fast');
    $('.slider_content').eq(i-1).stop().fadeOut('fast');

});

//자동 슬라이드 텍스트 변화
function sliderText(){
    i++;
    if(i > $('#slider_text li:last').index()){
        i = 0;
    }
    $('#slider_text li').eq(i).stop().fadeIn('slow'); 
    $('#slider_text li').eq(i-1).stop().fadeOut();
  
    }

let sliderTextInterval = setInterval(sliderText, 4000);



//slider 이미지 변화
//메인슬라이더 prev/next 버튼
var j = 0;

$('#prev1').click(function(){
    j--;
    if(j < 0){
        j = $('.slider_img:last').index();
    }    
    $('.slider_img').eq(j).stop().fadeIn('fast');
    $('.slider_img').eq(j-$('.slider_img:last').index()).stop().fadeOut('fast');

    updatePageNumber(j);
});

$('#next1').click(function(){
    j++;
    if(j > $('.slider_img:last').index()){
        j = 0;
    }
    $('.slider_img').eq(j).stop().fadeIn('fast');
    $('.slider_img').eq(j-1).stop().fadeOut('fast');

    updatePageNumber(j);
});

//자동 슬라이드 이미지 변화
function sliderImg(){
    j++;
    if(j > $('#slider_img_wrap li:last').index()){
        j = 0;
    }
    $('#slider_img_wrap li').eq(j).stop().fadeIn('slow');
    $('#slider_img_wrap li').eq(j-1).stop().fadeOut();

    updatePageNumber(j);
}

let sliderImgInterval = setInterval(sliderImg, 4000);


//stop슬라이드
var check = false;
var button = $('#stop_button');

button.click(function(){
    if(check){

        check = false;        
        sliderTextInterval = setInterval(sliderText, 3000);
        sliderImgInterval = setInterval(sliderImg, 3000);
        button.css({backgroundPositionY:0});
        button.prop('disabled', false)
    }else{
        check = true;
        clearInterval(sliderTextInterval);
        clearInterval(sliderImgInterval);
        button.css({backgroundPositionY:-30});
        button.prop('disabled',false);
    }
});

// 슬라이드 페이지 번호 변경
function updatePageNumber(index){
    var pageNumberElement = $('#this_page');
    pageNumberElement.text(index +1);
}

});

//슬라이드 하단 nav박스 css효과 반복
$(document).ready(function(){
    let i = 0;
    
    function navEvent(){
        i++;
        if(i > $('#slider_nav li:last').index()-1){
            i = 0;
        }

        $('#slider_nav li a').eq(i).css({'borderBottom':'2px solid#000','color':'#000'});
        $('#slider_nav li a').eq(i-1).css({'border':'none','color':'#767676'})
    }

    setInterval(navEvent, 4000);
});

