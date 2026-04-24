const FIX_BLOCK_SELECTOR = '.fixBlock'
const SCROLL_POSITION_DATASET_KEY = 'scrollPosition'

export const disableScroll = () => {
  const body = document.body
  const fixBlocks = document.querySelectorAll<HTMLElement>(FIX_BLOCK_SELECTOR)
  const scrollPosition = window.scrollY
  const paddingOffset = `${window.innerWidth - body.offsetWidth}px`

  fixBlocks.forEach((element) => {
    element.style.paddingRight = paddingOffset
  })

  body.style.paddingRight = paddingOffset
  body.dataset[SCROLL_POSITION_DATASET_KEY] = String(scrollPosition)
  body.classList.add('stopScroll')
  body.style.top = `-${scrollPosition}px`
}

export const enableScroll = () => {
  const body = document.body
  const fixBlocks = document.querySelectorAll<HTMLElement>(FIX_BLOCK_SELECTOR)
  const scrollPosition = Number.parseInt(body.dataset[SCROLL_POSITION_DATASET_KEY] ?? '0', 10)

  fixBlocks.forEach((element) => {
    element.style.paddingRight = '0px'
  })

  body.style.paddingRight = '0px'
  body.classList.remove('stopScroll')
  body.style.top = ''

  const html = document.documentElement
  const originalScrollBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, scrollPosition)
  html.style.scrollBehavior = originalScrollBehavior

  delete body.dataset[SCROLL_POSITION_DATASET_KEY]
}
