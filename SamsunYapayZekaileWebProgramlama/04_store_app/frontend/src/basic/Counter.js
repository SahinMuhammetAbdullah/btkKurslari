import React from 'react'
import { useState } from 'react'
import Header from '../components/header/Header';

function Counter() {
    const [num, setNum] = useState(0);

    function increase() {
        setNum(num + 1)
        console.log(num);
    }
    function decrease() {
        setNum(num - 1);
        console.log(num);
    }
    return (
        
        <div>
            <Header data={{title:"Sayaç"}}></Header>
            {num}

            <button onClick={increase} >Arttır</button>
            <button onClick={decrease}>Azalt</button>
        </div>
    )
}

export default Counter;