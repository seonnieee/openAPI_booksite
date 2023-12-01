<h1 fontSize="50px">도서 사이트 만들기(openAPI 활용하기)</h1><br>

## 프로젝트 설명🐱‍🏍
네이버, 카카오, 구글, 정부기관 등 다양한 곳에서 제공하는 openAPI자료 활용하기 <br>
카카오 도서openAPI에 접근가능한 REST키 발급 및 활용하여 주제에 맞는 도서정보 가져오기!📙 <br>
JavaScript 효과 적용(네비게이션 메뉴, 슬라이더, 플라잉배너 등) <br>
도서정보 외에는 유지보수 편리하게 JSON형식 파일 사용하여 정보 가져오기 <br><br>
REFER TO 교보문고(Kyobobook) && 카카오openAPI <br><br>

## 사이트주소🚀
[Main] https://seonnieee.github.io/openAPI_booksite/ <br>
[Sub] https://seonnieee.github.io/openAPI_booksite/sub.html <br><br>

## 기술 스택👩‍🔧
<p>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white">
  <img src="https://img.shields.io/badge/kakao-FFCD00?style=for-the-badge&logo=kakao&logoColor=white">
</p>

### [HTML5]
• 홈페이지의 뼈대가 되는 구조 <br>
• 시맨트태그(semantic tag)로 레이아웃 구성 : header, nav, section, article, footer<br>
• 메인페이지 : 상품 넘김 버튼 구성, 플라잉배너 구성, 슬라이더 위에 플로팅배너 구성
• 서브페이지 : 책 메인 정보 구성, 상품 상세 정보 구성

### [CSS]
• 홈페이지의 HTML요소를 다채롭게 만드는 기능<br>
• 최상단 카테고리 filter 속성을 이용해 색상 추가 <br>
&nbsp;– 검색 창 위 카테고리 메뉴 참고 <br>
• 전체메뉴 scrollbar 속성 추가하여 넘치는 내용은 스크롤로 볼 수 있게 구현 <br>
&nbsp;– 전체메뉴 클릭시 확인 가능 <br>
• Img태그 hover 기능 추가<br>
&nbsp;– mouse hover시, 메인이미지 뒤에 가려진 이미지 'absolute'속성값 사용하여 지정위치에 block <br>
• stylesheet 파일로 참조하여 header 및 footer 서브페이지 재활용 <br>

### [JavaScript]
#### 🔸메인
• 전체메뉴창 <br>
&nbsp;– jQuery문법 사용하여 전체메뉴 show/hide 이벤트 적용<br>
&nbsp;– 메뉴창 show/hide 시, 아이콘 변경<br>
&nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/common/navMenu.js <br>
• 메인 광고 이미지 자동 슬라이더 기능 <br>
&nbsp;– next/prev버튼에 기능 추가하여 이미지 페이지 이동 <br>
&nbsp;– setInterval 함수를 사용해 4초마다 이미지 페이지 자동으로 증감 <br>
&nbsp;– boolean값을 활용해 이미지 stop기능 컨트롤 <br>
&nbsp;– updatePageNumber 함수를 사용해 페이지 번호 출력 <br>
&nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/main/mainSlider.js <br>
• 플라잉배너 <br>
&nbsp;– $(window).scroll과 scrollTop() 함수를 이용해 사이트 스크롤 상단 위치 지정 <br>
&nbsp;– 플라잉배너 html태그를 지정값에 고정적으로 노출되도록 함. <br>
&nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/main/flyingMain.js <br>
• 도서 카테고리 변경<br>
&nbsp;– 도서 카테고리별 주제에 맞는 도서가 노출되도록 함 <br>
&nbsp;- marginLeft, prependTo를 사용하여 앞/뒤 버튼에 따라 위치변경 <br>
&nbsp;- view-source:https://seonnieee.github.io/openAPI_booksite/index.html <br><br>

#### 🔸서버
• 도서 연관 상세 카테고리<br>
&nbsp;– 도서와 유사한 카테고리 이동 메뉴 mouseover/mouseout시, show/hide 기능 <br>
&nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/sub/categoryNav.js <br>
• 도서 이미지 로테이트<br>
&nbsp;– transform속성 및 rotateY() 속성값을 통해 도서 이미지 마우스 hover/click 이벤트 적용 <br>
&nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/sub/bookSale.js <br>
• 숨김내용 보이기<br>
$nbsp;– click시 마다, 숨김 내용 전체 show/hide 기능<br>
$nbsp;– https://seonnieee.github.io/openAPI_booksite/js/js/sub/upDownButton.js<br>

### [Kakao openAPI]–⭐추가 수정 작업⭐
• Kakao openAPI 도서에 대한 REST키 발급받아 도서의 필요한 정보만 GET으로 요청하여 받아옴<br>
• prepend, append를 사용하여 위치를 구성
• 가격은 '정규표현식' 활용하여 천단위 지정

### [JSON && Ajax]–⭐추가 수정 작업⭐
• 추후에 수정 작업이 편하도록 데이터 파일화하기!<br>
(금번 프로젝트에서는 도서정보 외 일반 상품정보에 한함)  <br>
&nbsp;– 실제 서버데이터는 없기 때문에 JSON구조 파일화  <br>
&nbsp;– https://github.com/seonnieee/openAPI_booksite/tree/main/json
• ajax 기능을 이용해 JSON파일 데이터 화면에 구현하기 <br>
&nbsp;– https://github.com/seonnieee/openAPI_booksite/tree/main/js/ajax <br><br>

## 주요 기능⚙
• 메인페이지 전체메뉴 구성 <br>
• 메인페이지 슬라이더로 이미지 변경 <br>
• 메인페이지 도서정보 openAPI를 통해 GET <br>
• 메인페이지 카테고리별 도서 확인 <br>
• 메인페이지 플라잉배너를 통해 광고/이벤트 홍보 <br>
• 서브페이지 도서 메인정보 <br>
• 서브페이지 도서 상세정보(작가정보/목차/서평 등)<br>
• 서브페이지 관련 리뷰 <br>
• 서브페이지 관련 공지사항 <br><br>

## 진행 과정🏃‍♀️
<strong>Step1.</strong> 일주일 간 메인페이지 구성(html / css) <br>
<strong>Step2.</strong> 슬라이드 JavaScript기능 구현 - stop기능 및 페이지번호 기능이 어려웠음 <br>
<strong>Step3.</strong> 플라잉배너 제작 및 JS 구현 <br>
<strong>Step4.</strong> openAPI를 통해 도서 정보 GET <br>
<strong>Step5.</strong> 일반상품, 배너정보 JSON파일화 및 Ajax로 관리 <br>
<strong>Step6.</strong> 깃허브 1차 배포 <br>
<strong>Step7.</strong> 3일간 서브페이지 구성(html / css) <br>
<strong>Step8.</strong> 서브페이지 도서 메인 이미지 rotate 구현 및 숨김내용 show/hide 구현 <br>
<strong>Step9.</strong> 깃허브 2차 배포 <br>
<strong>Step10.</strong> 서브페이지 관련 도서 openAPI GET 및 일반상품 JSON파일화 <br>
<strong>Step11.</strong> 깃허브 3차 배포 <br><br>

## 최종 정리🤸‍♀️
• openAPI를 통해 다른쪽 서버의 데이터를 사용하는 방법을 배움 <br>
• 이전 프로젝트보다 보다 다양한 JS를 적용하고 활용함😄
