import React from "react";
import { deleteUser, fetchUser } from "../api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "../type";
import style from '../query.module.scss'

export default function ComB() {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['userInfoB'],
    queryFn: () => fetchUser('http://localhost:8888/users'),
    enabled: true,
    staleTime: 10000, //staletime 동안 호출시 캐싱된 데이터를 사용함
    // select: data => data.users //가저온 데이터를 가공할수 있음
    //refetchInterval: 3000, //주기적으로 refresh 할지 결정하는 옵션
  })

  const userD = useMutation({
    mutationFn: (url: string) => deleteUser(url),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['userInfoB']})
    }
  })
  console.log('componentB')
  return (
    <div className={style.items}>
      <h3>고객리스트 B</h3>
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
                  <dd className={style.button}>
                    <button
                      type="button"
                      onClick={() => {
                        // window.confirm('삭제하시겠습니까?') && deleteUser(`http://localhost:8888/users/${el.id}`)
                        window.confirm('삭제하시겠습니까?') && userD.mutate(`http://localhost:8888/users/${el.id}`)
                      }}>
                        삭제
                      </button>
                  </dd>
                </dl>
              )
            })
          }
        </>
      }
    </div>
  )
}