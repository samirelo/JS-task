console.log('hahah');

function getData() {
   fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => { return res.json() })
            .then((data) => {
             data.forEach((user) => {
		    var table = document.getElementById('table');
		    var row = table.insertRow(-1);
		    var cell_id = row.insertCell(0);
		    var cell_name = row.insertCell(1);
		    var cell_username = row.insertCell(2);
        var cell_email = row.insertCell(3);
		    cell_id.innerHTML = user.id;
		    cell_name.innerHTML = user.name;
		    cell_username.innerHTML = user.username;
		    cell_email.innerHTML = user.email;
        });
    })
  }
