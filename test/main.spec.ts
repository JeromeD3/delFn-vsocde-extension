import { test, expect } from 'vitest'
import { getFunctionNode } from '../src/main'
test('test', () => {
  const code = `function a() 
  {
    console.log(1)
  }`
  const index = 10
  // const functionNode = getFunctionNode(code, index)

  // expect(functionNode).toEqual({
  //   name: 'a',
  //   start: {
  //     line: 1,
  //     column: 0,
  //     index: 0,
  //   },
  //   end: {
  //     line: 4,
  //     column: 2,
  //     index: 35,
  //   },
  // })
})

test.only('ArrowFunctionExpression', () => {
  const code = `
  const getName = () => "heihie"
  const setName = () => "heihie"
  `
  const index = 10
  const functionNode = getFunctionNode(code, index)

  expect(functionNode).toEqual({
    name: 'getName',
    start: {
      line: 2,
      column: 2,
      index: 2,
    },
    end: {
      line: 2,
      column: 25,
      index: 25,
    },
  })
})
