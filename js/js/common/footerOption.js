$(document).ready(function(){
    $('#select_btn1').click(function(){
        $('#family_option').stop().show();
        $('#select_btn1').hide();
        $('#select_btn2').show();
    })

    $('#select_btn2').click(function(){
        $('#family_option').stop().hide();
        $('#select_btn2').hide();
        $('#select_btn1').show();
    })
});