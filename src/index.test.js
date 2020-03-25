import { renderHook } from '@testing-library/react-hooks'

import { createFileName, useScreenshot } from './index'

describe('checking file name', () => {
  test('should be empty', () => {
    const actual = createFileName('', 'name')
    const expected = ''

    expect(actual).toBe(expected)
  })

  test('should work properly', () => {
    const actual = createFileName('jpg', 'name')
    const expected = 'name.jpg'

    expect(actual).toBe(expected)
  })
})

describe('useScreenshot', () => {
  test('correct working of hook', async () => {
    const {
      result: { current },
    } = renderHook(() => useScreenshot())
    const [image, takeScreenShot, { error }] = current

    expect(error).toEqual(null)
    expect(image).toEqual(null)
    await expect(() => takeScreenShot()).toThrow()
    expect(error).toEqual(null)
  })
})
