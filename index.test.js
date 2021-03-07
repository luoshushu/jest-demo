
import { xxx1, xxx2 } from './index'
import { moack1, moack2, moack3, moack4 } from './axiosMock'

// beforeAll(()=>{
//   console.log('所有测试用例开始之前执行')
// })
// afterAll(()=>{
//   console.log('所有测试用例完成后才执行')
// })
// beforeEach(()=>{
//   console.log('每个测试用例 开始 之前执行')
// })
// afterEach(()=>{
//   console.log('每个测试用例 结束 之后执行')
// })
describe.only('异步模块',()=>{
  test('异步处理 async...await', async () => {
    const data = await moack2()
    expect(data).toBe(111)
  })
  
  test('异步处理 done', (done) => {
    moack1((data) => {
      expect(data).toEqual({ code: "1" })
      done()
    })
  })
  test('异步处理 return', () => {
    return moack3().then(({ data }) => {
      expect(data).toEqual({ code: '1' })
    })
  })
  test('异步处理 404', () => {
    // expect.assertions(1)  // 断言必须执行一次expect
    return moack4().catch((res) => {
      expect(res.toString().indexOf('404') > -1).toBe(true)
    })
  })
})
describe('常用匹配器模块',()=>{
  test('吃粉 10元', () => {
    expect(xxx1(10)).toBe('老友粉')
  })
  
  test('加料  2', () => {
    expect(xxx2(2)).toBe('加蛋')
  })
  
  test(`toBe()`, () => {
    expect(1 + 1).toBe(2)// 通过
    // expect(1+1).toBe(2) // 不通过
  })
  test(`toEqual() 对象`, () => {
    const obj = { xx: '苏宋霖' }
    expect(obj).toEqual({ xx: '苏宋霖' })// 通过
    // expect(obj).toEqual({xx:'苏宋霖',x:1})  // 不通过
  })
  test(`toEqual() 数组`, () => {
    const arr = [1, 2, 3]
    expect(arr).toEqual([1, 2, 3]) // 通过
    // expect(arr).toEqual([1,2]) // 不通过
  })
  test(`toBeNull()`, () => {
    const a = null // 通过
    // const a = '' // 不通过 undefined  or ''
    expect(a).toBeNull()
  })
  test(`toBeUndefined()`, () => {
    const a = undefined // 通过
    // const a = null // 不通过 null or ''  or  123
    expect(a).toBeUndefined()
  })
  test(`toBeDefined()`, () => {
    const a = '苏宋霖' // 通过   '' or null or 123
    // const a = undefined // 不通过
    expect(a).toBeDefined()
  })
  test(`toBeTruthy()`, () => {
    const a = 1 // 通过
    // const a = '' // 不通过  null or undefined or 0 or ''
    expect(a).toBeTruthy()
  })
  test(`toBeFalsy()`, () => {
    const a = '' // 通过  null or undefined or 0 or ''
    // const a = '11' // 不通过 1 or '字符串'
    expect(a).toBeFalsy()
  })
  test(`toBeGreaterThan()`, () => {
    const a = 10
    expect(a).toBeGreaterThan(9)   // 通过
    // expect(a).toBeGreaterThan(10)  // 不通过
  })
  test(`toBeGreaterThanOrEqual()`, () => {
    const a = 10
    expect(a).toBeGreaterThanOrEqual(10)   // 通过
    // expect(a).toBeGreaterThanOrEqual(11)  // 不通过
  })
  test(`toBeLessThan()`, () => {
    const a = 10
    expect(a).toBeLessThan(11) // 通过
    // expect(a).toBeLessThan(9) // 不通过
  })
  test(`toBeLessThanOrEqual()`, () => {
    const a = 10
    expect(a).toBeLessThanOrEqual(10) // 通过
    // expect(a).toBeLessThanOrEqual(2)// 不通过
  })
  test(`toBeCloseTo()`, () => {
    const a = 0.1
    const b = 0.2
    expect(a + b).toBeCloseTo(0.3)  // 通过
    // expect(a+b).toBe(0.3) // 不通过
  })
  test(`toMatch()`, () => {
    const a = '苏宋霖哈哈哈嘻嘻嘻'
    expect(a).toMatch('苏宋霖') // 通过
    // expect(a).toMatch('苏宋霖哈哈哈嘻嘻嘻1')  // 不通过
  })
  test(`toContain()`, () => {
    const a = [1, 2, 3]
    expect(a).toContain(1)// 通过
    // expect(a).toContain('1') //[1] // 不通过
  })
  const errorFn = () => {
    throw new Error('报错了')
  }
  const errorFn1 = () => {
    console.log(111);
  }
  test(`toThrow()`, () => {
    expect(errorFn).toThrow()// 通过
    // expect(errorFn1).toThrow()  // 不通过
  })
  test(`not()`, () => {
    const a = 11
    expect(a).not.toBe(12) // 通过
    // expect(a).not.toBe(11) // 不通过
  })
})





