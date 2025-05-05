<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isLogin = ref(true)

const toggleForm = () => {
    isLogin.value = !isLogin.value
}

</script>

<template>
    <main>
        <section>
            <div class="login" v-if="isLogin">
                <div class="register-container">
                    <h2>Ainda não tem uma conta?</h2>
                    <p>Crie uma conta agora mesmo</p>
                    <button @click="toggleForm">Criar conta</button>
                    <RouterLink to="/" class="back-button">
                        <span>←</span> Voltar para loja
                    </RouterLink>
                </div>
                <div class="login-container">
                    <h1>Entre com sua conta</h1>
                    <p>Preencha os campos abaixo para entrar na sua conta</p>
                    <form>
                        <input type="text" placeholder="Nome">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            <div class="login" v-else>
                <div class="register-container">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Acesse sua conta agora mesmo</p>
                    <button @click="toggleForm">Entrar</button>
                    <RouterLink to="/" class="back-button">
                        <span>←</span> Voltar para loja
                    </RouterLink>
                </div>
                <div class="login-container">
                    <h1>Crie sua conta</h1>
                    <p>Preencha os campos abaixo para criar sua conta</p>
                    <form>
                        <input type="text" placeholder="Nome">
                        <input type="email" placeholder="Email">
                        <input type="password" placeholder="Password">
                        <button type="submit" @click="toggleForm">Criar conta</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main section {
    background-color: white;
    padding-top: 10vw;
}

main section .login {
    display: flex;
}

main section .register-container {
    width: 35%;
    height: 100%;
    background-color: #008B8B;
    padding: 10vw 5vw 0 5vw;
}

main section .register-container h2 {
    color: white;
    font-size: 2.5vw;
    font-weight: bold;
    line-height: 1;
}

main section .register-container p {
    color: white;
    font-size: 1.2vw;
    margin: 2vw 0;
}

main section .register-container button {
    background-color: #008B8B;
    color: white;
    font-size: 1.2vw;
    font-weight: bold;
    width: 100%;
    padding: 1vw 2vw;
    border-radius: 4px;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s ease;
}

main section .register-container button:hover {
    background-color: #003f3f;
    border: 2px solid #003f3f;
}

main section .login-container {
    width: 65%;
    padding: 5vw;
    text-align: center;
}

main section .login-container h1 {
    font-size: 2.5vw;
    font-weight: bold;
    line-height: 1;
    color: #008B8B;
}

main section .login-container p {
    font-size: 0.8rem;
    margin-bottom: 2vw;
    color: #4F4C57;
}

main section .login-container form {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

main section .login-container form input {
    padding: 1vw 2vw;
    border-radius: 4px;
    background-color: #F1F1F1;
    border: none;
    font-size: 1.2vw;
    transition: all 0.3s ease;
}

main section .login-container form input:focus {
    outline: none;
}

main section .login-container form button {
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

main section .login-container form button:hover {
    background-color: #003f3f;
    border: 2px solid #003f3f;
}

.back-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background-color: #008B8B;
    color: white;
    text-decoration: none;
    border-radius: 2px;
    margin-top: 1rem;
    transition: all ease-in-out .5s;
    border: none;
    margin-top: 10vw;
}

.back-button span {
    transition: all ease-in-out .5s;
    padding-left: 1vw;
}

.back-button:hover span {
    padding-left: 0;
}
</style>