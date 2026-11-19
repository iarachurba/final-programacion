let arrayPort = [
    { imagen: "/assets/imgs/portfolio-ind/portfolio1.jpg" },
    { imagen: "/assets/imgs/portfolio-ind/porfolio2.jpg" },
    { imagen: "/assets/imgs/portfolio-ind/porfolio3.jpg" }
]

let galeriaPort1 = document.getElementsByClassName("fotosPort")

for (let i = 0; i < galeriaPort1.length; i++) {
    galeriaPort1[i].src = arrayPort[i].imagen
}