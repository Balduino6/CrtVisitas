
    html.classList.toggle('light')
    //tag image
    const image = document.querySelector("#profile img")

    //substituir a imagem
    if(index.html.classList.contains('light')){
    //light mode
    image.setAttribute('src', './assets/avatar-light.jpg')   
    
    } else{
    //dark mode   
        image.setAttribute('src', './assets/avatar.jpg')
    }