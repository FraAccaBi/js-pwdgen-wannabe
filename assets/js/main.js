//Chiedi all’utente il suo nome,
let nome = prompt('Come ti chiami?')
console.log(nome);

//poi chiedi il suo cognome,
let cognome = prompt('Qual è il tuo cognome?')
console.log(cognome);

//poi chiedi il suo colore preferito
let colore_prefe = prompt('Qual è il tuo colore preferito?')
console.log(colore_prefe);

//Infine scrivi sulla pagina il risultato in questo formato : nomecognomecolorepreferito22

let password = nome + cognome + colore_prefe;
//log test 1
console.log(`${password}22`); 
//log test 2
console.log(`${nome} ${cognome} ${colore_prefe} 22`); 

document.getElementById('psw').innerHTML = password + 22


