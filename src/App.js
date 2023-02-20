
import { Component } from './core/hertz'
import FruitItem from "./components/FruitItem"

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
      <ul></ul>
    `

    const ulEl = this.el.querySelector("ul")
    ulEl.append(...this.state.fruits
      .map(fruit => new FruitItem({
        props: {
          name: fruit.name,
          price: fruit.price
        }
      }).el)
    )
  }
}