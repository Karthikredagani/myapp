import React from 'react'

export default function Sqr() {
    let result = props.f(props.n)
  return (
    <div>{result}</div>
  )
}
