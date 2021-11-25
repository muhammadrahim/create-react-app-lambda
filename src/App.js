import React, { Component } from "react"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {

    return (
<body>
  <div class="top">
  </div>
  <div class="form">
    <div class="info">
      <h1>You've been invited</h1>
      <h2>for the wedding of</h2>
      <h1>Ishmael & Sindy</h1>
      <p class="line">________________________________________</p>
      <h2>The Details</h2>
      <p>Friday, December 3, 2021</p>
      <p>4:00 PM</p>
      <br></br>
      <h2>Ceremony</h2>
      <p>Amstelveen Town Hallr</p>
      <p>Nieuwer-Amstel 1, 1182 JR Amstelveen</p>
      <p class="line">________________________________________</p>
      <div class='smallprint'>
        I know some of you have mentioned gifts - my IBAN below if you really feel like you must give something.
        <br></br>
        Please don't feel forced to give something, anything is welcome as well as nothing at all!
      </div>
      <div class='bottom'>
        NL32 ABNA 0861 4302 12
      </div>
    </div>
  </div>
</body>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
