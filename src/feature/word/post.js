export default function CreateWord() {
  fetch('http://localhost:8888/days', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: 4,
      today: "4",
    })
  })
  .then(res => {
    if (res.ok) {
      alert('완료');
    }
    console.log(res)
  })
  .catch(err => {
    console.error(err);
  })
}