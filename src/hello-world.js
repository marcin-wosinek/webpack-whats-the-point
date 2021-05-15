import { range } from "../node_modules/underscore/underscore-esm.js";

const element = document.getElementById("echo");

element.innerHTML = range(0, 10).join(", ");
