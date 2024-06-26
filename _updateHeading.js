import trim from './utils/lang/trim'
import createElement from './utils/dom/createElement'
import setAttributes from './utils/dom/setAttributes'

import icon from './utils/icons/icon'

const _updateHeading = ($heading, i, options) => {
  const CLS_HEADING = 'outline-heading'
  const hasAnchor = options.hasAnchor || true
  const isAtStart = options.isAtStart || true
  const showCode = options.showCode || false
  const chapterCode = options.chapterCode || ''
  const anchorURL = options.anchorURL || ''
  const headingId = `heading-${i}`
  const attrs = {
    id: headingId,
    className: isAtStart ? `${CLS_HEADING} ${CLS_HEADING}_start` : CLS_HEADING,
    'data-id': i
  }
  const text = trim($heading.innerHTML)
  let $anchor
  let $icon

  if (showCode) {
    attrs.innerHTML = chapterCode + ' ' + text
    attrs['data-code'] = chapterCode
  }
  setAttributes($heading, attrs)

  if (!hasAnchor) {
    return false
  }

  $icon = icon('hash', { iconSet: 'outline' })
  $anchor = createElement(
    'a',
    {
      id: `anchor-${i}`,
      className: `${CLS_HEADING}__anchor anchor-${i}`,
      href: anchorURL || `#${headingId}`,
      target: anchorURL ? '_blank' : 'self',
      'data-id': i
    },
    $icon
  )
  $heading.appendChild($anchor)
}

export default _updateHeading
