document.addEventListener('DOMContentLoaded', function() {
    let buttonCardNumber = document.querySelector('.buttonCardNumber');
    let cardNumberInput = document.querySelector('.cardNumber');
    let textCardNumber = document.querySelector('.textCardNumber');
    let textCustomerName = document.querySelector('.textCustomerName');
    let textExpEnd = document.querySelector('.textExpEnd');
    let customerNameInput = document.querySelector('.customerName');
    let expEndInput = document.querySelector('.expEnd');

    buttonCardNumber.addEventListener('click', function() {
        // Генеруємо випадковий номер картки з 16-ма рандомними числами
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += Math.floor(Math.random() * 10); // Генеруємо випадкове число від 0 до 9
            if ((i + 1) % 4 === 0 && i !== 15) {
                cardNumber += ' '; // Додаємо пробіл після кожних 4-х цифр, крім останньої
            }
        }
        
        // Отримуємо значення полів з інформацією
        let customerName = customerNameInput.value;
        let expEnd = expEndInput.value;

        // Відображаємо номер картки та іншу інформацію
        textCardNumber.textContent = cardNumber;
        textCustomerName.textContent = customerName;
        textExpEnd.textContent = expEnd;
        
        // Заповнюємо поле вводу номеру картки
        cardNumberInput.value = cardNumber;
    });
});
