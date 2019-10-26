import React, { Component } from 'react'
import WrappedHorizontalLoginForm from './test'
import { Provider } from "react-redux"
import store from "./redux/redux"

import './App.css';
import  'antd/dist/antd.css'


export default function App () {
  
  
    return (
      <div>
      <WrappedHorizontalLoginForm />
        </div>
    )
  }

