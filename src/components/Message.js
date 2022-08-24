import React from "react"

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontweight: "bold",
    backgroundColor: bgColor,
  }
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }}></p>
    </div>
  )
}

export default Message
