import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";
import axios from "axios";
import { useSelector } from "react-redux";
import Page from "./Page";

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

  const [searchParams] = useSearchParams();
  const pg = searchParams.get("pg") || 1;

  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/article?cate=${cate2}&pg=${pg}`, {
        headers: { Authorization: `Bearer ${authSlice.accessToken}` },
      })
      .then((resp) => {
        console.log(resp.data);
        setServerData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pg]); // pg값이 변경이 되면 useEffect가 실행

  return (
    <section class="list">
      <table border="0">
        <caption>글목록</caption>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회</th>
        </tr>

        {serverData.dtoList.map((article, index) => (
          <tr key={index}>
            <td>{serverData.startNo - index}</td>
            <td>
              <a href="./view.html">
                {article.title}[{article.comment}]
              </a>
            </td>
            <td>{article.writer}</td>
            <td>{article.rdate}</td>
            <td>{article.hit}</td>
          </tr>
        ))}
      </table>

      <Page serverData={serverData} cate1={cate1} cate2={cate2} />

      <Link
        to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
        class="btn btnWrite"
      >
        글쓰기
      </Link>
    </section>
  );
};

export default List;
