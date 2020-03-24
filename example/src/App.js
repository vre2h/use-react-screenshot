import React from 'react'
import { useMyHook } from 'use-react-screenshot'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App