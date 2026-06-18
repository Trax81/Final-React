import React, { useState } from 'react'


function Counter() {
    const [arr, setArr] = useState([1, 2])
    function addPlus() {
 setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
setArr(prevArr => [...prevArr, "-"])
    }
    return (
        <div>
            <button>+</button>
            <button>-</button>
            {arr.toString()}
        </div>
    )
}
    

export default Counter