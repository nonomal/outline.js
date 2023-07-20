import isString from './utils/types/isString'
import hasOwn from './utils/lang/hasOwn'
import isObject from './utils/types/isObject'
import extend from './utils/lang/extend'

class Base {
  constructor(options) {
    this.attrs = {}

    if (options) {
      this.initialize(options)
    }
  }

  initialize(options) {
    this.attr(options).render().addListeners()
    return this
  }

  attr(prop, value) {
    const attrs = this.attrs

    if (isString(prop)) {
      // 只能扩展 attrs 中已有的属性
      if (value && hasOwn(attrs, prop)) {
        // 更新单个配置信息
        attrs[prop] = value
        return this
      }

      // 只传递 prop 参数，则返回对应的属性值
      return attrs[prop]
    } else if (isObject(prop)) {
      // 批量更新配置信息
      extend(attrs, prop)

      return this
    } else if (arguments.length === 0) {
      // 不传递参数，直接返回整个
      return attrs
    }

    return this
  }

  render() {
    return this
  }

  destroy() {
    this.removeListeners()
    return this
  }

  reload(options) {
    this.destroy().initialize(this.attr(options))
    return this
  }

  addListeners() {
    return this
  }

  removeListeners() {
    return this
  }
}

export default Base