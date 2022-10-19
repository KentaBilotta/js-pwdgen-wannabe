alert("Benvenuto, ti prego di condividere le seguenti informazioni che ti andrò a chiedere");

let nome = prompt("Scrivi il tuo nome");
document.getElementById("nome").innerHTML = "Il tuo nome è: " + nome;

let cognome = prompt("Scrivi il tuo cognome");
document.getElementById("cognome").innerHTML = "Il tuo cognome è: " + cognome;

let colorePreferito = prompt("Scrivi il tuo colore preferito");
document.getElementById("colore-preferito").innerHTML = "Il tuo colore preferito è: " + colorePreferito;

let password=nome+cognome+colorePreferito+22;
document.getElementById("password").innerHTML = password;