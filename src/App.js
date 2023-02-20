

import { Component } from './core/hertz'

export default class App extends Component {
  constructor () {
    super({
      state: {
        inputText: '',
      }
    })
  }

  // 덮어쓰기
  render () {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
      <input type='text'>
      <button>Click!</button>
    `
    // input 요소
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      this.state.inputText = inputEl.value
    })

    // button 요소
    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      console.log(this.state.inputText)
    })  
  }
}