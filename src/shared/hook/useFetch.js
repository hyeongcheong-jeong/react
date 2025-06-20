import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
    //json 파일로 변경
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [url])
  
  return data;
}