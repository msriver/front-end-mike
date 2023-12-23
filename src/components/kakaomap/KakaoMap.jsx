import React, { useEffect } from 'react'

//kakao map api를 불렀을 때 window 전역객체에 들어가는데 이를 명시해주면 접근이 가능함.
const { kakao } = window;

const KakaoMap = (props) => {

  const mapContainerStyle = props.styles;

  //처음 mount 될때만 실행
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    
    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    //지도 생성 및 객체 리턴
    new kakao.maps.Map(container, options); 
  }, []);

  return (
    <div>
      <div id="map" style={mapContainerStyle}>
      </div>
    </div>
  )
}

export default KakaoMap
