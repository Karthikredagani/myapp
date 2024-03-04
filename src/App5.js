import React from 'react'

export default function App5() {
    let products = [ 
        {id:1,name:"Product 1",price:440},
        {id:2,name:"Product 2",price:560},
    ]
  return (
    <div>
        <ul>
        {products.map((e,i) => (
            <li key={i}>{e.name}<br></br>{e.price}<br></br><img src="https://th.bing.com/th/id/OIP.b3fzCzEek1R_6Z10xSvICgHaE7?rs=1&pid=ImgDetMain" width={"100px"} height={"100px"}></img></li>
        ) )}
        </ul>
    </div>
  )
}
