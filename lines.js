function connectKernelToItems() {
  const svg = document.getElementById('lines')
  svg.innerHTML = ''
  const kernel = document.querySelector('.kernel')
  const items = document.querySelectorAll('.items')
  const x1 = kernel.offsetLeft + kernel.offsetWidth / 2
  const y1 = kernel.offsetTop + kernel.offsetHeight / 2
  const linesLength = []
  items.forEach((item) => {
    const x2 = item.offsetLeft + item.offsetWidth / 2
    const y2 = item.offsetTop + item.offsetHeight / 2

    const lineBorder = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    )
    lineBorder.setAttribute('x1', x1)
    lineBorder.setAttribute('y1', y1)
    lineBorder.setAttribute('x2', x2)
    lineBorder.setAttribute('y2', y2)
    lineBorder.setAttribute('stroke', 'black') // border color
    lineBorder.setAttribute('stroke-width', '20') // border width

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', x1)
    line.setAttribute('y1', y1)
    line.setAttribute('x2', x2)
    line.setAttribute('y2', y2)
    line.setAttribute('stroke', 'black')
    line.setAttribute('stroke-width', '4')

    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    linesLength.push(length)
    line.setAttribute('stroke-dasharray', length)
    line.setAttribute('stroke-dashoffset', length)

    line.classList.add('line')
    svg.appendChild(lineBorder)
    svg.appendChild(line)
  })
  const lines = document.querySelectorAll('.line')

  items.forEach((item, index) => {
    const line = lines[index]

    item.addEventListener('mouseenter', () => {
      line.style.animation = 'draw-line 1s forwards'
    })

    item.addEventListener('mouseleave', () => {
      line.style.animation = 'none'
    })
  })
}
window.addEventListener('load', connectKernelToItems)
window.addEventListener('resize', connectKernelToItems)
