 const contenidoSlider = [
    { imagen: "/assets/imgs/slider1/slider1.jpg", texto: "CREATIVITY ABOVE ALL" },
    { imagen: "/assets/imgs/slider1/slider2.jpg", texto: "ENVISION THE FUTURE" },
    { imagen: "/assets/imgs/slider1/slider3.jpg", texto: "WE CREATE ARTWORK" }
  ];

  let currentIndex = 0;
    let container=document.getElementById('contenedorSlider');
    let fraseslider=document.getElementById("slider-titulo")
    let imgslider=document.getElementById("slider-imagen")
    

    let btnPrev=document.getElementById('prev');
    let btnNext=document.getElementById('next');

    function showSlide(){
        let item = contenidoSlider[currentIndex]; 
    
        imgslider.src=item.imagen;
        fraseslider.innerText=item.texto;
    }

    function previous(){
       currentIndex=(currentIndex - 1 + contenidoSlider.length)%contenidoSlider.length; 
       showSlide(); 
    }

    function next(){
        currentIndex=(currentIndex + 1)%contenidoSlider.length;
        showSlide();
    }

    btnPrev.addEventListener('click',previous);
    btnNext.addEventListener('click',next);
    showSlide();

  let arrayimgs=[
    { imagen:"./assets/imgs/galeria1/galeria1.jpg"},
    { imagen:"./assets/imgs/galeria1/galeria2.jpg"},
    { imagen:"./assets/imgs/galeria1/gal7.jpg"},
    { imagen:"./assets/imgs/galeria1/galeria3.png"},
    { imagen:"./assets/imgs/galeria1/galeria4.jpg"},
    { imagen:"./assets/imgs/galeria1/galeria5.jpg"},
    { imagen:"./assets/imgs/galeria1/galeria6.jpg"},
    { imagen:"./assets/imgs/galeria1/gal7.jpg"}
  ]
  
  let galeria1=document.getElementsByClassName("imagengaleria")

  for(let i=0;i<galeria1.length;i++){

    let img=galeria1[i]
    img.src=arrayimgs[i].imagen
  }

  let arrayimgs2=[
    { imagen:"./assets/imgs/team/team1.jpg"},
     { imagen:"./assets/imgs/team/team2.jpg"},
      { imagen:"./assets/imgs/team/team3.jpg"},
  ]
  
  let galeria2=document.getElementsByClassName("imagengaleria2")

  for(let i=0;i<galeria2.length;i++){

    let img2=galeria2[i]
    img2.src=arrayimgs2[i].imagen
  }


 let arrayFrases=[
    { frase:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolor"},
     { frase:"Magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit"},
      { frase:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore"},
 ] 

 let sliderFrases=document.getElementById("sliderFrases")
 let fraseUnica=document.getElementById("titulos")


 let currentIndex2 = 0;
    

    let btnPrev2=document.getElementById('prev2');
    let btnNext2=document.getElementById('next2');

    function showSlide2(){
     
    let item = arrayFrases[currentIndex2];
    fraseUnica.innerText = item.frase;
}
    

    function previous2(){
       currentIndex2=(currentIndex2 - 1 + arrayFrases.length)%arrayFrases.length; 
       showSlide2(); 
    }

    function next2(){
        currentIndex2=(currentIndex2 + 1)% arrayFrases.length;
        showSlide2();
    }

    btnPrev2.addEventListener('click',previous2);
    btnNext2.addEventListener('click',next2);
    showSlide2();



