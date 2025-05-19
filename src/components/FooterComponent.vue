<template>
    <footer>
    <div id="space-footer">
      <div id="div-ifbooks-footer">
        <p>IFbooks</p>
        <ul>
          <li><a href="#"><span class="mdi mdi-facebook" style="color: white;"></span></a></li>
          <li><a href="#"><span class="mdi mdi-instagram" style="color: white;"></span></a></li>
          <li><a href="#"><span class="mdi mdi-twitter" style="color: white;"></span></a></li>
        </ul>
      </div>
      <div id="div-contato-footer">
        <p>Contato</p>
        <ul>
          <li><span class="mdi mdi-phone"></span> +55 47 40045263</li>
          <li><span class="mdi mdi-clock"></span> 8h às 23h - Seg a Sex</li>
          <li><span class="mdi mdi-email"></span> contato@ifbooks.com</li>
        </ul>
        <div id="div-img-footer">
          <img src="../src/components/img-app.vue/paipal.png" alt="PaiPal">
          <img src="../src/components/img-app.vue/MasterCard.png" alt="MasterCard">
          <img src="../src/components/img-app.vue/VISA.png" alt="VISA">
        </div>
      </div>
    </div>
    <p id="copy">&copy; Alguns direitos reservados. IFbooks 2025. </p>
  </footer>
</template>

<style scoped>
/*======================
          FOOTER
  ======================*/
  footer {
  background-color: #008B8B;
  padding: 2vw 0vw 1vw 0vw;
}

footer #space-footer {
  display: flex;
  justify-content: space-between;
  padding: 0vw 15vw 2vw 15vw;
  border-bottom: 1px #003f3f72 solid;
}

footer #space-footer div ul {
  list-style: none;
  margin-left: -2.5vw;
}

footer #space-footer #div-ifbooks-footer ul {
  display: flex;
}

footer #space-footer #div-ifbooks-footer ul li {
  margin-right: 0.5vw;
  margin-top: 0.5vw;
}

footer #space-footer #div-ifbooks-footer p {
  color: white;
}

footer #space-footer #div-ifbooks-footer ul li span {
  font-size: 1.5rem;
}

footer #space-footer #div-contato-footer p {
  color: white;
  font-weight: bold;
}

footer #space-footer #div-contato-footer ul li {
  margin-top: 0.5vw;
  color: white;
}

footer #div-img-footer img {
  margin: 2vw 1vw 0 0vw;
}

footer #copy {
  text-align: center;
  color: white;
  padding: 1vw 0 0 0;
}
</style>