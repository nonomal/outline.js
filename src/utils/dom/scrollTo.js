import easeInQuad from '../lang/easeInQuad'
import isFunction from '../types/isFunction'
import isNumber from '../types/isNumber'
import _getScrollElement from './_getScrollElement'

let timer = null

/**
 * 指定 rootElement DOM 节点滚动到指定 top 位置
 * ========================================================================
 * todo: 1. 点击菜单滚动时，同步定位取消; 2. 了解 sticky 定位
 * @method scrollTo
 * @param {HTMLElement|Object} [scrollElement] - （必须）要滚动的 DOM 节点
 * @param {Number} top - （必须）滚动的 scrollTop 数值
 * @param {Function|Number} [afterStop] - （可选）滚动完成的回调函数或者滚动的速率值
 * @param {Number} [speed] - 可选）滚动的速率值
 */
const scrollTo = (scrollElement, top, afterStop, speed = 30) => {
  const $scrollElement = _getScrollElement(scrollElement)
  let scrollTop = $scrollElement.scrollTop
  let count = 0
  const isScrollUp = top - $scrollElement.scrollTop < 0
  const MAX_HEIGHT = $scrollElement.scrollHeight
  const MAX_TOP = top - MAX_HEIGHT <= 0 ? top : MAX_HEIGHT
  const stop = () => {
    clearTimeout(timer)
    timer = null
  }
  const play = () => {
    if (timer) {
      stop()
    }

    count += 3

    if (isScrollUp) {
      scrollTop -= easeInQuad(count)
      $scrollElement.scrollTop = scrollTop

      if (scrollTop <= top) {
        $scrollElement.scrollTop = top
        stop()

        if (isFunction(afterStop)) {
          afterStop(top)
        }

        return false
      }
    } else {
      scrollTop += easeInQuad(count)
      $scrollElement.scrollTop = scrollTop

      if (scrollTop >= MAX_TOP) {
        $scrollElement.scrollTop = MAX_TOP
        stop()

        if (isFunction(afterStop)) {
          afterStop(MAX_TOP)
        }

        return false
      }
    }

    timer = setTimeout(play, isNumber(afterStop) ? afterStop : speed)
  }

  play()
}

export default scrollTo
