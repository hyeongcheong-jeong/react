// import { Link } from "react-router-dom"
import useFetch from '../../../shared/hook/useFetch'
import CreateWord from '../../../feature/word/post'
export default function Days() {
  // let days = useFetch('http://localhost:8888/days')
  return (
    <>
      11111111
      <button type="button" onClick={useFetch}>fetch</button>
      <ul>
        {/* {days?.map(el => {
          return <li key={el.id}>
            <Link to={`/word/${el.today}`}>{el.today}일차</Link>
          </li>
        })} */}
      </ul>
      <button type="button" onClick={CreateWord}>데이생성</button>
    </>
  )
}
