import React, { useState } from "react";
import useCates from "../../hooks/useCates";
import { useSelector } from "react-redux";
import axios from "axios";

const Write = () => {
  const [cate1, cate2] = useCates();
  const authSlice = useSelector((state) => state.authSlice);

  const [article, setArticle] = useState({
    cate: cate2,
    title: "",
    content: "",
    writer: authSlice.username,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(article);

    axios
      .post("http://localhost:8080/article", article, {
        headers: { Authorization: `Bearer ${authSlice.accessToken}` },
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  return (
    <section class="write">
      <form onSubmit={submitHandler}>
        <table border="0">
          <caption>글쓰기</caption>
          <tr>
            <th>제목</th>
            <td>
              <input
                type="text"
                name="title"
                placeholder="제목을 입력하세요."
                value={article.title}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea
                name="content"
                value={article.content}
                onChange={changeHandler}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>파일</th>
            <td>
              <input type="file" name="file" />
            </td>
          </tr>
        </table>

        <div>
          <a href="./list.html" class="btn btnCancel">
            취소
          </a>
          <input type="submit" value="작성완료" class="btn btnComplete" />
        </div>
      </form>
    </section>
  );
};

export default Write;
