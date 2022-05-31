'use strict'
let appId = 'abc'
const button = document.querySelector('button')
const add = (n1, n2) => {
  if (n1 + n2 > 0) {
    return n1 + n2
  }
}
const clickHandler = (message) => {
  console.log('Clicked! ' + message)
}
button === null || button === void 0
  ? void 0
  : button.addEventListener('click', () => clickHandler("You're welcome"))
//# sourceMappingURL=app.js.map
