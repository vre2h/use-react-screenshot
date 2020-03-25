# Create react screenshot

_hook which allows to create screenshots_

[![NPM](https://img.shields.io/npm/v/use-react-screenshot.svg)](https://www.npmjs.com/package/use-react-screenshot) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Maintainability](https://api.codeclimate.com/v1/badges/4eed8edefb50d41a2093/maintainability)](https://codeclimate.com/github/vre2h/use-react-screenshot/maintainability)

## Install

```bash
npm install --save use-react-screenshot
```

## Examples

See this [codesandbox playground](https://codesandbox.io/s/react-screenshot-hook-2jdyt) or `/example` folder if you want to play with hook.

## Usage

_A simple example which allows you to take a screenshot and place it as an image on the page._

```jsx
import React, { createRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'

export default () => {
  const ref = createRef(null)
  const [image, takeScreenShot] = useScreenshot()
  const getImage = () => takeScreenShot(ref.current)
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={width} src={image} alt={'ScreenShot'} />
      <div ref={ref}>
        <h1>use-react-screenshot</h1>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
      </div>
    </div>
  )
}
```

## License

MIT © [vre2h](https://github.com/vre2h)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
