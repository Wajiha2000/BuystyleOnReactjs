import React from 'react'
import Child from './PropsChild'
const Props = () => {
  const voices = {
    dog: "Bow Bow",
    cat: "Meow Meow",
  }
  return (
    <div>
      <Child data={voices}/>
    </div>
  )
}

export default Props
