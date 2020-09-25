// // MEU CÓDIGO
// function login() {
//   var nome = document.querySelector("input");

//   if ((input = input.value)) {
//     localStorage.setItem("input", input.value);
//   } else {
//     input.insertAdjacentHTML("beforeend", `${nome.value}`);
//   }
// }

// btnAdd.addEventListener("click", login);

//LOGIN
function login() {
  var nome = document.querySelector("#inputNome").value;
  // nome =  nome.value
  if (nome === "") {
    return alert("Digite um nome primeiro");
  }
  sessionStorage.setItem("nomeUsuario", nome);
  window.location.href = "/feed.html";
}

var btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", login);
