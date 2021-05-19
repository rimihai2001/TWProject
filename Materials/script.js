var array = [
  {
    title: "ArtMania",
    duration: "2 Days",
    location: "Sibiu",
    rating: 5,
    img_link:
      "https://artmania.ro/events/wp-content/uploads/Logo_ARTmania-Festival.jpg",
  },
  {
    title: "Metal Gates Festival",
    duration: "2 Days",
    location: "Bucharest",
    rating: 4,
    img_link:
      "https://static.iabilet.ro/img/auto_resized/db/event/00/cd/3d/00000120601-fb59-245x0-w-166ff708.jpg",
  },
  {
    title: "Posada Rock",
    duration: "2 Days",
    location: "Campulung",
    rating: 5,
    img_link:
      "https://www.posadarock.com/_design/images/logo-site-std-2020.png",
  },
  {
    title: "Top T Rock Fest",
    duration: "2 Days",
    location: "Buzau",
    rating: 3,
    img_link:
      "https://www.maximumrock.ro/wp-content/uploads/2018/10/Top-T-Bluzau-2018-600x381.jpg",
  },
  {
    title: "Rock Metal Nation Fest",
    duration: "2 Days",
    location: "Bucharest",
    rating: 4.5,
    img_link:
      "https://www.vinsieu.ro/uploads/event/large/rock-metal-nation-fest-2-i158077.jpg",
  },
  {
    title: "Slowride Transalpina Fest",
    duration: "3 Days",
    location: "Baia de Fier",
    rating: 3.5,
    img_link:
      "https://www.maximumrock.ro/wp-content/uploads/2019/03/50223946_2678944692147681_1638774136480202752_n.jpg",
  },
  {
    title: "Way Too Far Rock Festival",
    duration: "3 Days",
    location: "Bistrita",
    rating: 0,
    img_link:
      "https://static.infomusic.ro/media/2020/07/festival-way-too-far-bistrita-2020.jpg",
  },
  {
    title: "/FORM Days",
    duration: "2 Days",
    location: "Gilau",
    rating: 0,
    img_link:
      "https://www.zilesinopti.ro/media/2399347625e60e3d50c0451.70413329.jpg/resize?w=750",
  },
];

var countSubmit = 0;
let list;
let formName;
let formUrl;
let addButton;
let updateButton;

//About Us
function clickAboutUs() {
  console.log("Home");
  document.getElementById("list").innerHTML = "";
  document.getElementById("list1").innerHTML = "";

  const new_p = document.createElement("p");
  new_p.innerText = "Welcome to our page!";
  const new_p2 = document.createElement("p");
  new_p2.innerText =
    " The website Festivals Monsters Romania was created by Rock Monsters Romania to promote all the Romanian Rock/Metal festivals, especially after the hard period they had during the COVID-19 Pandemic.";
  const new_p3 = document.createElement("p");
  new_p3.innerText =
    "Rock Monsters Romania is an online Rock/Metal publication founded in 2016 by Radu Mihai that aims to promote the best Romanian underground bands.";
  document.getElementById("list").appendChild(new_p);
  document.getElementById("list").appendChild(new_p2);
  document.getElementById("list").appendChild(new_p3);
}

//Festivals List
function clickListFestivals() {
  console.log("List of Festivals");
  document.getElementById("list").innerHTML = "";
  document.getElementById("list1").innerHTML = "";

  for (festival = 0; festival < array.length; festival++) {
    const new_p = document.createElement("p");
    new_p.innerText = array[festival].title;
    const new_p2 = document.createElement("p");
    new_p2.innerText = array[festival].duration;
    const new_p3 = document.createElement("p");
    new_p3.innerText = array[festival].location;
    const new_p4 = document.createElement("p");
    if (array[festival].rating > 0) {
      new_p4.innerText = "RM Rating: " + array[festival].rating + "/5";
    } else {
      new_p4.innerText = "RM Rating: UNKNOWN";
    }
    const imagine = document.createElement("img");
    const hr_line = document.createElement("hr");
    imagine.src = array[festival].img_link;
    imagine.classList.add("resize");
    document.getElementById("list").appendChild(new_p);
    document.getElementById("list").appendChild(new_p2);
    document.getElementById("list").appendChild(new_p3);
    document.getElementById("list").appendChild(new_p4);
    document.getElementById("list").appendChild(imagine);
    document.getElementById("list").appendChild(hr_line);
  }
}

