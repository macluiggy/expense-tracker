(function () {
    var name = document.getElementById('name');
    var company = document.getElementById('company');
    var price = document.getElementById('price');
    var add = document.getElementById('submit');
    var form = document.getElementById('form');
    var tbody = document.getElementById('tbody')
    var counter = 0;
    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + name.value +  '</td><td>' + company.value + '</td><td>$' + price.value + '</td>';
        tbody.appendChild(tr);
        name.value = '';
        price.value = '';
        company.value = '';
        counter++
        if (counter % 2 === 1) {
            tr.className = 'odd';
        } else {
            tr.className = 'even';
        }
    }, false)
}());