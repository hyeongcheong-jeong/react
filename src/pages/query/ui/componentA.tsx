import React, { useState } from "react";
import { fetchUser } from "../api";
import { useQuery } from "@tanstack/react-query";
import { User } from "../type";
import style from '../query.module.scss'

export default function ComA() {
  // const [keyValue, setKey] = useState('') 
  const { data, isLoading, isPending, isError, refetch } = useQuery({
    queryKey: ['userInfoA'],
    queryFn: () => fetchUser('http://localhost:8888/users'),
    enabled: false,
    staleTime: 5000, //staletime 동안 데이터를 fresh하게 유지하며 refetch 트리거가 일어나도 refetch가 일어나지 않습니다.
    //select: data => data.users, //가저온 데이터를 가공할수 있음
    retry: 1, // queryFn 재시도 횟수
    //refetchInterval: 3000, //주기적으로 refresh 할지 결정하는 옵션
    refetchOnMount: true, //useQuery 연결시 데이터 갱신 여부
    refetchOnReconnect: true, //네트워크 재연결시 데이터 갱신 여부
    refetchOnWindowFocus: true, // 브라우저 화면 포커스시 데이터 갱신 여부
  })
  console.log('componentA')
  return (
    <div className={style.items}>
      <h3>고객리스트 A
        <button  style={{marginLeft: '20px'}} type="button" onClick={() => {
          refetch()
        }}>리스트 불러오기</button>
      </h3>
      {/* <button type="button" onClick={() => setKey('aaa')}>key 변경</button> */}
      {
        isError &&
        <p>api 호출중 에러가 발생하였습니다.</p>
      }
      {
        isPending &&
        <p>쿼리가 대기상태입니다. 리스트 불러오기 버튼을 클릭해주세요...</p>
      }
      {
        isLoading ?
        <p>로딩중...</p> :
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
                  <dd className={style.button}><button type="button">업데이트</button></dd>
                </dl>
              )
            })
          }
        </>
      }
    </div>
  )
}