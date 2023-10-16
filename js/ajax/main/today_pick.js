 // 오늘의 선택 '전체' 카테고리 디테일&서브 메뉴
 
 $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"에세이" },
      headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function( msg ) {

      var boxs = document.getElementsByClassName('today_wrap');

          for(var i=0; i<boxs.length; i++){

            $("#todayDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
            $("#todayDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></h3>");
            $("#todayDetail > .today_wrap > .today_info").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
            $("#todayDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");

            var price=msg.documents[i].price;
            var sale=msg.documents[i].sale_price;
            var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var percent=(((price-sale)/price)*100)+"%"
                     

            $("#todayDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+percent+"</span>");
            $("#todayDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+sale2+"</span>");
            $("#todayDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+"원"+"</span>");
            
            
            $("#todayDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+msg.documents[i].publisher+"</p>");
            
            var str=msg.documents[i].contents;
            var str2=str.substring(0,150);

            $("#todayDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+str2+"…"+"</p>");

            $('#todaySubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
            $('#todaySubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
          }

    });

 // 오늘의 선택 '국내도서' 카테고리 디테일&서브 메뉴
 
 $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
  })
  .done(function( msg ) {

    var boxs = document.getElementsByClassName('today_wrap');

        for(var i=0; i<boxs.length; i++){

          $("#domDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $("#domDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></h3>");
          $("#domDetail > .today_wrap > .today_info").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
          $("#domDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");

          var price=msg.documents[i].price;
          var sale=msg.documents[i].sale_price;
          var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          var percent=(((price-sale)/price)*100)+"%"
                   

          $("#domDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+percent+"</span>");
          $("#domDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+sale2+"</span>");
          $("#domDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+"원"+"</span>");
          
          
          $("#domDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+msg.documents[i].publisher+"</p>");
          
          var str=msg.documents[i].contents;
          var str2=str.substring(0,150);

          $("#domDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+str2+"…"+"</p>");

          $('#domicSubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $('#domicSubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
        }

  });

 // 오늘의 선택 '외국도서' 카테고리 디테일&서브 메뉴
 
 $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"조지" },
    headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
  })
  .done(function( msg ) {

    var boxs = document.getElementsByClassName('today_wrap');

        for(var i=1; i<=boxs.length; i++){

          $("#overDetail > .today_wrap > .today_book").eq(i-1).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $("#overDetail > .today_wrap > .today_info").eq(i-1).append("<h3><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></h3>");
          $("#overDetail > .today_wrap > .today_info").eq(i-1).append("<span>"+msg.documents[i].authors+"</span>");
          $("#overDetail > .today_wrap > .today_info").eq(i-1).append("<div class='today_price'></div>");

          var price=msg.documents[i].price;
          var sale=msg.documents[i].sale_price;
          var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          var percent=(((price-sale)/price)*100)+"%"
                   

          $("#overDetail > .today_wrap > .today_info > .today_price").eq(i-1).append("<span class='today_percent'>"+percent+"</span>");
          $("#overDetail > .today_wrap > .today_info > .today_price").eq(i-1).append("<span class='today_val'>"+sale2+"</span>");
          $("#overDetail > .today_wrap > .today_info > .today_price").eq(i-1).append("<span class='today_unit'>"+"원"+"</span>");
          
          
          $("#overDetail > .today_wrap > .today_info").eq(i-1).append("<p class='info_comment'>"+msg.documents[i].publisher+"</p>");
          
          var str=msg.documents[i].contents;
          var str2=str.substring(0,150);

          $("#overDetail > .today_wrap > .today_info").eq(i-1).append("<p class='info_detail'>"+str2+"…"+"</p>");

          $('#overSubWrap > .today_sub_content').eq(i-1).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $('#overSubWrap > .today_sub_content').eq(i-1).append("<span><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
        }

  });

// 오늘의 선택 'eBook' 카테고리 디테일&서브 메뉴
 
 $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"마켓" },
    headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
  })
  .done(function( msg ) {

    var boxs = document.getElementsByClassName('today_wrap');

        for(var i=0; i<boxs.length; i++){

          $("#eBookDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $("#eBookDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></h3>");
          $("#eBookDetail > .today_wrap > .today_info").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
          $("#eBookDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");

          var price=msg.documents[i].price;
          var sale=msg.documents[i].sale_price;
          var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          var percent=(((price-sale)/price)*100)+"%"
                   

          $("#eBookDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+percent+"</span>");
          $("#eBookDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+sale2+"</span>");
          $("#eBookDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+"원"+"</span>");
          
          
          $("#eBookDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+msg.documents[i].publisher+"</p>");
          
          var str=msg.documents[i].contents;
          var str2=str.substring(0,150);

          $("#eBookDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+str2+"…"+"</p>");

          $('#eBookSubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $('#eBookSubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
        }

  });

  // 오늘의 선택 'sam' 카테고리 디테일&서브 메뉴
 
 $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"심리" },
    headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
  })
  .done(function( msg ) {

    var boxs = document.getElementsByClassName('today_wrap');

        for(var i=0; i<boxs.length; i++){

          $("#samDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $("#samDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></h3>");
          $("#samDetail > .today_wrap > .today_info").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
          $("#samDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");

          var price=msg.documents[i].price;
          var sale=msg.documents[i].sale_price;
          var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          var percent=(((price-sale)/price)*100)+"%"
                   

          $("#samDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+percent+"</span>");
          $("#samDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+sale2+"</span>");
          $("#samDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+"원"+"</span>");
          
          
          $("#samDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+msg.documents[i].publisher+"</p>");
          
          var str=msg.documents[i].contents;
          var str2=str.substring(0,150);

          $("#samDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+str2+"…"+"</p>");

          $('#samSubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
          $('#samSubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
        }

  });

  // 핫트랙스 & 교보ONLY는 별도 json파일로 처리
  // 핫트랙스
  $(function(){
    $.ajax({
        url : "./json/main/todayPickHot.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $("#hotDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='img/main/todaypick/"+data[i].url+"' alt='책표지'></a>");
                    $("#hotDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+data[i].title+"</a></h3>");
                    $("#hotDetail > .today_wrap > .today_info").eq(i).append("<span>"+data[i].author+"</span>");
                    $("#hotDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");
                    $("#hotDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+data[i].percent+"</span>");
                    $("#hotDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+data[i].val+"</span>");
                    $("#hotDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+data[i].unit+"</span>");
                    $("#hotDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+data[i].comment+"</p>");
                    $("#hotDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+data[i].detail+"</p>");
                    $('#hotSubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='img/main/todaypick/"+data[i].url+"' alt='책표지'></a>");
                    $('#hotSubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+data[i].title+"</a></span>"); 
                }
            }
        }
    })
  });

  //교보ONLY
  $(function(){
    $.ajax({
        url : "./json/main/todayPickOnly.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $("#onlyDetail > .today_wrap > .today_book").eq(i).append("<a href='sub.html' target='_self'><img src='img/main/todaypick/"+data[i].url+"' alt='책표지'></a>");
                    $("#onlyDetail > .today_wrap > .today_info").eq(i).append("<h3><a href='sub.html' target='_self'>"+data[i].title+"</a></h3>");
                    $("#onlyDetail > .today_wrap > .today_info").eq(i).append("<span>"+data[i].author+"</span>");
                    $("#onlyDetail > .today_wrap > .today_info").eq(i).append("<div class='today_price'></div>");
                    $("#onlyDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_percent'>"+data[i].percent+"</span>");
                    $("#onlyDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_val'>"+data[i].val+"</span>");
                    $("#onlyDetail > .today_wrap > .today_info > .today_price").eq(i).append("<span class='today_unit'>"+data[i].unit+"</span>");
                    $("#onlyDetail > .today_wrap > .today_info").eq(i).append("<p class='info_comment'>"+data[i].comment+"</p>");
                    $("#onlyDetail > .today_wrap > .today_info").eq(i).append("<p class='info_detail'>"+data[i].detail+"</p>");
                    $('#onlySubWrap > .today_sub_content').eq(i).append("<a href='sub.html' target='_self'><img src='img/main/todaypick/"+data[i].url+"' alt='책표지'></a>");
                    $('#onlySubWrap > .today_sub_content').eq(i).append("<span><a href='sub.html' target='_self'>"+data[i].title+"</a></span>"); 
                }
            }
        }
    })
  });

