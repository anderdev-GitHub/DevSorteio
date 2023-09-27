function geradorNumero() {

    const input1 = Math.ceil(document.querySelector('.input1').value)
    const input2 = Math.floor(document.querySelector('.input2').value)

    const result = Math.floor(Math.random() * (input1 - input2 + 1)) + input2;

    alert(result)
}