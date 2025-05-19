<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const toggleForm = () => {
    isLogin.value = !isLogin.value
}

</script>

<template>
    <main>
        <section>
            <div class="login" v-if="isLogin">
                <h1>Entre com sua conta</h1>
                <p>Preencha os campos abaixo para entrar na sua conta</p>
                <form>
                    <div class="div-input-name">
                        <input type="text" placeholder="Nome">
                        <input type="text" placeholder="Sobrenome">
                    </div>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button type="submit">Login</button>
                </form>
            </div>
            <div class="login" v-else>
                <h1>Crie sua conta</h1>
                <p>Preencha os campos abaixo para criar sua conta</p>
                <form>
                    <input type="text" placeholder="Nome">
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button type="submit" @click="toggleForm">Criar conta</button>
                </form>
            </div>
        </section>
    </main>
</template>

<style scoped>
main section {
    background-color: white;
}

main section {
    padding: 20vw 25vw 5VW 25vw;
}

main section h1 {
    color: #008B8B;
    font-size: 2.5vw;
    font-weight: bold;
    line-height: 1;
    text-align: center;
}

main section p {
    font-size: 0.8rem;
    margin-bottom: 1.5vw;
    color: #4F4C57;
    padding-bottom: 2vw;
    border-bottom: 1px #008B8B solid;
    text-align: center;
}

main section form {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

main section form input {
    padding: 0.5vw 1vw;
    border-radius: 4px;
    background-color: #F1F1F1;
    border: 1px #4F4C57 solid;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

main section form input:focus {
    outline: none;
}


main section form button {
    background-color: #008B8B;
    color: white;
    font-size: 1.2vw;
    font-weight: bold;
    width: 50%;
    margin: 2vw auto 0 auto;
    padding: 1vw 2vw;
    border-radius: 4px;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s ease;
}

main section form button:hover {
    background-color: #003f3f;
    border: 2px solid #003f3f;
}
</style>