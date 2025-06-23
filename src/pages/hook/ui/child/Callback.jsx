import React from "react";

function Callback({onClick}) {
  console.log('실행2')
  return (
    <>
      <button onClick={onClick}>버튼</button>
    </>
  )
}
// props으로 받은 onClick, count 값이 바뀌지 않으면 리랜더링을 하지 않음.
export default React.memo(Callback);