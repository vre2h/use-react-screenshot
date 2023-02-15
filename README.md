# Create react screenshot

_React hook which allows you to make component screenshot and get an image in different extensions._

[![NPM](https://img.shields.io/npm/v/use-react-screenshot.svg)](https://www.npmjs.com/package/use-react-screenshot) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://standardjs.com) [![Maintainability](https://api.codeclimate.com/v1/badges/4eed8edefb50d41a2093/maintainability)](https://codeclimate.com/github/vre2h/use-react-screenshot/maintainability)

## Install

Note, this package has as `peerDependencies`: `react` and `html2canvas`. As we assume that you already have `react` installed, you can just install `html2canvas`.

To install package run:
```bash
npm install --save use-react-screenshot
```

To install `peerDependencies` run:
```bash
npm install --save react html2canvas
```

## Examples

See this [codesandbox playground](https://codesandbox.io/s/react-screenshot-hook-2jdyt) or `/example` folder if you want to play with hook.

In the following example you can find examples of:
- Taking screenshot and placing it in your page
- Downloaded screenshoted part
- How to use different extensions (see `components/Download.js` page)

## Usage

_A simple example which allows you to take a screenshot and place it as an image on the page (also you can download it or use differently, see examples section above)._

```jsx
import React, { useRef, useState } from 'react'
import { useScreenshot } from 'use-react-screenshot'

export default () => {
  const ref = useRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current)
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={width} src={image} alt={'Screenshot'} />
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

MIT © [vre2h](https://oganisyan.com)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
