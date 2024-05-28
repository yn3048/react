import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Page from "../board/Page";
import useCates from "../../hooks/useCates";
import { useSelector } from "react-redux";

const initState = {
  dtoList: [],
  cate: "",
  pg: 0,
  size: 0,
  total: 0,
  startNo: 0,
  start: 0,
  end: 0,
  prev: false,
  next: false,
};

const List = () => {
  const [cate1, cate2] = useCates();
  const authSlice = useSelector((state) => state.authSlice);

  const [serverData, setServerData] = useState(initState);

  const [searchParams] = useSearchParams();
  const pg = searchParams.get("pg") || 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product?pg=${pg}`, {
        headers: { Authorization: `Bearer ${authSlice.accessToken}` },
      })
      .then((resp) => {
        console.log(resp.data);
        setServerData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* 내용시작 */}
      <p class="sort">
        <a href="#" class="on">
          전체(10) |
        </a>
        <a href="#">과일 |</a>
        <a href="#">야채 |</a>
        <a href="#">곡류</a>
      </p>
      <table border="0">
        <thead>
          <tr>
            <th>이미지</th>
            <th>종류</th>
            <th>상품명</th>
            <th>할인</th>
            <th>포인트</th>
            <th>판매가격</th>
          </tr>
        </thead>
        <tbody>
          {serverData.dtoList.map((product, index) => (
            <tr key={index}>
              <td>
                <a href="./view.html">
                  <img
                    src={`http://localhost:8080/thumb/${product.thumb120}`}
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">{product.type}</td>
              <td class="title">
                <a href="#">{product.productName}</a>
              </td>
              <td class="discount">{product.discount}%</td>
              <td class="point">{product.point}P</td>
              <td class="price">
                <strong>{product.price}</strong>
                <del>{product.price}</del>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Page serverData={serverData} cate1={cate1} cate2={cate2} />
      {/* 내용끝 */}
    </>
  );
};

export default List;
