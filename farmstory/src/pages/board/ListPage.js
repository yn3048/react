import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";
import useCates from "../../hooks/useCates";
import List from "../../components/board/List";

const ListPage = () => {
  const [cate1, cate2] = useCates();

  return (
    <DefaultLayout>
      <SubLayout>
        <div id="board">
          <List />
        </div>
      </SubLayout>
    </DefaultLayout>
  );
};

export default ListPage;
