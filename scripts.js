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
  var direction, isSwitching, toSwitch, x, y, count = 0,
    i;
  // Set the sorting direction
  direction = "asc";
  isSwitching = true;
  while (isSwitching) {
    /* isSwitching determines whether any switching is being done.
    Initially assume that no switching has to be done */
    isSwitching = false;
    rows = table.getElementsByTagName("TR");
    // Loop through all row elements and compare successive ones
    for (i = 1; i < (rows.length - 1); i++) {
      /* toSwitch determines whether elements should be switched or not.
      Initially assume that no switching is to be made*/
      toSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check whether to switch rows based on direction
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
    // If toSwitch has been set, then swap the rows
    if (toSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
      // count is incremented each time a switch has been made
      count++;
    } else {
      /* If count is 0 and direction is 'asc', run the loop again by
      changing direction to 'desc' */
      if (count == 0 && direction == "asc") {
        direction = "desc";
        isSwitching = true;
      }
    }
  }
}

sliderCount = 1;

function changeSliderImage(sliderDir) {
  if(sliderDir=="left")
    sliderCount -= 1;
  else
    sliderCount += 1;
  if (sliderCount>7 && sliderDir=="right")
    sliderCount = 1;
  else if (sliderCount<1 && sliderDir=="left")
    sliderCount = 7;
  document.getElementById('myimage').src = "./images/image_"+String(sliderCount)+".jpg";
}
