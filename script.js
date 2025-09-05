    let datasArray = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) : [];

    function submitData(){
        datasArray = [];
        const surname = document.getElementById('surname').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();
        const street = document.getElementById('street').value.trim();
        const houseNumber = document.getElementById('house-number').value.trim();
        console.log(surname, city, zip);

        datasArray.push(surname);
        datasArray.push(city);
        datasArray.push(zip);
        datasArray.push(street);
        datasArray.push(houseNumber);

        localStorage.setItem('datas', JSON.stringify(datasArray));
    }
    function displayData(){
        const name = document.getElementById('surname').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();
        const street = document.getElementById('street').value.trim();
        const houseNumber = document.getElementById('house-number').value.trim();

        document.getElementById('surname-field').textContent = `Név: ${name}`;
        document.getElementById('city-field').textContent = `Település: ${city}`;
        document.getElementById('zip-field').textContent = `Irányítószám: ${zip}`;
        document.getElementById('street-field').textContent = `Utca: ${street}`;
        document.getElementById('house-number-field').textContent = `Házszám: ${houseNumber}`;
    }
    window.onload = function(){
        if(localStorage.getItem('datas')){
            const datas = JSON.parse(localStorage.getItem('datas'));
            document.getElementById('surname').value = datas[0];
            document.getElementById('city').value = datas[1];
            document.getElementById('zip').value = datas[2];
            document.getElementById('street').value = datas[3];
            document.getElementById('house-number').value = datas[4];
            displayData();
        }
    }

    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        submitData();
        displayData();
    });
