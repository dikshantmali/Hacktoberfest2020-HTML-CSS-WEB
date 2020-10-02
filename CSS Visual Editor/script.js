document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', inputChanged)
})

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  )
}