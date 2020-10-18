import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { useFindItemByNameEnLazyQuery } from "./generated/graphql";

const numbersKr = [
  "한",
  "두",
  "세",
  "네",
  "다섯",
  "여섯",
  "이곱",
  "여덟",
  "아홉",
  "열",
];

function App() {
  const { itemNameEn } = useParams<{ itemNameEn?: string }>();
  const [findItemByName, { loading, data }] = useFindItemByNameEnLazyQuery();
  console.log("itemNameEn: ", itemNameEn);
  console.log("loading: ", loading);
  console.log("data: ", data);
  useEffect(() => {
    if (!itemNameEn) {
      return;
    }
    findItemByName({
      variables: {
        nameEn: itemNameEn,
      },
    });
  }, [itemNameEn, findItemByName]);
  const { nameEn, nameKr } = data?.findItemByNameEn || {};
  const counterKr = data?.findItemByNameEn?.counter?.label;

  return (
    <div className="App">
      <h2> {itemNameEn} </h2>
      <h2>{nameKr} </h2>
      {loading && <div> Loading... </div>}
      {nameEn && nameKr && counterKr && (
        <ol>
          {numbersKr.map((numberKr, index) => (
            <li key={numberKr}>
              {"  "} {nameKr} {numberKr} {counterKr}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
