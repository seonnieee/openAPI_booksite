$(document).ready(function(){
    // 토글 메뉴 전체 show,hide 이벤트
    $('#toggle1').click(function(){
        $('#toggle1').hide();
        $('#toggle_menu_list').show();
    });

    $('#toggle2').click(function(){
        $('#toggle1').show();
        $('#toggle_menu_list').hide();
    });

    //카테고리 전체보기 안에서 하위 nav 움직이기
    $('.toggle_nav_title').click(function(){
        $('.toggle_nav_title').css({'color':'#767676', 'border':'none'});
        $(this).css({'borderBottom':'2px solid#000','color':'#000'});
    });

    //카테고리전체보기&서비스 전체보기 컨텐츠 스위치
    $('#whole_service').click(function(){
        $(this).css({'backgroundColor':'#fff','color':'black'});
        $('#whole_category').css({'backgroundColor':'#f2f2f2','color':'#767676'});
        $('#toggle_content').hide();
        $('#toggle_service').show();
    });

    $('#whole_category').click(function(){
        $(this).css({'backgroundColor':'#fff','color':'black'});
        $('#whole_service').css({'backgroundColor':'#f2f2f2','color':'#767676'});
        $('#toggle_content').show();
        $('#toggle_service').hide();
    });

});