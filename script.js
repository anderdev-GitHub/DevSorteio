const customAlert = document.getElementById('custom-alert');
const alertMessage = document.getElementById('alert-message');
const closeAlert = document.getElementById('close-alert');

const showCustomAlert = (message) => {
    alertMessage.innerText = message;
    customAlert.style.display = 'block';
};

closeAlert.addEventListener('click', () => {
    customAlert.style.display = 'none';
});

const geradorNumero = () => {
    const input1 = Math.ceil(document.querySelector('.input1').value);
    const input2 = Math.floor(document.querySelector('.input2').value);

    const result = Math.floor(Math.random() * (input1 - input2 + 1)) + input2;

    showCustomAlert(result);

    if (result === 0) {
        showCustomAlert("Escolha os números");
        customAlert.style.backgroundImage = "url('./assets/background-alert-nao-dedo.gif')";
        return;
    } else { 
        customAlert.style.backgroundImage = "url('./assets/background-numero-sorteado.gif')";
    }
}