// Task 4 что будет выведено в консоль

function foo () {
  this.biz = "A"
  return {
    biz: "B",
    bar: function () {
      return this.biz
    }
  }
}

foo.biz = 'C'

const obj = foo()

console.log(obj.bar())
