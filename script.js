
    const ul = document.querySelector('ul');
    const surname = document.getElementById('surname').value.trim();
    const city = document.getElementById('city').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const street = document.getElementById('street').value.trim();
    const houseNumber = document.getElementById('house-number').value.trim();
    console.log(surname, city, zip)

    let datasArray = localStorage.getItem('datas') ? JSON.parse(localStorage.getItem('datas')) : [];

    datasArray.forEach(liMaker);

    function submitData(){
        datasArray.push(surname);
        datasArray.push(city);
        datasArray.push(zip);
        datasArray.push(street);
        datasArray.push(houseNumber);

        localStorage.setItem('datas', JSON.stringify(datasArray));


        // input.surname = '';
        // input.city = '';
        // input.zip = '';
        // input.street = '';
        // input.houseNumber = '';
    }
    function liMaker(text){
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }