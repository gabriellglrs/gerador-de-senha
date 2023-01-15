let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%+`^!";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.addEventListener("input", function () {
  sizePassword.innerHTML = this.value;
});

function generatePassword() {
  let pass = "";
  // use do-while to check only once if the condition `i < sliderElement.value` is `true` or `false`
  let i = 0;
  do {
    pass += charset.charAt(Math.floor(Math.random() * charset.length));
    i++;
  } while (i < sliderElement.value);

  console.log(pass);
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
