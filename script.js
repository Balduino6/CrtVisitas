
function toggleMode() { 
    const html = document.documentElement
  

    html.classList.toggle('light')
    //tag image
    const image = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
    //light mode
    image.setAttribute('src', './assets/avatar-light.jpg')   
    
    } else{
    //dark mode   
        image.setAttribute('src', './assets/avatar.jpg')
    }

   } 