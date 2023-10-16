// #작가정보섹션 > 저자소개 > 숨김내용 펼치기/접기
$(document).ready(function(){
    $('#person_down1').click(function(){
        $('#person_content1').css({"height":"auto"});
        $(this).hide();
        $('#person_up1').show();
        $('#overflow_text1').text('접기')
    })

    $('#person_up1').click(function(){
        $('#person_content1').css({"height":"70px"});
        $(this).hide();
        $('#person_down1').show();
        $('#overflow_text1').text('펼치기')
    })
});

// #작가정보섹션 > 번역자소개 > 숨김내용 펼치기/접기
$(document).ready(function(){
    $('#person_down2').click(function(){
        $('#person_content2').css({"height":"auto"});
        $(this).hide();
        $('#person_up2').show();
        $('#overflow_text2').text('접기')
    })

    $('#person_up2').click(function(){
        $('#person_content2').css({"height":"70px"});
        $(this).hide();
        $('#person_down2').show();
        $('#overflow_text2').text('펼치기')
    })
});

// #목차섹션 펼치기/접기 이벤트
$(document).ready(function(){
    // 펼치기
    $('#person_down3').click(function(){
        $('#book_table_content_wrap').css({"height":"auto"});
        $('#book_table_content_overflow').css({"height":"auto"})
        $('#book_table_overflow_wrap').css({"height":"auto"});
        $(this).hide();
        $('#person_up3').show();
        $('#overflow_text3').text('접기');
    });

    // 접기
    $('#person_up3').click(function(){
        $('#book_table_content_wrap').css({"height":"220px"});
        $('#book_table_content_overflow').css({"height":"180px"})
        $('#book_table_overflow_wrap').css({"height":"180px"});
        $(this).hide();
        $('#person_down3').show();
        $('#overflow_text3').text('펼치기');
    });
});

// #추천사 섹션 펼치기/접기 이벤트
$(document).ready(function(){
    // 펼치기
    $('#person_down4').click(function(){
        $('#book_recommend_content_wrap').css({"height":"auto"});
        $('#book_recommend_content_overflow').css({"height":"auto"})
        $(this).hide();
        $('#person_up4').show();
        $('#overflow_text4').text('접기');
    });

    // 접기
    $('#person_up4').click(function(){
        $('#book_recommend_content_wrap').css({"height":"260px"});
        $('#book_recommend_content_overflow').css({"height":"220px"})
        $(this).hide();
        $('#person_down4').show();
        $('#overflow_text4').text('펼치기');
    });
});

// #출판사 서평 섹션 펼치기/접기 이벤트
$(document).ready(function(){
    // 펼치기
    $('#person_down5').click(function(){
        $('#book_publisher_content_wrap').css({"height":"auto"});
        $('#book_publisher_content_overflow').css({"height":"auto"})
        $(this).hide();
        $('#person_up5').show();
        $('#overflow_text5').text('접기');
    });

    // 접기
    $('#person_up5').click(function(){
        $('#book_publisher_content_wrap').css({"height":"290px"});
        $('#book_publisher_content_overflow').css({"height":"250px"})
        $(this).hide();
        $('#person_down5').show();
        $('#overflow_text5').text('펼치기');
    });
});

// klover리뷰 상세내용 접기,펼치기
$(document).ready(function(){
    // 첫 번째 리뷰
    // 펼치기
    $('#klover_down1').click(function(){
        $('#user_comment_content1').css({"height":"auto"});
        $('#user_comment_inner1').css({"height":"auto"})
        $(this).hide();
        $('#klover_up1').show();
        $('#klover_text1').text('접기');
    });

    // 접기
    $('#klover_up1').click(function(){
        $('#user_comment_content1').css({"height":"130px"});
        $('#user_comment_inner1').css({"height":"100px"})
        $(this).hide();
        $('#klover_down1').show();
        $('#klover_text1').text('펼치기');
    });

    // 두 번째 리뷰
    // 펼치기
    $('#klover_down2').click(function(){
        $('#user_comment_content2').css({"height":"auto"});
        $('#user_comment_inner2').css({"height":"auto"})
        $(this).hide();
        $('#klover_up2').show();
        $('#klover_text2').text('접기');
    });

    // 접기
    $('#klover_up2').click(function(){
        $('#user_comment_content2').css({"height":"130px"});
        $('#user_comment_inner2').css({"height":"100px"})
        $(this).hide();
        $('#klover_down2').show();
        $('#klover_text2').text('펼치기');
    });

    // 세 번째 리뷰
    // 펼치기
    $('#klover_down3').click(function(){
        $('#user_comment_content3').css({"height":"auto"});
        $('#user_comment_inner3').css({"height":"auto"})
        $(this).hide();
        $('#klover_up3').show();
        $('#klover_text3').text('접기');
    });

    // 접기
    $('#klover_up3').click(function(){
        $('#user_comment_content3').css({"height":"130px"});
        $('#user_comment_inner3').css({"height":"100px"})
        $(this).hide();
        $('#klover_down3').show();
        $('#klover_text3').text('펼치기');
    });

    // 네 번째 리뷰
    // 펼치기
    $('#klover_down4').click(function(){
        $('#user_comment_content4').css({"height":"auto"});
        $('#user_comment_inner4').css({"height":"auto"})
        $(this).hide();
        $('#klover_up4').show();
        $('#klover_text4').text('접기');
    });

    // 접기
    $('#klover_up4').click(function(){
        $('#user_comment_content4').css({"height":"130px"});
        $('#user_comment_inner4').css({"height":"100px"})
        $(this).hide();
        $('#klover_down4').show();
        $('#klover_text4').text('펼치기');
    });

});