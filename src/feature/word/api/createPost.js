import { useNavigate } from "react-router-dom";

// 단어추가 api 요청
export default function createPost() {
  const navigate = useNavigate()
  fetch('http://localhost/word', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: props.id,
      eng: props.eng || '',
      kor: props.kor || '',
      day: props.day || 1,
      isDone: props.isDone || false,
    })
  })
  .then(res => {
    if (res.ok) {
      alert('단어생성 완료');
      navigate(`/word/:${props.day}`)
    }
  })
  .catch(error => {
    console.error(error);
  })
}