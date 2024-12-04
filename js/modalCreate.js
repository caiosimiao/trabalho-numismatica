const modals = document.querySelectorAll('.modalOpen')
const modalBox = document.querySelector('.modalBox')
const modalTitle = document.querySelector('.modalTitle')
const modalImage = document.querySelector('.modalImage')
const modalYear = document.querySelector('.modalYear')
const modalDescription = document.querySelector('.modalDescription')
const modalClose = document.querySelector('.modalClose')
const backgroundFill = document.querySelector('.backgroundF')


modals.forEach((modal) => {
  modal.addEventListener('click', () => {
    modalBox.style.display = "block"
    const modalList = modal.childNodes
    modalTitle.innerHTML = modalList[3].innerText
    modalImage.src = modalList[1].src
    modalYear.innerHTML = modalList[5].innerText
    modalDescription.innerHTML = modalList[9].innerHTML
    document.body.style.overflowY = "hidden"
    backgroundFill.classList.toggle('backgroundFill')
  })
})

modalClose.addEventListener('click', ()=>{
  modalBox.style.display = "none"
  document.body.style.overflowY = ""
  backgroundFill.classList.toggle('backgroundFill')
})




