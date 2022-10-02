import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MasterLayout from './hoc/MasterLayout'
import Routers from './Routers'
import { GlobalStore } from './store/GlobalStore'

function App () {
  return (
    <GlobalStore>
      <MasterLayout>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </MasterLayout>
    </GlobalStore>
  )
}

export default App
