import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";
import List from "../../components/market/List";

const ListPage = () => {
  return (
    <DefaultLayout>
      <SubLayout>
        <List />
      </SubLayout>
    </DefaultLayout>
  );
};

export default ListPage;
