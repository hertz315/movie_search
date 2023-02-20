///// Component /////
export class Component {
  // 컨스트럭터
  constructor(payload = {}) {
    const {
      tagName = 'div', 
      state = {},
      props = {}
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  // 랜더
  render() {

  }
}