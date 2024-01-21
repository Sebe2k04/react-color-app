import React, { useState } from 'react'
import './Content.css'

const Content = () => {
    const [color,setColor] = useState('')
  return (
    <main>
        <div className="result"
        style={{
            backgroundColor: color
        }}>
        <div className="text">
            <p>hello</p>
        </div>
        </div>
        <div className="input">
            <input type="text"
            placeholder="Enter a color"
            value={color}
            onChange={(e)=>{
                setColor(e.target.value);
                console.log(color)
            }}
             />
        </div>

    </main>
  )
}

export default Content