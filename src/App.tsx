import React, { useMemo } from "react";
import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { GetItemsQuery, useGetItemsQuery } from "./generated/graphql";

interface ItemListProps {
  items: GetItemsQuery["items"]["data"];
}

type ItemData = GetItemsQuery["items"]["data"][number];
type ValidItem = NonNullable<ItemData>;

const isString = (val: unknown): val is string => {
  return typeof val === "string";
};
const isValidItem = (val: ItemData): val is ValidItem => {
  return isString(val?.nameEn) && isString(val?.nameKr);
};

const ItemList: FunctionComponent<ItemListProps> = ({ items }) => {
  const validItems = useMemo(() => items.filter(isValidItem), [items]);
  return (
    <div>
      {validItems.map(({ nameEn }) => (
        <div key={nameEn}>
          <Link to={`/items/${nameEn}`}>{nameEn}</Link>
        </div>
      ))}
    </div>
  );
};

function App() {
  const { loading, error, data } = useGetItemsQuery();
  console.log("loading: ", loading);
  console.log("data: ", data);
  console.log("errors: ", error);

  const itemData = data?.items?.data;

  return (
    <div className="App">
      <h2> Count in Korean </h2>
      {itemData && <ItemList items={itemData} />}
    </div>
  );
}

export default App;
