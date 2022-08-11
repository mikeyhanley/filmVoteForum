function checkForm(e) {

	var valid = true;

	document.getElementById("nameField").parentNode.removeAttribute("class");
	if (document.getElementById("nameField").value == "") {
		document.getElementById("nameField").parentNode.setAttribute("class", "error");
		document.getElementById("nameError").style.display = "inline-block";
		valid = false;
	}
	else
		document.getElementById("nameError").style.display = "none";

	document.getElementById("emailField").parentNode.removeAttribute("class");
	if (document.getElementById("emailField").value == "") {
		document.getElementById("emailField").parentNode.setAttribute("class", "error");
		document.getElementById("emailErrorEmpty").style.display = "inline-block";
		valid = false;
	}
	else
		document.getElementById("emailErrorEmpty").style.display = "none";

	document.getElementById("passField").parentNode.removeAttribute("class");
	if (document.getElementById("passField").value == "") {
		document.getElementById("passField").parentNode.setAttribute("class", "error");
		document.getElementById("passErrorEmpty").style.display = "inline-block";
		valid = false;
	}
	else
		document.getElementById("passErrorEmpty").style.display = "none";

	var pass = document.getElementById("passField").value;
	if (pass.length < 4) {
		document.getElementById("passField").parentNode.setAttribute("class", "error");
		document.getElementById("passErrorInvalid").style.display = "inline-block";
		if (pass.length == 0)
			document.getElementById("passErrorInvalid").style.display = "none";
		valid = false;
	}
	else
		document.getElementById("passErrorInvalid").style.display = "none";

	var emailTextBox = document.getElementById("emailField");
	var email = emailTextBox.value;
	var emailRegEx = /.+\@.+\..+/;
	if (!emailRegEx.test(email)) {
		document.getElementById("emailField").parentNode.setAttribute("class", "error");
		if (email == "")
			document.getElementById("emailErrorInvalid").style.display = "none";
		else
			document.getElementById("emailErrorInvalid").style.display = "inline-block";
		valid = false;
	}
	else
		document.getElementById("emailErrorInvalid").style.display = "none";

	var atLeastOneChecked = false;
	for (var i = 0; i < films.length; i++) {
		var check = "check" + i
		if (document.getElementById(check).checked == true)
			atLeastOneChecked = true;
	}
	if (!atLeastOneChecked) {
		document.getElementById("checkEmpty").style.display = "inline-block";
		valid = false;
	}
	else
		document.getElementById("checkEmpty").style.display = "none";


	if (!valid)
		e.preventDefault();

}

window.addEventListener('load', init);


function init() {
	document.getElementById("myform").addEventListener('submit', checkForm);
}

var films = [
	{ poster: "nosferatu1922.jpg", name: "Nosferatu (1922)" },
	{ poster: "dracula1931.jpg", name: "Dracula (1931)" },
	{ poster: "dracula1958.jpg", name: "Dracula (1958)" },
	{ poster: "dracula1970.jpg", name: "El Conde Dracula (1970)" },
	{ poster: "dracula1979.jpg", name: "Dracula (1979)" },
	{ poster: "nosferatu1979.jpg", name: "Nosferatu (1979)" },
	{ poster: "dracula1992.jpg", name: "Bram Stoker's Dracula (1992)" },
	{ poster: "dracula2000.jpg", name: "Dracula 2000 (2000)" },
	{ poster: "dracula2012.jpg", name: "Dracula 3D (2012)" },

];

window.addEventListener('load', addimage);

function addimage() {

	for (var i = 0; i < films.length; i++) {
		var div = document.createElement("div");
		var poster = "poster" + i;
		div.setAttribute("id", poster)
		var img = document.createElement("img");
		div.appendChild(img);
		var cb = document.createElement("input");
		cb.setAttribute("type", "checkbox");
		cb.setAttribute("onchange", function () { checkChangeCss(); });

		var picName = "pic" + (1 + i);
		cb.setAttribute("name", picName);
		var checkID = "check" + i;
		cb.setAttribute("id", checkID);
		var tn = document.createTextNode(films[i].name);
		div.appendChild(tn);

		div.appendChild(cb);
		img.src = "images/" + films[i].poster;
		img.id = "poster";
		img.onclick = function () {
			this.parentNode.getElementsByTagName("input")[0].checked ^= true;
			checkChangeCss();
		}
		var outerdiv = document.getElementById("outer");
		outerdiv.appendChild(div);

	}
	function checkChangeCss() {
		for (var i = 0; i < films.length; i++) {
			var check = "check" + (i);
			var posterName = "poster" + i;
			var poster = document.getElementById(posterName);


			if (document.getElementById(check).checked == true)
				poster.style.border = "5px solid #ffaf54";
			else
				poster.style.border = "5px solid white";

		}

	}
}
