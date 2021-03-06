import React from "react";
import "./Find_idpw.css";
import icon_back from "./img/right-arrow.png";
import {Routes, Link, Switch, Route, BrowserRouter} from "react-router-dom";

function Find_idpw() {
  return (
    <div className="find_idpw">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/input" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/input" />
            </div>
          </a>
          <h1>아이디/비밀번호 찾기</h1>
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_idpw_inner">
        <ul>
          <li className="find_item find_id">
            <a href className="find_item_wrap">
              <p>ID</p>
              <p>아이디 찾기</p>
              <p>휴대폰 인증을 통하여 아이디를 찾습니다.</p>
            </a>
          </li>
          <li className="find_item find_pw">
            <a href className="find_item_wrap">
              <p>PW</p>
              <p>비밀번호 찾기</p>
              <p>휴대폰 인증을 통하여 비밀번호를 찾습니다.</p>
            </a>
          </li>
        </ul>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_idpw;
