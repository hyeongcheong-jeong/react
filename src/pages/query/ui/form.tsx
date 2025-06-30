import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { createUser } from "../api";
import { User } from "../type";
import style from '../query.module.scss'


export default function Form({changeShowFn}: {changeShowFn: () => void}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [emails, setEmail] = useState('')
  
  const queryClient = useQueryClient()

  const { mutate, error, isPending, isError } = useMutation({
    mutationFn: (users: User) => createUser('http://localhost:8888/users', users),
    // mutationFn: async(newUser: User) => {
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify(newUser)
    //   })
    //   if (!response.ok) {
    //     throw new Error('업데이트에 실패했습니다.');
    //   }
    //   return response.json();
    // },
    //mutationFn 함수가 실행전에 살행되는 함수
    onMutate: () => {
      changeShowFn()
    },
    // mutationFn 함수가 성공했을때 실행되는 함수
    onSuccess: (data, today, context) => {
      console.log(data, today, context)
      queryClient.invalidateQueries({queryKey: ['userInfoA']})
    },
    
    // mutationFn 함수가 실패했을때 실행되는 함수
    onError: (err) => {
      console.error('error111', err);
    },

    //mutationFn 함수가 성공하거나 실패해도 항상 실행되는 함수
    onSettled: () => {
      console.log('실행하니?')
      queryClient.invalidateQueries({queryKey: ['fetch1']})
    },
    retry: 0, //mutationFn 한수가 실패시 재시도 횟수
    retryDelay: 2000, //재시도 시간 간격(ms)
  })
  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    mutate({age, name, emails})
  }
  return (
    <>
      {isPending ?
        <p>데이터 생성중....</p>
        :
        <>
          {isError ?
            <p>사용자 생성도중 에러가 발생하였습니다.</p>
            :
            <div className={style.form}>
              <div className={style['con-in']}>
                <h3>사용자 추가하기</h3>
                <form onSubmit={onSubmit}>
                  <p>
                    <label htmlFor="name">이름입력:</label>
                    <input type="text" value={name} id="name" onChange={e => {
                      setName(e.target.value)
                    }}/>
                  </p>
                  <p>
                    <label htmlFor="age">나이입력:</label>
                    <input type="text" value={age || ''} id="age" onChange={e => {
                      setAge(Number(e.target.value))
                    }} />
                  </p>
                  <p>
                    <label htmlFor="mail">이메일 입력:</label>
                    <input type="text" value={emails} id="mail" onChange={e => {
                      setEmail(e.target.value)
                    }} />
                  </p>
                  <div className={style['btn-block']}>
                    <button type="submit">사용자 추가</button>
                    <button type="button" onClick={changeShowFn}>취소하기</button>
                  </div>
                </form>
              </div>
            </div>
          }
        </>
      }
    </>
  )
}