import { MousePosition } from '@/types'
import { BaseSyntheticEvent } from 'react'

/**
 * 计算两点之间的距离
 * @param start 起点
 * @param end 终点
 * @returns 距离
 */
export const getDistance = (start: MousePosition, end: MousePosition) => {
  return Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2))
}

/**
 * 转换缩放坐标
 * @param position
 * @param scale
 * @returns
 */
export const scalePosition = (
  position: MousePosition,
  scale: number
): MousePosition => {
  return {
    x: Math.floor(position.x / scale),
    y: Math.floor(position.y / scale)
  }
}

/**
 * 取消事件默认行为
 * @param e 事件对象
 */
export const cancelEventDefault = (e: BaseSyntheticEvent | Event) => {
  e.stopPropagation()
  e.preventDefault()
}