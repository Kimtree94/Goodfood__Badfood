    /*************************************************카카오맵API******************************************************/
    var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
        center : new kakao.maps.LatLng(37.32186, 126.8308495), // 지도의 중심좌표
        level : 6 // 지도의 확대 레벨
    });



var imageSrc ='/static/img/free-icon-heart-4551298.png', // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨,
        image: markerImage // 마커이미지 설정
    });

badfood()
/*위반 음식점 리스트*/
function badfood(){
$.ajax({
    url:"/foodinfo/badfood",
    type:"get",
    success: (re) =>{
      /*  console.log(typeof(re[0]));
        console.log(JSON.parse(re[0]));*/
        let object = JSON.parse(re[0]);
        let html = '<tr>'+
        '<th>업종명</th><th>업소명</th><th>처분명</th><th>위반내용</th>'+
        '<th>처분내용</th><th>처분일자</th><th>처분기간</th><th>관리기관</th><th>위도</th><th>경도</th><th>데이터기준일자</th>'+
        '</tr>'
        for(let i = 0 ; i<object.data.length; i++){
         html += '<tr>'+
         '<th>'+object.data[i].업종명+'</th><th>'+object.data[i].업소명+'</th><th>'+object.data[i].처분명+'</th><th>'+object.data[i].위반내용+'</th>'+
         '<th>'+object.data[i].처분내용+'</th><th>'+object.data[i].처분일자+'</th><th>'+object.data[i].처분기간+'</th><th>'+object.data[i].관리기관+'</th><th>'+object.data[i].위도+'</th><th>'+object.data[i].경도+'</th><th>'+object.data[i].데이터기준일자+'</th>'+
         '</tr>'
           }
         document.querySelector('.badfoodt').innerHTML=html;
        }
    })
}


goodfood()
/*모범 음식점 리스트*/
function goodfood(){
$.ajax({
    url:"/foodinfo/goodfood",
    type:"get",
    success: (re) =>{
  /*      console.log(typeof(re[0]));
        console.log(JSON.parse(re[0]));*/
        let object = JSON.parse(re[0]);
        let html = '<tr>'+
        '<th>업종명</th><th>업소명</th><th>소재지도로명주소</th><th>처분명</th><th>위반내용</th>'+
        '<th>처분내용</th><th>처분일자</th><th>처분기간</th><th>관리기관</th><th>위도</th><th>경도</th><th>데이터기준일자</th>'+
        '</tr>'
        for(let i = 0 ; i<object.data.length; i++){
         html += '<tr>'+
         '<th>'+object.data[i].경도+'</th><th>'+object.data[i].데이터기준일자+'</th><th>'+object.data[i].분야명+'</th><th>'+object.data[i].소재지도로명주소+'</th><th>'+object.data[i].소재지지번주소+'</th>'+
         '<th>'+object.data[i].업소명+'</th><th>'+object.data[i].영업시간+'</th><th>'+object.data[i].위도+'</th><th>'+object.data[i].전화번호+'</th><th>'+object.data[i].주메뉴+'</th><th>'+object.data[i].주차여부+'</th>'+
         '</tr>'
           }
         document.querySelector('.goodfoodt').innerHTML=html;
        }
    })
}

getbadfood();
function getbadfood(){
        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get("/foodinfo/badfood", function(data) {
            let object = JSON.parse(data[0]);
            console.log( object.data[0]  )
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = object.data.map( (e) => {
                 var marker =  new kakao.maps.Marker({
                         position : new kakao.maps.LatLng(e.위도, e.경도),
                         markerImage
                    });
                   // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
                    kakao.maps.event.addListener(marker, 'click', function() {
                        openinformation(e.위도,e.경도);
                        function openinformation(위도,경도){ //모달 열기 이벤트,
                            document.querySelector(".trigger").click()//해당버튼을 누를때
                            let info=document.querySelector('.modaltable')

                         fooghtml =   '<tr>'+
                                     '<th style="widt94px">업종명 :</th> <td>'+e.업종명+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">업소명:</th> <td>'+e.업소명+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">위반내용:</th> <td>'+e.위반내용+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">처분내용:</th> <td>'+e.처분내용+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">처분일자:</th> <td>'+e.처분일자+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">처분기간:</th> <td>'+e.처분기간+'</td>'+
                                     '</tr>'

                            info.innerHTML = fooghtml
                        }//모달내 내용 띄우기
                    });//카카오 이벤트 리스너
                  return marker;
             }  ) //markers end
            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        });//
}
getgdfood()
function getgdfood(){
        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get("/foodinfo/goodfood", function(data) {
            let object = JSON.parse(data[0]);
            console.log( object.data[0]  )
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = object.data.map( (e) => {
                 var marker =  new kakao.maps.Marker({
                         position : new kakao.maps.LatLng(e.위도, e.경도)
                    });
                   // 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
                    kakao.maps.event.addListener(marker, 'click', function() {
                        openinformation(e.위도,e.경도);
                        function openinformation(위도,경도){ //모달 열기 이벤트,
                            document.querySelector(".trigger").click()//해당버튼을 누를때
                            let info=document.querySelector('.modaltable')

                         fooghtml =   '<tr>'+
                                     '<th style="widt94px">분야명 :</th> <td>'+e.분야명+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">행정읍면동:</th> <td>'+e.행정읍면동+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">업소명:</th> <td>'+e.업소명+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">소재지도로명주소:</th> <td>'+e.소재지도로명주소+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">소재지지번주소:</th> <td>'+e.소재지지번주소+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">전화번호:</th> <td>'+e.전화번호+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">영업시간:</th> <td>'+e.영업시간+'</td>'+
                                     '</tr>'+
                                     '<tr>'+
                                     '<th style="widt94px">주메뉴:</th> <td>'+e.주메뉴+'</td>'+
                                     '</tr>'
                            info.innerHTML = fooghtml
                        }//모달내 내용 띄우기

                    });//카카오 이벤트 리스너
                  return marker;
             }  ) //markers end
            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        });//
}

/*==============================================================================================================*/
$( document ).ready(function() {
  $('.trigger').click(function() {
     $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur');
     return false;
  });
});