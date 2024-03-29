var map;
var marker;
var infoWindow;
var center = {
   lat: 34.7019399, // 緯度(ここを変数にする)
  lng: 135.51002519999997 // 経度（ここも変数にする）
};
function initMap() {
 map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
     center: center, // 地図の中心を指定
     zoom: 19 // 地図のズームを指定
   });

 marker = new google.maps.Marker({ // マーカーの追加（ここあたりに配信状況の取得がくる。　true だったら実行かな？）
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
   });

 infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">TAM 大阪</div>' // 吹き出しに表示する内容。ここにroomにとべるリンクを打ち込み
  });
 marker.addListener('click', function() { // マーカーをクリックしたとき
     infoWindow.open(map, marker); // 吹き出しの表示
    });
}
