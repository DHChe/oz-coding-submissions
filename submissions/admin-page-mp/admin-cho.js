const darkModeButton = document.getElementById('darkModeButton')
const lightModeButton = document.getElementById('lightModeButton')

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme)
}

darkModeButton.addEventListener('click', function() {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    localStorage.setItem('theme', 'dark')
})

lightModeButton.addEventListener('click', function() {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    localStorage.setItem('theme', 'light')
})
