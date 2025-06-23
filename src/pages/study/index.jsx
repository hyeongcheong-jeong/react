import React from "react";

class Study extends React.Component {
  render() {
    return (
      <>
        <Array />
      </>
    )
  }
}

function Array() {
  const Arr = [1,2,3,4,5]
  const flat = [1,2,3,[4,5,[6,7]]]
  return (
    <>
      <h1>Array 정리</h1>
      <dl>
        <dt>배열 추가</dt>
        <dd>
          unshift(): 배열 첫번째 항목 추가 (원본 배열에 영향이 있음)
          <button type="button" onClick={() => {
            Arr.unshift('first');
            console.log(Arr)
          }}>unshift() 실행</button>
        </dd>
        <dd>
          push(): 배열 마지막 항목 추가 (원본 배열에 영향이 있음)
          <button type="button" onClick={() => {
            Arr.push('last');
            console.log(Arr)
          }}>push() 실행</button>
        </dd>
      </dl>
      <dl>
        <dt>배열 삭제</dt>
        <dd>
          shift(): 배열 첫번째 항목 삭제 (원본 배열에 영향이 있음)
          <button type="button" onClick={() => {
            Arr.shift();
            console.log(Arr)
          }}>shift() 실행</button>
        </dd>
        <dd>
          pop(): 배열 마지막 항목 삭제 (원본 배열에 영향이 있음)
          <button type="button" onClick={() => {
            Arr.pop();
            console.log(Arr)
          }}>pop() 실행</button>
        </dd>
      </dl>
      <dl>
        <dt>배열 추가, 삭제</dt>
        <dd>
          split(start, deletecount, 추가항목):
          배열의 추가, 삭제가 가능한 method (원본 배열에 영향이 있음)
          <button type="button" onClick={() => {
            Arr.splice(0, 2,'추가항목1');
            console.log(Arr)
          }}>pop() 실행</button>
        </dd>
      </dl>
      <dl>
        <dt>배열의 정렬</dt>
        <dd>
          sort(compareFunction)
          배열을 선회하며 compareFunction을 만족하는 정렬 (원본 배열에 영향 있음)
          <button type="button" onClick={() => {
            Arr.sort((a,b) => {
              return a - b; // 내립차순
              //return b - a; // 오름차순
            });
            console.log(Arr)
          }}>sort() 실행</button>
        </dd>
      </dl>
      <dl>
        <dt>배열 병합(원본 배열에 영향 없음 )</dt>
        <dd>
          flat(dept)
          중첩된 배열을 dept만큼 평탄화하여 반환
          <button type="button" onClick={() => {
            let flatA = flat.flat(2);
            console.log(flatA, flat)
          }}>flat() 실행</button>
        </dd>
      </dl>
      <dl>
        <dt>배열 반환 (원본 배열에 영향 없음)</dt>
        <dd>
          map(callback):
          배열을 선회하며 callback조건에 부합하는 신규 배열 반환(원본 배열의 갯수만큼 반환)
          <button type="button" onClick={() => {
            let map = Arr.map(el => el >= 3);
            console.log(map)
          }}>map() 실행</button>
        </dd>
        <dd>
          filter(callback)
          배열을 선회하며 callback조건에 부합하는 신규 배열 반환(필터링된 갯수 만큼 반환)
          <button type="button" onClick={() => {
            let filter = Arr.filter(el => el >= 3);
            console.log(filter)
          }}>filter() 실행</button>
        </dd>
        <dd>
          every(callback)
          배열을 선회하며 모든요소가 callback조건에 부합하면 true를 반환
          <button type="button" onClick={() => {
            let every = Arr.every(el => el  < 6);
            console.log(every)
          }}>every() 실행</button>
        </dd>
        <dd>
          some(callback)
          배열을 선회하며 한요소가 callback조건에 부합하면 true를 반환
          <button type="button" onClick={() => {
            let some = Arr.some(el => el  < 2);
            console.log(some)
          }}>some() 실행</button>
        </dd>
        <dd>
          includes(searchElement)
          배열에 특정값(searchElement)가 포함되어있는지를 판단하여 true, false 반환
          <button type="button" onClick={() => {
            let include = Arr.includes(5);
            console.log(include)
          }}>includes() 실행</button>
        </dd>
        <dd>
          reduce(acc, curr, index, callback)
          배열을 선회하며 callback함수를 acc에 누적 연산하여 반환 
          <button type="button" onClick={() => {
            let reduce = Arr.reduce((acc, curr) => acc += curr);
            console.log(reduce)
          }}>reduce() 실행</button>
        </dd>
        <dd>
          find(callback)
          배열을 선회하며 callback를 만족하는 첫번째 요소를 반환 
          <button type="button" onClick={() => {
            let find = Arr.find(el => el > 3);
            console.log(find)
          }}>find() 실행</button>
        </dd>
        <dd>
          findIndex(callback)
          배열을 선회하며 callback를 만족하는 첫번째 요소의 인덱스를 반환 
          <button type="button" onClick={() => {
            let findIndex = Arr.findIndex(el => el > 3);
            console.log(findIndex)
          }}>findIndex() 실행</button>
        </dd>
        <dd>
          entries(callback)
          배열의 각 인덱스에 대한 키/값을 포함하는 배열 반복자를 반환
          <button type="button" onClick={() => {
            let entries = Arr.entries()
            // entries.forEach((key, value) => {
            //   console.log(key, value)
            // })
            console.log(entries.next().value);
          }}>entries() 실행</button>
        </dd>
        <dd>
          slice(begin, end):
          배열의 시작(begin) 부터 끝(end: 0 없을시에는 배열 끝까지)에 대한 얕은 복사본을 새로운 배열객체로 반환
          <button type="button" onClick={() => {
            let slice = Arr.slice(2, -1)
            console.log(slice, Arr);
          }}>slice() 실행</button>
        </dd>
        <dd>
          with(index, value):
          배열의 주어진 index의 값을 변경하여 새로운 배열로 반환
          <button type="button" onClick={() => {
            let width = Arr.with(2, 11)
            console.log(width, Arr);
          }}>width() 실행</button>
        </dd>
        <dd>
          join(divider)
          배열을 문자열로 반환
          <button type="button" onClick={() => {
            let join = Arr.join(',');
            console.log(join)
          }}>join() 실행</button>
        </dd>
      </dl>
    </>
  )
}

export default Study;