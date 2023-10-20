const buttonFunction = () => {
  document.getElementById('paragraph').innerHTML = 'Me clickeaste'
}

const imageFunction = () => {
  document.getElementById('hiddenImage').style.display = 'block'
}

const resetFunction = () => {
  window.location.reload()
}

const boldFunction = () => {
  const element = document.getElementById('bold')
  element.style.color = 'red'

  setTimeout(() => {
    element.style.color = "";
  }, 500);
}

const button = document.getElementById('button')
button.addEventListener('click', buttonFunction)

const image = document.getElementById('image')
image.addEventListener('click', imageFunction)

const reset = document.getElementById('reset')
reset.addEventListener('click', resetFunction)

const bold = document.getElementById('bold')
bold.addEventListener("mouseover", boldFunction)

const getDuck = () => {
  //Completar usando async await o fech then :)
  //fetch("https://random-d.uk/api/random");
}
