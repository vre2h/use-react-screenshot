import { createFileName, useScreenshot } from './'
import { renderHook, act } from '@testing-library/react-hooks'

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
      result: { current }
    } = renderHook(() => useScreenshot())
    const [image, takeScreenShot, { error }] = current

    expect(error).toEqual(null)
    expect(image).toEqual(null)
    await expect(() => takeScreenShot()).toThrow()
    expect(error).toEqual(null)
  })
})
