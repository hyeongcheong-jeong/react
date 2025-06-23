import { useCallback, useEffect, useMemo, useState } from "react"
import Callback from "./child/Callback"

export default function UseCallback() {
  // 함수 메모이제이션, 리랜더링 방지 (리랜더링 조건은 상태값(state) props값의 변경)
  // 최초 rendering 시 Callback rendering
  // update 후 Callback의 state나, props값의 변경이 없어도 리랜더링이 됨
  const [state, setState] = useState(0)
  
  const handleClick = () => {console.log('자식노드')} //momoization 되지 않은 함수나 변수는 rendering이 될때마다 새로 할당됨
  const value = 1

  const momoizationValue = useMemo(() => { //memoizationValue
    return value
  }, [])
  const memoizationFunction = useCallback(() => { //useCallback를 사용(memoizationFunction)
    handleClick()
  }, [])

  // render phase와 React.memo로 최적화 가능
  // commit phase가 memoization을 사용시 최적화 가능 

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    }, 1000)
  }, [])

  return (
    <>
      <p>useCallback {state}</p>
      <Callback onClick={memoizationFunction} value={momoizationValue} />
      {/* <Callback onClick={handleClick} count={state} /> */}
    </>
  )
}