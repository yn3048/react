import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <h3>주요기능</h3>
      <ul>
        <li>
          <span>상품관리</span>
          <ol>
            <li>
              <Link to="/admin/product/list">상품목록</Link>
            </li>
            <li>
              <Link to="/admin/product/register">상품등록</Link>
            </li>
          </ol>
        </li>
        <li>
          <span>주문관리</span>
          <ol>
            <li>
              <a href="./order/list.html">주문목록</a>
            </li>
            <li>
              <a href="./order/delivery.html">배송관리</a>
            </li>
          </ol>
        </li>
        <li>
          <span>회원관리</span>
          <ol>
            <li>
              <a href="./user/list.html">회원목록</a>
            </li>
            <li>
              <a href="./user/register.html">회원등록</a>
            </li>
          </ol>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
