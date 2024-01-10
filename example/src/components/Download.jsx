import React, { useEffect, createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import Text from './Text'

export default () => {
  const ref = createRef(null)
  const [image, takeScreenShot] = useScreenshot()

  const download = (iImage, { name = 'img', extension = 'png' } = {}) => {
    const a = document.createElement('a')
    a.href = iImage
    a.download = createFileName(extension, name)
    a.click()
  }

  const getImage = () => takeScreenShot(ref.current)

  useEffect(() => {
    if (image) {
      download(image, { name: 'lorem-ipsum', extension: 'png' })
    }
  }, [image])

  return (
    <div>
      <button onClick={getImage}>Take screenshot</button>
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
