///// Component /////
export class Component {
  // 컨스트럭터
  constructor(payload = {}) {
    const {tagName = 'div', state = {}} = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.render()
  }
  // 랜더
  render() {

  }
}