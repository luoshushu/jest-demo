const fendian = require('./index.js')
const { xxx1 , xxx2 }  = fendian

test('吃粉 10元',()=>{
    expect(xxx1(10)).toBe('老友粉')
})

test('加料  2',()=>{
    expect(xxx2(2)).toBe('加青菜')
})