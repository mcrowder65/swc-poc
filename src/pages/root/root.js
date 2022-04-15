import React from "react"
import styled from "@emotion/styled"
const Button = styled.button``
const Div = styled.div`
  background: purple;
  ${Button} {
    background: blue;
  }
`

const Root = () => {
  let Buttons = []
  for (let i = 0; i < 10000; i++) {
    Buttons.push(
      <Div key={i}>
        <Button>I am button!</Button>
      </Div>,
    )
  }
  return (
    <>
      {Buttons}
      <Button>Goodbye</Button>
      <Div>
        <p>hello</p>
        <Button>Hi</Button>
      </Div>
    </>
  )
}

export default Root
