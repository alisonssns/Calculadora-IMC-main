const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    // Lógica para descrever o resultado do IMC
    if (bmi < 18.5) {
        description = 'Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Peso normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Você está sobrepeso.';
    } else {
        description = 'Obesidade.';
    }

    value.textContent = bmi;
    document.getElementById('description').querySelector('span').textContent = description;

    document.getElementById('infos').classList.remove('hidden');
});