//Bingo List
function clickBingoList() {
  console.log("Bingo list");
  document.getElementById("list").innerHTML = "";
  document.getElementById("list1").innerHTML = "";

  const br_elem3 = document.createElement("br");
  document.getElementById("list1").appendChild(br_elem3);

  const br_elem4 = document.createElement("br");
  document.getElementById("list1").appendChild(br_elem4);

  var input1_bingo = document.createElement("INPUT");
  input1_bingo.setAttribute("type", "text");
  input1_bingo.setAttribute("name", "name");
  input1_bingo.setAttribute("placeholder", "Bingo Item Resume");
  input1_bingo.setAttribute("id", "formName");
  input1_bingo.classList.add("in-class");
  document.getElementById("list1").appendChild(input1_bingo);

  var input2_bingo = document.createElement("INPUT");
  input2_bingo.setAttribute("type", "text");
  input2_bingo.setAttribute("name", "url");
  input2_bingo.setAttribute("placeholder", "Full Bingo Item");
  input2_bingo.setAttribute("id", "formUrl");
  input2_bingo.classList.add("in-class");
  document.getElementById("list1").appendChild(input2_bingo);

  var add_bingo = document.createElement("input");
  add_bingo.setAttribute("type", "button");
  add_bingo.setAttribute("value", "ADD");
  add_bingo.setAttribute("id", "addButton");
  add_bingo.classList.add("in-class");
  add_bingo.addEventListener("click", postBingo);
  document.getElementById("list1").appendChild(add_bingo);

  var update_bingo = document.createElement("input");
  update_bingo.setAttribute("type", "button");
  update_bingo.setAttribute("value", "UPDATE");
  update_bingo.setAttribute("id", "updateButton");
  document.getElementById("list1").appendChild(update_bingo);
  
  list = document.getElementById("list");
  formName = document.getElementById("formName");
  formUrl = document.getElementById("formUrl");
  addButton = document.getElementById("addButton");
  updateButton = document.getElementById("updateButton");

  getBingos();
}

//Contact
function clickContact() {
  console.log("Contact");
  countSubmit = 0;
  document.getElementById("list").innerHTML = "";
  document.getElementById("list1").innerHTML = "";

  const new_p = document.createElement("p");
  new_p.innerText = "Contact us now!";
  document.getElementById("list").appendChild(new_p);

  const new_ul = document.createElement("ul");
  const li_1 = document.createElement("li");
  li_1.innerText = "Facebook: Rock Monsters Romania";
  const li_2 = document.createElement("li");
  li_2.innerText = "Instagram: rock.monsters";
  const li_3 = document.createElement("li");
  li_3.innerText = "E-mail: rockmonstersromania@gmail.com";
  document.getElementById("list").appendChild(new_ul);
  document.getElementById("list").appendChild(li_1);
  document.getElementById("list").appendChild(li_2);
  document.getElementById("list").appendChild(li_3);

  const br_elem = document.createElement("br");
  document.getElementById("list").appendChild(br_elem);

  const br_elem2 = document.createElement("br");
  document.getElementById("list").appendChild(br_elem2);

  var input1 = document.createElement("INPUT");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "Full name");
  input1.setAttribute("id", "name-input");
  input1.classList.add("in-class");
  document.getElementById("list").appendChild(input1);

  var input2 = document.createElement("INPUT");
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "E-mail");
  input2.setAttribute("id", "mail-input");
  input2.classList.add("in-class");
  document.getElementById("list").appendChild(input2);

  var hrline = document.createElement("hr");
  document.getElementById("list").appendChild(hrline);

  var input3 = document.createElement("INPUT");
  input3.setAttribute("type", "text");
  input3.setAttribute("placeholder", "Your message");
  input3.setAttribute("id", "desc-input");
  document.getElementById("list").appendChild(input3);

  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.setAttribute("id", "submit-btn");
  document.getElementById("list").appendChild(s);
  s.addEventListener("click", onSubmit);
}

