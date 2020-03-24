import React, { useEffect, createRef } from 'react'
import Text from './Text'
import { useScreenshot } from 'use-react-screenshot'

export default () => {
  const ref = createRef(null)
  const [image, takeScreenShot] = useScreenshot(ref)

  const download = (image, { name = 'img' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = `${name}.png`
    a.click()
  }

  useEffect(() => {
    if (image) {
      download(image, { name: 'lorem-ipsum' })
    }
  }, [image])

  return (
    <div>
      <button onClick={takeScreenShot}>Take screenshot</button>
      <div
        ref={ref}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginTop: '20px'
        }}
      >
        <Text />
      </div>
    </div>
  )
}
