import { Link } from "react-router-dom"

export default function Days() {
  // let days = useFetch('http://localhost:8888/days')
  
  return (
    <>
      <ul>
        {/* {days?.map(el => {
          return <li key={el.id}>
            <Link to={`/word/${el.today}`}>{el.today}일차</Link>
          </li>
        })} */}
      </ul>
      {/* <button type="button" onClick={CreateWord}>데이생성</button> */}
    </>
  )
}
