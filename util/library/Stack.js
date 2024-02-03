class Stack {
  constructor(list = []) {
    this.list = list;
    this.i = this.list.length == undefined ? 0 : this.list.length - 1;
  }
  pop() {
    if (!this.isEmpty()) {
      this.i--;
      return this.list.pop();
    }
    return "Empty Stack";
  }
  push(value) {
    this.i++;
    this.list.push(value);
  }
  peek() {
    return this.list[this.i];
  }
  isEmpty() {
    return this.i < 0;
  }
  stack() {
    return this.list;
  }
}
export default Stack;
