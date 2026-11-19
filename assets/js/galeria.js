let arraygaleria3=[
    { imagen:"./assets/imgs/galeria3/gal3-1.jpg"},
    { imagen:"./assets/imgs/galeria3/gal3-2.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-3.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-4.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-5.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-6.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-7.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-8.jpg"},
     { imagen:"./assets/imgs/galeria3/gal3-9.jpg"},
  ]
  
  let galeria3=document.getElementsByClassName("imagengaleria3")

for (let i = 0; i < galeria3.length; i++) {
    galeria3[i].src = galeria3[i].imagen
}
