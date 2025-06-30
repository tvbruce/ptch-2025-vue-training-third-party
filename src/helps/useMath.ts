import { add, divide } from './math'

//  一個計算梯形面積的方法
export function trapezoidArea(base1: number, base2: number, height: number): number {
  return divide(add(base1, base2), 2) * height
}
