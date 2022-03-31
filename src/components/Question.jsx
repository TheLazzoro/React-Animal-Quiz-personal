import React, { useEffect, useState } from "react";
import Card from "./Card";
import QuestionsBuilder from "./QuestionsBuilder";

const getData = async (url) => {
  const raw = await fetch(url);
  const json = await raw.json();
  console.log("wat");
  console.log(json[0]["image_link"]);
  console.log("JSON is array: " + Array.isArray(json));
  return json;
};

export default function Question() {
  const URL = "https://zoo-animal-api.herokuapp.com/animals/rand/4";


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  //useEffect(() => {
  //  getData("https://zoo-animal-api.herokuapp.com/animals/rand/4")
  //    .then((res) => {
  //      setLoading(false);
  //      console.log("here");
  //      return res;
  //    })
  //    .then((res) => setData(res))
  //    .catch((err) => console.log(err));
  //}, []);
//
  //if (!data) {
  //  console.log("Data not yet loaded");
  //  return null;
  //}

  const getData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  return (
    <div>
      <QuestionsBuilder questions={data}></QuestionsBuilder>
    </div>
  );
}