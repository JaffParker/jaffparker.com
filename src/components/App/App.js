// @flow
import './App.scss'
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Home} from '../Routes/Home'
import {Footer} from '../Layout/Footer'

export const App = () =>
  <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Home} />
      <hr/>
      <Footer />
    </div>
  </BrowserRouter>
