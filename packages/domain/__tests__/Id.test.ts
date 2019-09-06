import * as id from '../src/Id'
import { isRight, isLeft } from 'fp-ts/lib/Either'

describe('Id', () => {
  type TagHoge = {
    tag: 'Hoge'
  }
  type HogeId = TagHoge & id.BaseStringId
  const HogeId = id.createIdType<HogeId>(value => ({ tag: 'Hoge', value }))

  it('should be Right when an expected value comes', () => {
    const res = HogeId.decode('xxxx111-1111')
    expect(isRight(res)).toEqual(true)
    if (isLeft(res)) {
      throw new Error('an unexpected behaviour')
    }
    expect(res.right).toStrictEqual({ tag: 'Hoge', value: 'xxxx111-1111' })
  })
  it('should be Left when an empty id comes', () => {
    const res = HogeId.decode('')
    expect(isLeft(res)).toEqual(true)
  })
})