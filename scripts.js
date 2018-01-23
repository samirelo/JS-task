console.log('hahah');
var table;

function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
         data.forEach((user) => {
  table = document.getElementById('table');
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

function sortTable() {
  table = document.getElementById("table");
  var direction, isSwitching, toSwitch, x, y, count = 0, i;
  direction = "asc";
  isSwitching = true;
  while (isSwitching) {
    isSwitching = false;
    rows = table.getElementsByTagName("TR");
    for(i = 1; i < (rows.length - 1); i++) {
      toSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          toSwitch = true
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        toSwitch = true;
        break;
        }
      }
    }
    if (toSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
      count ++;
    } else {
      if (count == 0 && direction == "asc") {
      direction = "desc";
      isSwitching = true;
      }
    }
  }
}
