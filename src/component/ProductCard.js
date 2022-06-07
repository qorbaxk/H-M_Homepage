import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const authenticate = useSelector((state) => state.auth.authenticate);

  const goToDetail = () => {
    if (authenticate) {
      navigate(`/product/${item.id}`);
    } else {
      Swal.fire({
        title: "잠깐!",
        text: "먼저 로그인하세요.",
        icon: "warning",
        confirmButtonColor: "#000000",
      });
      navigate("/login");
    }
  };

  return (
    <div className="card-area" onClick={goToDetail}>
      <img className="card-img" src={item?.img} />
      <div className="card-choice">
        {item?.choice == true ? "Conscious choice" : "ㅤ"}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="card-new">{item?.new == true ? "신제품" : "ㅤ"}</div>
    </div>
  );
};

export default ProductCard;
