$(document).ready(function(){
    var isRotated = false;

    $('#book_sale_content_cover').click(function(){
        if(isRotated){
            $(this).css({"transform":"rotateY(35deg)"});
            isRotated = false;
        } else {
            $(this).css({"transform":"rotateY(180deg)"});
            isRotated = true;
        }
    });
    
    $('#book_sale_content_cover').hover(
        function(){
            if(!isRotated){
                $(this).css({"transform":"rotateY(35deg)"});
            }
        },function(){
            if(!isRotated){
                $(this).css({"transform":"rotateY(0deg)"});
            }
    });
})