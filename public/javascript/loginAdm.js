import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1f7kB01rCSsQ3BKm60hR5itzdomaZFsk",
    authDomain: "agenda-1881a.firebaseapp.com",
    projectId: "agenda-1881a",
    storageBucket: "agenda-1881a.appspot.com",
    messagingSenderId: "1094390815503",
    appId: "1:1094390815503:web:84a34c983510c89ea07c7a",
    measurementId: "G-HXEGCEG53L"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para autenticar o usuário
document.getElementById("login-btn").addEventListener("click", login);

async function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email && senha) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário logado com sucesso:", user);
      Swal.fire("Login bem-sucedido!", "Bem-vindo ao E-Ecommerce!", "success").then(() => {
        // Redireciona após o login bem-sucedido
        window.location.replace("/admin"); // Substitua com a URL desejada
      });
    } catch (error) {
      console.error("Erro de login:", error);
      Swal.fire("Erro de login", "Por favor, verifique seu e-mail ou senha.", "error");
    }
  } else {
    Swal.fire("Campos vazios", "Preencha o e-mail e a senha para continuar.", "warning");
  }
}
