import { renderToHtml } from "jsxte"
import React from 'react'

const Header = () => {
    return (
      <header>Hello world</header>
    )
}

const html = renderToHtml(<Header />)
