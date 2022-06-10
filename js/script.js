const ul = document.querySelector('ul')

if (ul) {
  const lis = ul.querySelectorAll('li')

  if (lis) {
    ul.addEventListener('click', e => {
      for (let i = 0; i < lis.length; i++) {
        lis[i].className = ''
      }
      e.target.className = 'checked'
    })
  }
}
