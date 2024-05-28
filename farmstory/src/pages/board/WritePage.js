import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";
import Write from "../../components/board/Write";

const WritePage = () => {
  return (
    <DefaultLayout>
      <SubLayout>
        <div id="board">
          <Write />
        </div>
      </SubLayout>
    </DefaultLayout>
  );
};

export default WritePage;
