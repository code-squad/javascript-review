const obj = {
  debug: 'on',
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500,
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center',
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;',
  },
}

const result = []
for (let i in obj) {
  if (typeof obj[i] === 'object') {
    for (let j in obj[i]) {
      if (typeof obj[i][j] === 'number') {
        result.push(j)
      }
    }
  }
}

console.log(result)
