import React from "react";
import { Button, Input } from "../../../../shared/ui/";

function Callback({onClick}) {
  console.log('실행2')
  return (
    <>
      <button onClick={onClick}>버튼</button>
      <Button
        text={'버튼'}
        class="btn"
        color="primary"
        onClick={onClick}
      />
      <Input
        type="text"
        placeholder="값입력"
        onInput={(e) => console.log('111', e.target.value)}
      />
    </>
  )
}
// props으로 받은 onClick, count 값이 바뀌지 않으면 리랜더링을 하지 않음.
export default React.memo(Callback);