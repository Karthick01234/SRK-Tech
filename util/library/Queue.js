class Queue {
  constructor(list = []) {
    this.list = list;
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.list.shift();
    }
    return "Empty queue";
  }
  enqueue(value) {
    this.list.push(value);
  }
  seek() {
    return this.list[0];
  }
  isEmpty() {
    return !this.list.length;
  }
  queue() {
    return this.list;
  }
}
export default Queue;
