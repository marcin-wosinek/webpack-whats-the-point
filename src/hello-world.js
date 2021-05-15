import { range } from "underscore";

const element = document.getElementById("echo");

element.innerHTML = range(0, 10).join(", ");
