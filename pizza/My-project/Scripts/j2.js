const fs = require('fs');
fs.readFile('info.txt', 'utf8', (err, data) => {
if(err) {
console.error(err);
return;
}
console.log(data);
}); 
fs.appendFile('info.txt', "",'utf8', (err) => {
if(err) {
console.error(err);
return;
}
}); 



const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentNode.parentNode.remove();
    updateTotal();
  });
});

const quantityInputs = document.querySelectorAll('input[type="number"]');
quantityInputs.forEach(input => {
  input.addEventListener('change', () => {
    updateTotal();
  });
});

function updateTotal() {
    const rows = document.querySelectorAll('tbody tr');
    let total = 0;
    rows.forEach(row => {
      const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.slice(1));
      const quantity = parseInt(row.querySelector('input[type="number"]').value);
      const rowTotal = price * quantity;
      row.querySelector('td:nth-child(4)').textContent = '$' + rowTotal.toFixed(2);
      total += rowTotal;
    });
    document.querySelector('tfoot td:nth-child(4)').textContent = '$' + total.toFixed(2);
  }
  
  