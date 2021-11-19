import React from "react"

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>Todo List - {props.listTitle}</h1>
      <p>usuário: {props.user.name}</p>
    </header>
  )
}

export default Header;