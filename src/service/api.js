const { PRIVATE_KEY } = require('../key')
let md5 = require('md5')

function API () {
  const PUBLIC_KEY = '56969a8b1f2e7048cc2d48418643a33a'
  const dataTime = new Date().getDate()

  const hash = md5(dataTime + PRIVATE_KEY + PUBLIC_KEY)

  console.log(hash)

}

API()