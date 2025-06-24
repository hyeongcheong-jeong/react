export default function Input(props) {
  return (
    <input
      type={props.type ?? 'text'}
      placeholder={props.placeholder ?? '입력해주세요'}
      onInput={props.onInput}
    />
  )
}