class Element {
  constructor(innerText) {
    this.innerText = innerText;
    this.children = [];
  }
  setInnerText(innerText) {
    this.innerText = innerText;
  }
  getInnerText() {
    return this.innerText;
  }
  addChild(child) {
    this.children.push(child);
  }
  getChild() {
    return this.children;
  }
  removeChild(child) {
    this.children = this.children.filter((c) => c !== child);
  }
  render() {
    console.log(this.innerText);
    this.children.forEach((c) => c.render());
  }
}

class Div extends Element {
  render() {
    console.log("I am a Div");
    super.render();
  }
}

class H1 extends Element {
  render() {
    console.log("I am a H1");
    super.render();
    
  }
}

const div = new Div("a");
const h11 = new H1("b");
const h12 = new H1("c");
div.addChild(h11);
div.addChild(h12);
div.render();

div.setInnerText("new div inner text");
div.removeChild(h11);
div.render();
