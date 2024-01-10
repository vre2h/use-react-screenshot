import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import Text from './Text'

export default () => {
  const ref = createRef(null)
  const [image, takeScreenShot] = useScreenshot()
  const [width, setWidth] = useState(300)

  const getImage = () => takeScreenShot(ref.current)

  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
        <label style={{ display: 'block', margin: '10px 0' }}>
          Width:
          <input value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
      </div>
      <img width={width} src={image} alt={'ScreenShot'} />
      <div
        ref={ref}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        <Text />
      </div>
    </div>
  )
}
