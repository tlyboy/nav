let ul = document.querySelector('ul')
let lis = ul.querySelectorAll('li')

ul.addEventListener('click', e => {
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = ''
  }
  e.target.className = 'checked'
})
