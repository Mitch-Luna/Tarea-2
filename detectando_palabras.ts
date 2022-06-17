function espalindromo(palabra: string) {
    let array = palabra.split("");
    let reverse = array.reverse();

    return palabra == reverse.join("") ? palabra + " si es palindromo " : palabra + " No es palindromo"
}

console.log(espalindromo("rayar"))