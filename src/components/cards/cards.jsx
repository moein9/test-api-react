import { useEffect, useState } from "react";
import { Content } from "../card_content/content.jsx";
import "./cards.style.css";

export const Cards = () => {
  let [fetchData, setFetchData] = useState([]);
  const [search, setsearch] = useState("")
  const handledata = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    setFetchData(data);
  };

  useEffect(() => {
    handledata();
  }, []);

  const show = fetchData.filter((e)=>e.name.common.toLowerCase().includes(search)).map((e) => {
    let name = e["name"]["official"];
    let flag = e["flags"]["png"];
    let lang = e["languages"];
    console.log(typeof lang);
    return (
      <Content
        name={name}
        flag={flag}
        lang={lang && Object.keys(lang).map((key, i) => lang[key] + " ")}
      ></Content>
    );
  });

  console.log(search);

  

  return (
    <>
      <input
        type="search"
        id="search-button"
        onChange={(e)=>setsearch(e.target.value)}
        value={search}
      ></input>
      <section>{show}</section>
    </>
  );



};
