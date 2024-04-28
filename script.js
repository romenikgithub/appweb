// script.js
const itemForm = document.getElementById('item-form');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');

itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = itemNameInput.value;
    const itemQuantity = parseInt(itemQuantityInput.value);

    // Aqui você pode salvar os dados em algum lugar (por exemplo, localStorage ou servidor)
    console.log(`Item adicionado: ${itemName} (${itemQuantity} unidades)`);
    // Limpe os campos do formulário
    itemNameInput.value = '';
    itemQuantityInput.value = '';
});