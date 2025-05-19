<template>
    <section id="benefict">
      <a href="#">
        <div>
          <span class="mdi mdi-truck"></span>
          <h3>Frete grátis para SC</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <span class="mdi mdi-star"></span>
          <h3>Livros recomendados</h3>
        </div>
      </a>
      <a href="#">
        <div>
          <span class="mdi mdi-book-open-page-variant"></span>
          <h3>Mais vendidos</h3>
        </div>
      </a>
    </section>
</template>

<style scoped>
/*======================
     SECTION #BENEFICT
  ======================*/
  main #benefict {
  display: flex;
  justify-content: space-between;
  padding: 2vw 10vw;
  background-color: #008B8B;
  box-shadow: 0 0 2px 0 #000000;
  border: 1px #003f3f72 solid;
}

main #benefict div {
  display: flex;
  background-color: #003f3f;
  padding: 0.2vw 2vw;
  border-radius: 10px;
  color: white;
  transition: all ease-in-out .5s;
  border: 2px #003f3f solid;
  width: 20vw;
  justify-content: center;
}

main #benefict div span {
  font-size: 2rem;
}

main #benefict div h3 {
  margin-top: 0.5vw;
  font-size: 1.2rem;
  padding-left: 0.5vw;
  font-weight: bold;
  transition: all ease-in-out .5s;
}

main #benefict a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}
</style>