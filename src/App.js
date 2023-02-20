
import { Component } from './core/hertz'

export default class App extends Component {
  constructor () {
    super({
      state: {
        fruits: [
          {name: "Apple", price: 1000},
          {name: "Banana", price: 2000},
          {name: "Cherry", price: 3000}
        ]
      }
    })
  }

  // 선언적 렌더링(덮어쓰기)
  render () {
    console.log(this.state.fruits)

    this.el.innerHTML = /*html*/ `
      <h1>Fruits</h1>
      <ul>
        ${this.state.fruits
          .filter(fruit => fruit.price < 3000)
          .map(fruit => `<li>${fruit.name}</li>`)
          .join("")}
      </ul>
    `
  }
}