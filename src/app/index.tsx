import React from "react" // react 17 이하버전에서는 생략가능
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Query from "../pages/query"

// queryClient 인스턴스를 생성
const queryClient = new QueryClient()

export default function App() {
  return (
    // 프로젝트 법위를 QueryClientProvider 로 매핑 후 인스턴스 연결
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
  )
}
