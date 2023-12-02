import React from 'react'
import User from './User'
import HomeContainer from './containers/HomeContainer'
//props
const App = () => {
  return (
    <div>
      <User data={{name:'ketan prajapati',age:22}}/>
      <HomeContainer/>
    </div>
  )
}

export default App
