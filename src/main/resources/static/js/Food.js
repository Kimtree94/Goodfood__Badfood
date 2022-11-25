let Lposition =[];
let Rposition =[];
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
        '<th>업종명</th><th>업소명</th><th>소재지도로명주소</th><th>처분명</th><th>위반내용</th>'+
        '<th>처분내용</th><th>처분일자</th><th>처분기간</th><th>관리기관</th><th>위도</th><th>경도</th><th>데이터기준일자</th>'+
        '</tr>'
        for(let i = 0 ; i<object.data.length; i++){
             Lposition.push(object.data[i].위도)
             Rposition.push(object.data[i].경도)
         html += '<tr>'+
         '<th>'+object.data[i].업종명+'</th><th>'+object.data[i].업소명+'</th><th>'+object.data[i].소재지+'</th><th>'+object.data[i].처분명+'</th><th>'+object.data[i].위반내용+'</th>'+
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


    console.log(Lposition)
    console.log(Rposition)

    console.log(Lposition[0])
    /*************************************************카카오맵API******************************************************/
    var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
            center : new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
            level : 14 // 지도의 확대 레벨
        });

        // 마커 클러스터러를 생성합니다
        // 마커 클러스터러를 생성할 때 disableClickZoom 값을 true로 지정하지 않은 경우
        // 클러스터 마커를 클릭했을 때 클러스터 객체가 포함하는 마커들이 모두 잘 보이도록 지도의 레벨과 영역을 변경합니다
        // 이 예제에서는 disableClickZoom 값을 true로 설정하여 기본 클릭 동작을 막고
        // 클러스터 마커를 클릭했을 때 클릭된 클러스터 마커의 위치를 기준으로 지도를 1레벨씩 확대합니다
        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 10, // 클러스터 할 최소 지도 레벨
            disableClickZoom: true // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
        });

        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
        $.get("/download/web/data/chicken.json", function(data) {
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = $(data.positions).map(function(i, position) {
                return new kakao.maps.Marker({
                            position : new kakao.maps.LatLng(position.lat, position.lng)
                });
                console.log(position)
            });
            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        });
        // 마커를 생성합니다

        // 마커 클러스터러에 클릭이벤트를 등록합니다
        // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
        // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
        kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {

            // 현재 지도 레벨에서 1레벨 확대한 레벨
            var level = map.getLevel()-1;

            // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
            map.setLevel(level, {anchor: cluster.getCenter()});
        });


        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);
}