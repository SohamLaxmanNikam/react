
import React from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx } from 'react/jsx-runtime'


import App from './App.jsx'

// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank'> visit google</a>
)

const anohtherUser = "char aur react"


const  reactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google',
  anohtherUser

)


createRoot(document.getElementById('root')).render(
    reactElement
)
