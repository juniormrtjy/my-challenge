const menuBtn = document.querySelector('.btn-link')
const navigation = document.querySelector('.menu')

function toggleMenu() {
  navigation.classList.toggle('toggle')
}

const links = document.querySelectorAll('.menu a')

links.forEach(links => {
  links.addEventListener('click', toggleMenu)
})
