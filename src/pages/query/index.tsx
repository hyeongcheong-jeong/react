import React from "react"
import useFetch from "../../feature/api/useFetch"

export default function Query() {
  useFetch('http://localhost:8888/word')
  let Fetch = () => {
    useFetch('http://localhost:8888/word')
  }
  return (
    <>
      <button type="button" onClick={Fetch}>fetch</button>
    </>
  )
}