let ele = document.getElementById("adding");
let k = 0;
ele.addEventListener("click", function () {
	var first = document.getElementById("adding");
	var second = document.getElementById("second");
	first.style.display = "none";
	second.style.display = "flex";
	entering();
});

$("#incomplete").on("click", ".second", function () {
    var specificRadio = $(this).find('input[type="radio"]');
    specificRadio[0].checked = true;
    var out = document.getElementById("count");

    // Create a single clone of the entire .second div
    var clone = this.cloneNode(true);

    // Set properties on the clone
    clone.className = "second";

    out.appendChild(clone);
	$(this).remove();
});

$("#count").on("click", ".second", function () {
    var specificRadio = $(this).find('input[type="radio"]');
    specificRadio[0].checked = false;
    var out = document.getElementById("incomplete");

    // Create a single clone of the entire .second div
    var clone = this.cloneNode(true);

    // Set properties on the clone
    clone.className = "second";

    out.appendChild(clone);
	$(this).remove();
});


function closing() {
	var first = document.getElementById("adding");
	var second = document.getElementById("second");
	first.style.display = "flex";
	second.style.display = "none";
}

function entering() {
	input.addEventListener("keydown", function (event) {
		if (input.value !== "" && event.key === "Enter") {
			k = k + 1;
			let ids = "task" + k;
			var out = document.getElementById("incomplete");
			var div = document.createElement("div");
			div.className = "second";
			div.setAttribute("id", ids);
			var radio = document.createElement("input");
			radio.type = "radio";
			radio.className = "radio-custom";
			var text = document.createElement("input");
			text.type = "text";
			text.readOnly = true;
			text.className = "text-custom";
			text.value = input.value;
			div.appendChild(radio);
			div.appendChild(text);

			out.appendChild(div);
			input.value = "";
			closing();
		}
		if (input.value === "" && event.key == "Enter") {
			closing();
		}
	});
}
