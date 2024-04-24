import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './component/ToDo'
import {Provider} from "react-redux"
import {store} from "./app/store.js"

function App() {
  

  return (
    <>
    <Provider store={store}>
      <ToDo></ToDo>
    </Provider>
    </>
  )
}

export default App
