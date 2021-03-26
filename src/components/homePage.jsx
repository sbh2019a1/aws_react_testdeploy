import React, { Component } from "react";

class HomePage extends Component {
  state = {};

  render() {
    const mystyle = {
      borderRadius: "10px",
      color: "white",
      backgroundColor: "Black",
      padding: "10px",
      paddingRight: "10Px",
      paddingLeft: "10Px",
      fontFamily: "Arial",
      width: "25%",
      textAlign: "center",
      float: "left",
    };
    const div_style_1 = {
      marginTop: "20px",
      overflow: "hidden",
    };
    const div_style_2 = {
      marginLeft: "40%",
      float: "right",
      verticalAlign: "middle",
      paddingRight: "10Px",
    };
    const style_3 = {
      borderRadius: "10px",
      padding: "10px",
      color: "white",
      backgroundColor: "DodgerBlue",
    };
    const div_style_4 = {
      marginTop: "20px",
      overflow: "hidden",
    };

    return (
      <div class="container-fluid">
        <div style={div_style_1} class="d-flex align-items-center">
          <h1 style={mystyle}>Buzz Zerotoone</h1>
          <div style={div_style_2}>
            <button type="button" class="btn btn-secondary mr-1">
              About 제트크롤러
            </button>
            <button type="button" class="btn btn-secondary mr-1">
              회원가입
            </button>
            <button type="button" class="btn btn-secondary mr-1">
              로그인
            </button>
            <button type="button" class="btn btn-secondary mr-1">
              사이트맵
            </button>
          </div>
        </div>
        <div>
          <p style={style_3}>
            제트크롤러란, <br></br>국내 주요 온라인 채널에서 이야기되고 있는
            제품에 대한 이야기들과, <br></br>실제로 온라인상에서 판매되고 있는
            제품 구입자들의 리뷰를 모두 수집합니다. <br></br>제트크롤러는 정보를
            수집하는 데에만 그치지 않고, <br></br>실제로 마케팅 의사결정을
            지원할 수 있는 마켓 인텔리전스를 자동화하여 제공합니다.
          </p>
        </div>

        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              검색
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            placeholder="키워드 검색 예) 헤어 드라이기"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>
        <div class="btn-group-vertical" style={div_style_4}>
          <button type="button" class="btn btn-secondary">
            1. 전자기기
          </button>
          <button type="button" class="btn btn-secondary">
            2. 패션잡화
          </button>
          <button type="button" class="btn btn-secondary">
            3. 화장품/미용
          </button>
          <button type="button" class="btn btn-secondary">
            4. 디지털/가전
          </button>
          <button type="button" class="btn btn-secondary">
            5. 가구/인테리어
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
