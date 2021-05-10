import React, { useState, useEffect } from 'react'

function Example() {
  let i = 1
  // 声明一个叫 “count” 的 state 变量。
  let [count, setCount] = useState(0)
  useEffect(function countEff() {
    // setAge(10)
    let timer = setInterval(() => {
      i = document.getElementById('test').innerText
      document.getElementById('test').innerText = i * 2
      console.log(1212)
    }, 2000)
    return () => {
      clearInterval(timer)
    }
    // return clearInterval(timer)
  }, [])
  let [age, setAge] = useState(1)
  useEffect(function ageEff() {
    console.log(document.getElementById('test').innerText)
  })
  return (
    <div>
      <span id="test">1</span>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>改变count</button>
      <p>You clicked {age} times</p>
      <button onClick={() => setAge(age + 1)}>改变age</button>
    </div>
  )
}

export default Example
