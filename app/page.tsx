'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('#667eea')

  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140']

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor)
  }

  return (
    <div className="container">
      <h1>خوش آمدید!</h1>
      <p className="subtitle">یک برنامه تعاملی و زیبا</p>

      <div className="color-box" style={{ backgroundColor: color }}></div>

      <button onClick={changeColor}>تغییر رنگ</button>

      <div className="counter">{count}</div>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>افزایش</button>
        <button onClick={() => setCount(count - 1)}>کاهش</button>
        <button onClick={() => setCount(0)}>بازنشانی</button>
      </div>
    </div>
  )
}
