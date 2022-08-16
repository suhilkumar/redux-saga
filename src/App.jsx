import React from 'react'
import  addToCart  from './redux/action'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  const mobileObj = {
    product : 'Mobile',
    name: 'Iphone',
    cost: 100000,
    color: 'green'
  }
  
  return (
    <div>
      <h2>learn-Redux-Saga</h2>
      <button onClick={() => dispatch(addToCart(mobileObj))}>add to cart</button>
    </div>
  )
}

export default App;
