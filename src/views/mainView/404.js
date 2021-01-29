import React, { useState, createContext, useEffect } from 'react'
import { Button } from 'antd';
import Home from './home';
// eslint-disable-next-line react-hooks/rules-of-hooks

export const noFindPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [count, setCount] = useState(0)
  const AppContext = createContext({})
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    alert(count)
  }, [count])

  function btnclick() {
    return setCount(++count)
  }
  return (
    <AppContext.Provider value={
      {
        title: 'wangfei'
      }
    }>
      <div>
        <p>{count}{ }</p>
        <Home></Home>
        <Button onClick={btnclick}>点击</Button>
      </div>
    </AppContext.Provider>
  )
}
