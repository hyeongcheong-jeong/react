import React, { useEffect, useState } from "react";
import style from '../query.module.scss'
import { User } from "../type";

export default function ComC() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8888/users')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data.users);
    })
    .catch(error => {
      console.log('error123', error)
    })
  }, [])
  console.log('componentC')
  return (
    <div className={style.items}>
      <h3>고객리스트 B</h3>
      <>
        {
          data?.map((el: User) => {
            return (
              <dl key={el.id} className={style.user}>
                <dt>
                  <img src={el?.photo?.url ?? 'https://swedu.cau.ac.kr/common/thumbnail/imgload?path=/&filename=&thumb=R&hsize=276&wsize=497'} alt={el?.photo?.name ?? '없음'} />
                </dt>
                <dd>
                  <p>고객명: {el.name}</p>
                  <p>나이: {el.age}</p>
                  <p>email: {el.emails}</p>
                </dd>
                <dd className={style.button}><button type="button">삭제</button></dd>
              </dl>
            )
          })
        }
      </>
    </div>
  )
}