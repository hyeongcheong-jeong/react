import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import style from './query.module.scss'
// import { Bottom, ComA, ComB, ComC } from "./ui"
import { Bottom, ComA, ComB } from "./ui"
//queryClient 인스턴스 생성
const queryClient = new QueryClient()
export default function Query() {
  return (
    // 프로젝트 범위에 provider 랩핑 후 인스턴스 연결
    <>
      <QueryClientProvider client={queryClient}>
        <div className={style.compare}>
          <ComA />
          <ComB />
          {/* <ComC /> */}
        </div>
        <Bottom />
      </QueryClientProvider>
    </>
  )
}