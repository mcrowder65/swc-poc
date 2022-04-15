import React from "react"
import { screen } from "@testing-library/react"
import { render } from "test/render"
import Root from "src/pages/root/root"
test("it renders", async () => {
  render(<Root />)
  await screen.findByText(/goodbye/i)
})
