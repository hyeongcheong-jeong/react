// import React from "react"

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         type="button"
//         className={`${this.props.class} color-${this.props.color ?? 'default'}`}
//         onClick={this.props.onClick}
//       >
//         {this.props.text || '확인'}
//       </button>
//     )
//   }
// }

function Button(props) {
  return (
    <button
      type="button"
      className={`${props.class} color-${props.color ?? 'default'}`}
      onClick={props.onClick}
    >
      {props.text || '확인'}
    </button>
  )
}

export default Button