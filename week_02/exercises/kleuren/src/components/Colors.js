import React, {useState} from 'react'

export default function Colors() {
    const [colors, setColors] = useState([]);
    const randomColor = () => {
        const color = Math.floor(Math.random()*16777215).toString(16);
        return '#' + color;
    }
    const addColor = () => {
        setColors([...colors, randomColor()])
    }
    const removeColor = () => {
        colors.pop();
        setColors([...colors])
    }
  return (
    <div>
        <h1>Colors</h1>
        <button onClick={addColor}>Add color</button>
        <div style={{color: colors}}>
            {colors}
            <button onClick={removeColor}>Remove color</button>
        </div>
    </div>
  )
}
