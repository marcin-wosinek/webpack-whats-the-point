import range from "../node_modules/underscore/modules/range.js";

const element = document.getElementById("echo");

element.innerHTML = range(0, 10).join(", ");
