
interface User {
  id?: string,
  name: string,
  age: number,
  isValid?: boolean,
  emails: string,
  photo?: {
    name: string,
    size: number,
    mimeType: string,
    url: string
  }
}

export { User }