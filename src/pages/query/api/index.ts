import { User } from "../type";

const fetchUser = async(url: string) => {
  const res = await fetch(url);
  const data = res.json();
  if (!res.ok) {
    throw new Error('에러가 발생하였습니다.')
  }
  return data;
}

const createUser = async(url: string, users: User) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(users)
  })
  if (!response.ok) {
    throw new Error('업데이트에 실패했습니다.');
  }
  return response.json();
}

const deleteUser = async(url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('사용자 삭제에 실패했습니다.');
  }
  return response.json();
}

export { fetchUser, createUser, deleteUser }