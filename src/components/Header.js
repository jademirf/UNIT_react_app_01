import React from "react"

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>Todo List - {props.listTitle}</h1>
    </header>
  )
}

export default Header;