//Submit Form Function Contact
function onSubmit() {
  const new_submit = document.createElement("p");
  new_submit.setAttribute("id", "submit-p");
  if (countSubmit > 0) {
    document.getElementById("submit-p").innerHTML = "";
  }
  var inputname = document.getElementById("name-input").value;
  localStorage.setItem("name", inputname);
  document.getElementById("name-input").value = "";
  document.getElementById("mail-input").value = "";
  document.getElementById("desc-input").value = "";
  var name_storage = localStorage.getItem("name");
  if (name_storage !== " ") {
    new_submit.innerText = "Thank you for your message, " + name_storage + "!";
  } else {
    ("Thank you for your message, ANONYMUS!");
  }

  document.getElementById("list").appendChild(new_submit);
  countSubmit++;
  console.log(countSubmit);
}

function getBingos() {
  fetch("http://localhost:3000/bingos").then(function (response) {
    // Trasform server response to get the bingo list
    response.json().then(function (bingos) {
      appendBingosToDOM(bingos);
    });
  });
}

// post bingo list
function postBingo() {
  // creat post object
  const postObject = {
    name: formName.value,
    description: formUrl.value,
  };
  // post bingo
  fetch("http://localhost:3000/bingos", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postObject),
  }).then(function () {
    // Get the new bingo list
    getBingos();
    // Reset Form
    resetForm();
  });
}

// delete bingo
function deleteBingo(id) {
  // delete bingo
  fetch(`http://localhost:3000/bingos/${id}`, {
    method: "DELETE",
  }).then(function () {
    // Get the new bingo list
    getBingos();
  });
}

// update bingo
function updateBingo(id) {
  // creat put object
  const putObject = {
    name: formName.value,
    description: formUrl.value,
  };
  // update bingo
  fetch(`http://localhost:3000/bingos/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(putObject),
  }).then(function () {
    // Get the new bingo list
    getBingos();

    // change button event from update to add
    addButton.disabled = false;

    // remove all event from update button
    clearUpdateButtonEvents();

    // Reset Form
    resetForm();
  });
}

// copy edited bingo information to form and add event listener on update button
function editBingo(bingo) {
  // copy bingo information to form
  formName.value = bingo.name;
  formUrl.value = bingo.description;

  // disable add button
  addButton.disabled = true;

  // clear all events update button events
  clearUpdateButtonEvents();

  // enable and add event on update button
  updateButton.disabled = false;
  updateButton.addEventListener("click", function () {
    updateBingo(bingo.id);
  });
}

// Create and append desc and name DOM tags
function appendBingosToDOM(bingos) {
  //remove bingo list if exist
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  // create and append tags
  for (let i = 0; i < bingos.length; i++) {
    // create name obj
    let name = document.createElement("span");
    name.innerText = bingos[i].name + " " + " " + " " + " " + " ";

    // create image obj
    let img = document.createElement("p");
    img.innerText = bingos[i].description;

    const hrk = document.createElement("hr");

    // create button and event for edit and delete
    let editButton = document.createElement("button");
    // add event on btn and pass bingo id
    editButton.addEventListener("click", function () {
      editBingo(bingos[i]);
    });
    editButton.innerText = "Edit";
    let deleteButton = document.createElement("button");
    // add event on btn and pass bingo object
    deleteButton.addEventListener("click", function () {
      deleteBingo(bingos[i].id);
    });
    deleteButton.innerText = "Delete";
    // create a container for desc and name
    let container = document.createElement("div");
    // append elements to container
    container.appendChild(name);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    container.appendChild(img);
    container.appendChild(hrk);

    // append container to DOM (list div)
    list.appendChild(container);
  }
}

// reset form
function resetForm() {
  formName.value = "";
  formUrl.value = "";
}
//  remove Update Button to clear events
function clearUpdateButtonEvents() {
  let newUpdateButton = updateButton.cloneNode(true);
  updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
  updateButton = document.getElementById("updateButton");
}

