document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const city = document.getElementById('city').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const street = document.getElementById('street').value.trim();
    const houseNumber = document.getElementById('house-number').value.trim();

    document.getElementById('output');
    output.innerHTML = ''; 

    localStorage.setItem()
});
