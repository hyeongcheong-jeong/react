import React, { useState } from "react"
import Form from "./form"

export default function Bottom() {
  const [show, setShow] = useState(false);
  const changeShow = () => {
    setShow(!show)
  }
  return (
    <>
      <div className="footer">
        <button type="button" onClick={changeShow}>생성하기</button>
      </div>
      { show && <Form changeShowFn={changeShow} />}
    </>
  )
}