import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { authenticateActions } from "../redux/reducers/authenticateReducer";

const Navbar = ({ setSearchProduct }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const authenticate = useSelector((state) => state.auth.authenticate);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToLogin = () => {
    if (authenticate) {
      // dispatch({ type: "LOGOUT_SUCCESS", payload: { authenticate } });
      dispatch(authenticateActions.getLogout(authenticate));
      navigate("/");
      Swal.fire({
        title: "로그아웃",
        text: "로그아웃 되었습니다.",
        icon: "success",
        confirmButtonColor: "#000000",
      });
    } else {
      navigate("/login");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const [text, setText] = useState("");

  const onReset = () => {
    setSearchProduct("");
    setText("");
  };

  return (
    <div>
      <div>
        <div className="header-line">
          <Menu>
            <div className="m-search-area">
              <FontAwesomeIcon icon={faSearch} className="m-search-icon" />
              <input
                className="m-search"
                placeholder="제품 검색"
                value={text}
                type="text"
                onChange={(e) => {
                  setSearchProduct(e.target.value);
                  setText(e.target.value);
                }}
              />
              <button className="m-search-delete" onClick={onReset}>
                X
              </button>
            </div>
            {menuList.map((menu) => (
              <a className="side-menu">{menu}</a>
            ))}
          </Menu>

          <div className="login-button">
            <FontAwesomeIcon icon={faUser} className="login-icon" />
            <div onClick={goToLogin}>
              {authenticate ? "로그아웃" : "로그인"}
            </div>
          </div>
        </div>
        <div className="logo">
          <img
            onClick={goToHome}
            width={65}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

          <div className="search-area">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className="search"
              placeholder="제품 검색"
              value={text}
              type="text"
              onChange={(e) => {
                setSearchProduct(e.target.value);
                setText(e.target.value);
              }}
            />
            <button className="search-delete" onClick={onReset}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
