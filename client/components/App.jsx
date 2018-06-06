import React from 'react'
import Form from './Form'

const App = props => {
  return (
    <div className="section">
      <h1 className="has-text-centered title is-1">Hello world</h1>
      {/* <Board width={props.width / 2} />  */}
      <Form />
    </div>
  )
}

export default App