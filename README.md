# jest-demo
单元测试demo

## 1、安装
初始化package.json
```
npm init -y 
```
安装jest
```
 yarn add jest
```
修改 scripts
```
{
  "name": "jest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jest": "^26.6.3"
  }
}
```
index.js
```
function xxx1(e) {
  return e >= 10 ? '老友粉':"螺蛳粉"
}

function xxx2(e) {
  return e >= 2 ? '加蛋':"加青菜"
}
module.exports = {xxx1,xxx2}
```
index.test.js
```
const fendian = require('./index.js')
const { xxx1 , xxx2 }  = fendian

test('吃粉 10元',()=>{
    expect(xxx1(10)).toBe('老友粉')
})

test('加料  2',()=>{
    expect(xxx2(2)).toBe('加青菜')
})
```
运行test
```
yarn test
```


![image.png](https://upload-images.jianshu.io/upload_images/5691870-ef5ed84cf09c3925.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1024)
说明：期望得到 **加青菜** 但接受到 **加蛋** 测试不通过。
以上成功运行以上内容说明你已经成功一半了。


##### 初始化jest.config.js配置
```
 npx jest --init
```
 选项
```
//您要使用Typescript作为配置文件吗？
Would you like to use Typescript for the configuration file? … no
//选测试环境 node 或 web
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
//是否生成测试覆盖率
✔ Do you want Jest to add coverage reports? … yes
  //使用哪个提供程序来检测覆盖范围的代码
✔ Which provider should be used to instrument code for coverage? › babel
//自动清除模拟调用和实例
✔ Automatically clear mock calls and instances between every test? … yes
```
运行以上 ` npx jest --init` 会在根目录生成`jest.config.js`

##### 测试覆盖率
**coverageDirectory** 测试覆盖率输出目录

```
  coverageDirectory: "coverage",
```
```
 npx jest --coverage
```
本地会生成一个coverage文件夹（可以用浏览器打开）， 终端也会生成简单的图表。
![image.png](https://upload-images.jianshu.io/upload_images/5691870-ba3c989d656100f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/5691870-5295b0dd5aab2570.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



##  2、常用匹配器
`toBe()` ：全等于
 `toEqual() `：递归检查对象或数组的每个字段
 `toBeNull() `：仅匹配null值
 `toBeUndefined()`：仅匹配undefined值
 `toBeDefined()`：与toBeUndifined相反，只要定义过就可以通过（包括null）。
  `toBeTruthy()`：true，就相当于判断真的
  `toBeFalsy()`：false，就相当于判断假的
 `toBeGreaterThan()`：大于 >
 `toBeGreaterThanOrEqual()`：大于等于 >=
 `toBeLessThan()`：小于 <
 `toBeLessThanOrEqual()`：小于等于 <=
 `toBeCloseTo()`：浮点数的近似相等比较
 `toMatch()`：字符串正则比较
 `toContain()`：数组比较
 `toThrow()`：对异常进行处理的匹配器，检测一个方法会不会抛出异常
`not()`：非。相反的

- `toBe()` ：全等于
```
test(`toBe()`, () => {
  expect(1 + 1).toBe(2)// 通过
  // expect(1+1).toBe(2) // 不通过
})
```
- `toEqual() `：递归检查对象或数组的每个字段
```
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
```
- `toBeNull() `：仅匹配null值
```
test(`toBeNull()`, () => {
  const a = null // 通过
  // const a = '' // 不通过 undefined  or ''
  expect(a).toBeNull()
})
```
- `toBeUndefined()`：仅匹配undefined值
```
test(`toBeUndefined()`, () => {
  const a = undefined // 通过
  // const a = null // 不通过 null or ''  or  123
  expect(a).toBeUndefined()
})
```
- `toBeDefined()`：与toBeUndifined相反，只要定义过就可以通过（包括null）。
```
test(`toBeDefined()`, () => {
  const a = '苏宋霖' // 通过   '' or null or 123
  // const a = undefined // 不通过
  expect(a).toBeDefined()
})
```
- `toBeTruthy()`：true，就相当于判断真的
```
test(`toBeTruthy()`, () => {
  const a = 1 // 通过
  // const a = '' // 不通过  null or undefined or 0 or ''
  expect(a).toBeTruthy()
})
```
- `toBeFalsy()`：false，就相当于判断假的
```
test(`toBeFalsy()`, () => {
  const a = '' // 通过  null or undefined or 0 or ''
  // const a = '11' // 不通过 1 or '字符串'
  expect(a).toBeFalsy()
})
```
- `toBeGreaterThan()`：大于 >
```
test(`toBeGreaterThan()`, () => {
  const a = 10
  expect(a).toBeGreaterThan(9)   // 通过
  // expect(a).toBeGreaterThan(10)  // 不通过
})
```
- `toBeGreaterThanOrEqual()`：大于等于 >=
```
test(`toBeGreaterThanOrEqual()`, () => {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10)   // 通过
  // expect(a).toBeGreaterThanOrEqual(11)  // 不通过
})
```
- `toBeLessThan()`：小于 <
```
test(`toBeLessThan()`, () => {
  const a = 10
  expect(a).toBeLessThan(11) // 通过
  // expect(a).toBeLessThan(9) // 不通过
})
```
- `toBeLessThanOrEqual()`：小于等于 <=
```
test(`toBeLessThanOrEqual()`, () => {
  const a = 10
  expect(a).toBeLessThanOrEqual(10) // 通过
  // expect(a).toBeLessThanOrEqual(2)// 不通过
})
```
- `toBeCloseTo()`：浮点数的近似相等比较
```
test(`toBeCloseTo()`, () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)  // 通过
  // expect(a+b).toBe(0.3) // 不通过
})
```
- `toMatch()`：字符串正则比较
```
test(`toMatch()`, () => {
  const a = '苏宋霖哈哈哈嘻嘻嘻'
  expect(a).toMatch('苏宋霖') // 通过
  // expect(a).toMatch('苏宋霖哈哈哈嘻嘻嘻1')  // 不通过
})
```
-`toContain()`：数组比较
```
test(`toContain()`, () => {
  const a = [1, 2, 3]
  expect(a).toContain(1)// 通过
  // expect(a).toContain('1') //[1] // 不通过
})
```
- `toThrow()`：对异常进行处理的匹配器，检测一个方法会不会抛出异常
```
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
```
- `not()`：非。相反的
```
test(`not()`, () => {
  const a = 11
  expect(a).not.toBe(12) // 通过
  // expect(a).not.toBe(11) // 不通过
})
```

## 3、异步处理

```
yarn add axios
yarn add mockjs
```
新建`mockData.js`
```
import Mock from 'mockjs'
Mock.mock('/xx','get',{
    "code": "1",
})

```
新建`axiosMock.js`
```
import './mockData.js'
import axios from 'axios'

export const moack1 = (fn) => {
  axios.get('/xx').then((res) => {
    fn(res.data)
  })
}
export const moack2 = () => {
  return new Promise((resolve, reject) => {
    resolve(111)
  })
}
export const moack3 = (fn) => {
  return axios.get('/xx')
}
```
修改`index.test.js`
```
import {moack1,moack2, moack3}  from './axiosMock'

test('异步处理 async...await',async () => {
 const data =  await moack2()
  expect(data).toBe(111)
})

test('异步处理 done', (done) => {
  moack1((data)=>{
    expect(data).toEqual({code: "1"})
    done()
  })
})
test('异步处理 return', () => {
 return moack3().then(({data})=>{
      expect(data).toEqual({code: '1'})
    })
})
```
###### 异步处理错误 如404
修改`axiosMock.js`
```
export const moack4 = ()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(404)
    }, 1000 * 1);
  })
}
```
修改`index.test.js`
```
test('异步处理 404', () => {
  // expect.assertions(1)  // 断言必须执行一次expect
  return moack4().catch((res) => {
    expect(res.toString().indexOf('404') > -1).toBe(true)
  })
})
```
## 声明周期钩子
- `beforeAll`：所有测试用例开始之前执行
- `afterAll`:所有测试用例完成后才执行
- `beforeEach`：每个测试用例**开始**之前执行
- `afterEach`：每个测试用例**结束**之后执行
```
beforeAll(()=>{
  console.log('所有测试用例开始之前执行')
})
afterAll(()=>{
  console.log('所有测试用例完成后才执行')
})
beforeEach(()=>{
  console.log('每个测试用例 开始 之前执行')
})
afterEach(()=>{
  console.log('每个测试用例 结束 之后执行')
})
```
# 分组模块  describe
```
describe('异步模块',()=>{
  test('异步处理 async...await', async () => {
    const data = await moack2()
    expect(data).toBe(111)
  })
})
describe(' 常用匹配器模块',()=>{
 test('吃粉 10元', () => {
    expect(xxx1(10)).toBe('老友粉')
  })
})
```
![image.png](https://upload-images.jianshu.io/upload_images/5691870-81770f0ba6a46150.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 4、常见问题
###### 如何让Jest使用import导入?
```
yarn add  @babel/core  @babel/preset-env -D
```
根目录新建```.babelrc```
```
{
  "presets":[
      [
              "@babel/preset-env",{
              "targets":{
                  "node":"current"
              }
          }
      ]
  ]
}
```
修改`index.test.js`
```
- const fendian = require('./index.js')
+ import fendian from './index'
```


---
###### 只运行某个测试用例或者运行某个模块`only `
```
  test.only('异步处理 404', () => {
    // expect.assertions(1)  // 断言必须执行一次expect
    return moack4().catch((res) => {
      expect(res.toString().indexOf('404') > -1).toBe(true)
    })
  })
```
![只运行某个测试用例](https://upload-images.jianshu.io/upload_images/5691870-a90f227a7a7184b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![只运行某个模块](https://upload-images.jianshu.io/upload_images/5691870-d15ae539105cefe1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

