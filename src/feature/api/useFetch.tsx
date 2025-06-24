import { useEffect, useState } from "react"

export default function useFetch(url: string) {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setWords(data)
    })
  }, [])
  return words
}
