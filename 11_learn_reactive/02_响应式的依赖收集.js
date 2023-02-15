
const obj = {
  name: "why",
  age: 18
}

// function foo () {
//   console.log("foo:", obj.name)
//   console.log("foo:", obj.age)
//   console.log("foo function")
// }

// function bar () {
//   console.log("bar:", obj.name + "hello")
//   console.log("bar:", obj.age + 10)
//   console.log("bar function")
// }

// 设计一个专门执行响应式函数的一个函数
const reactiveFns = [] // 多个对象就不可以这样操作
function watchFn (fn) {
  reactiveFns.push(fn)
}

watchFn(function foo () {
  console.log("foo:", obj.name)
  console.log("foo:", obj.age)
  console.log("foo function")
})

watchFn(function bar () {
  console.log("bar:", obj.name + "hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

// 修改obj的属性
console.log("name发生变化----------------------")
obj.name = "kobe"
// foo()
// bar()
reactiveFns.forEach(fn => {
  fn()
})