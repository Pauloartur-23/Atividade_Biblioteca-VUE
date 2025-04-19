<script setup>
</script>

<template>
  <main id="carrinho">
    <section id="carrinho-code">
      <h1>Carrinho</h1>
      <div class="cart-header">
        <p>Título</p>
        <p>Quantidade</p>
        <p>Subtotal</p>
      </div>
      <ul class="cart-items">
        <li>
          <div class="item-info">
            <img src="../components/img-books/Chain_of_Iron_Volume_2.png" alt="Livro">
            <div class="item-details">
              <h2>Chain of Iron: Volume 2</h2>
              <p>Cassandra Clare</p>
              <p><span>R$23.24</span></p>
            </div>
          </div>
          <div class="quantity-controls">
            <div id="quantity-controls-border">
              <button>-</button>
              <p>2</p>
              <button>+</button>
            </div>
          </div>
          <p class="subtotal">R$46.48</p>
        </li>
      </ul>
      <RouterLink to="/" class="back-button">Voltar para loja</RouterLink>
      <div class="cart-footer">
        <div class="coupon-section">
          <input type="text" placeholder="Código do cupom">
          <button class="coupon-button">Inserir Cupom</button>
        </div>
        <div class="total-section">
          <h2>Total da Compra</h2>
          <ul>
            <li>
              <p>Produtos:</p>
              <p>R$175</p>
            </li>
            <li>
              <p>Frete:</p>
              <p>Grátis</p>
            </li>
            <li>
              <p>Desconto:</p>
              <p>-</p>
            </li>
            <li class="total">
              <p>Total:</p>
              <p>R$175</p>
            </li>
          </ul>
          <button class="checkout-button">Ir para o pagamento</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main#carrinho #carrinho-code{
  padding: 2rem;
  background-color: white;
  padding: 5vw 10vw;
}

main#carrinho #carrinho-code h1 {
  color: #27ae60;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

main#carrinho #carrinho-code .cart-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
}
main#carrinho #carrinho-code .cart-header p{
  font-weight: bold;
  font-size: 1.2rem;
}
main#carrinho #carrinho-code .cart-items {
  list-style: none;
  padding: 0;
}

main#carrinho #carrinho-code .cart-items li {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e0e0e0;
}

main#carrinho #carrinho-code .item-info {
  display: flex;
  gap: 1.5rem;
}

main#carrinho #carrinho-code .item-info img {
  width: 100px;
  height: 150px;
  object-fit: cover;
}

main#carrinho #carrinho-code .item-details h2 {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #382C2C;
}

main#carrinho #carrinho-code .item-details p {
  color: #382C2C;
  margin: 0.25rem 0;
}

main#carrinho #carrinho-code .item-details p span {
  font-weight: bold;
}

main#carrinho #carrinho-code .quantity-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

main#carrinho #carrinho-code .quantity-controls #quantity-controls-border {
  border: 1px solid black;
  display: flex;
}

main#carrinho #carrinho-code .quantity-controls button {
  width: 40px;
  height: 40px;
  border: none;
  background: white;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

main#carrinho #carrinho-code .quantity-controls p {
  margin: 0;
  font-size: 1.1rem;
  margin: 0.5vw 1vw 0 1vw;
}

main#carrinho #carrinho-code .subtotal {
  font-weight: bold;
  color: #333;
}

main#carrinho #carrinho-code .back-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  margin: 2rem 0;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

main#carrinho #carrinho-code .cart-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

main #carrinho #carrinho-code .coupon-section {
  display: flex;
  gap: 1rem;
}

main#carrinho #carrinho-code .coupon-section input {
  flex: 1;
  padding: 0.8rem;
  margin-right: 1vw;
  width: 50%;
  border: 1px solid black;
  border-radius: 5px;

}
main#carrinho #carrinho-code .coupon-section input:focus {
    outline: none;
}
main#carrinho #carrinho-code .coupon-button {
  padding: 0.8rem 1.5rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

main#carrinho #carrinho-code .total-section {
  padding: 2rem;
  border-radius: 5px;
  border: 2px solid black;
}

main#carrinho #carrinho-code .total-section h2 {
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: bold;
}

main#carrinho #carrinho-code .total-section ul {
  list-style: none;
  padding: 0;
}

main#carrinho #carrinho-code .total-section li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
}

main#carrinho #carrinho-code .total-section li.total {
  font-weight: bold;
  color: #333;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
  margin-top: 1rem;
}

main#carrinho #carrinho-code .checkout-button {
  width: 80%;
  padding: 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  margin-left: 10%;
}

main#carrinho #carrinho-code .checkout-button:hover,
main#carrinho #carrinho-code .coupon-button:hover {
  background: #229954;
  border: none;
}

main#carrinho #carrinho-code .back-button:hover {
  background: #27ae60;
  color: white;
  border: 1px solid #229954;
}

main#carrinho #carrinho-code .quantity-controls button:hover {
  background: #27ae60;
  color: white;
}
</style> 