// 슬라이더 text 영역

$(function(){
    $.ajax({
        url:"./json/main/mainSlider.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#slider_text').append("<li class='slider_content'><a href='#'><p>"+ data[i].content1+ "<br>" + data[i].content2+"</p></a></li>");
                }
            }
        }
    })
});

// 슬라이더 img 영역

$(function(){
    $.ajax({
        url:"./json/main/mainSlider.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#slider_img_wrap').append("<li class='slider_img'><a href='#'><img src = 'img/main/slider/" + data[i].url + "'></a></li>");
                }
            }
        }
    })
});