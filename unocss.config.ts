import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
const numReg = /^((?![A-Za-z]).)*$/

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({ }),
  ],
  rules: [
    [/^z-(\d+)$/, ([, d]) => ({ 'z-index': `${d}` })],
    [/^h-(\w+)$/, ([, a]) => {
      const h = numReg.test(a) ? `${a}%` : a
      return { height: h }
    }],

    [/^w-(\w+)$/, ([, a]) => {
      const w = numReg.test(a) ? `${a}%` : a
      return { width: w }
    }],
    [/^h-calc-(\w+)-(\w+)$/, ([, a, b]) => {
      const heightArr = [a, b].map(e => numReg.test(e) ? `${e}%` : e)
      return { height: `calc(${heightArr[0]} - ${heightArr[1]})` }
    }],
    [/^w-calc-(\w+)-(\w+)$/, ([, a, b]) => {
      const widthArr = [a, b].map(e => numReg.test(e) ? `${e}%` : e)
      return { width: `calc(${widthArr[0]} - ${widthArr[1]})` }
    }],

    [/^p-(\w+)-?(\w+)?-?(\w+)?-?(\w+)?$/, ([, t, r, b, l]) => {
      const effectiveArr = [t, r, b, l].filter(e => e)
      const paddingList = effectiveArr.map(e => numReg.test(e) ? `${e}%` : e)
      return effectiveArr.length === 0 ? { padding: '0px' } : { padding: paddingList.join(' ') }
    }],
    [/^m-(\w+)-?(\w+)?-?(\w+)?-?(\w+)?$/, ([, t, r, b, l]) => {
      const effectiveArr = [t, r, b, l].filter(e => e)
      const marginList = effectiveArr.map(e => numReg.test(e) ? `${e}%` : e)
      return effectiveArr.length === 0 ? { margin: '0px' } : { margin: marginList.join(' ') }
    }],

    ['fr-b', { 'display': 'flex', 'justify-content': 'space-between' }],
    ['fr-c', { 'display': 'flex', 'justify-content': 'center' }],
    ['fr-e', { 'display': 'flex', 'justify-content': 'flex-end' }],
    ['fr-a', { 'display': 'flex', 'justify-content': 'space-around' }],

    ['fc-s', { 'display': 'flex', 'flex-direction': 'column' }],
    ['fc-b', { 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'space-between' }],
    ['fc-a', { 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'space-around' }],
    ['fc-c', { 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center' }],
    ['fc-e', { 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'flex-end' }],
    ['ca-s', { 'align-items': 'stretch' }],
    ['ca-c', { 'align-items': 'center' }],
    ['ca-a', { 'align-items': 'space-around' }],
    ['ca-e', { 'align-items': 'flex-end' }],
    ['ela-s', { 'align-content': 'flex-start' }],
    ['ela-e', { 'align-content': 'flex-end' }],
    ['ela-c', { 'align-content': 'center' }],
    ['ela-b', { 'align-content': 'space-between;' }],
    ['ela-a', { 'align-content': 'space-around;' }],
    ['f-w', { 'flex-wrap': 'wrap' }],
    [/^fx-(\w+)-?(\d+)?-?(\w+)?$/, ([, g, s, b]) => {
      const fxArr = [g, s, b].filter(e => e)
      return { flex: fxArr.join(',') }
    }],

    [/^fs-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': `${d}px` })],
    [/^fw-(\w+)$/, ([, d]) => ({ 'font-weight': `${d}` })],
    [/^ff-(\w+)$/, ([, d]) => ({ 'font-family': `${d}` })],
    [/^ls-(\w+)$/, ([, d]) => {
      const numFlag = numReg.test(d) ? `${d}%` : d
      return { 'letter-spacing': numFlag }
    }],
    [/^ta-(start|end|left|right|center|justify|justify-all|match-parent)$/, ([, d]) => ({ 'text-align': d })],
    [/^tt-(capitalize|uppercase|lowercase|none+)$/, ([, d]) => ({ 'text-transform': `${d}` })],

    [/^po-(r|a|s|f+)$/, ([, w]) => {
      const positionMap = new Map().set('r', 'relative').set('a', 'absolute').set('s', 'sticky').set('f', 'fixed')
      const positionFlag = positionMap.has(w)
      return positionFlag ? { position: positionMap.get(w) } : { position: w }
    }],
    [/^po-(t|l|b|r+)-(\w+)$/, ([, a, b]) => {
      const directionMap = new Map().set('t', 'top').set('b', 'bottom').set('r', 'right').set('l', 'left')
      return numReg.test(b) ? { [directionMap.get(a)]: `${b}%` } : { [directionMap.get(a)]: b }
    }],

    [/^bw-(\d+)$/, ([, d]) => ({ 'border-width': `${d}px` })],
    [/^bs-(\w+)$/, ([, w]) => ({ 'border-style': `${w}` })],

    [/^br-(\w+)-?(\w+)?-?(\w+)?-?(\w+)?$/, ([, tl, tr, rr, lr]) => {
      const effectiveArr = [tl, tr, rr, lr].filter(e => e)
      const borderRadiusList = effectiveArr.map(e => numReg.test(e) ? `${e}%` : e)
      return borderRadiusList.length === 0 ? { 'border-radius': '0px' } : { 'border-radius': borderRadiusList.join(' ') }
    }],

  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
