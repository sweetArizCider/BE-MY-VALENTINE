import { returnNoCounter } from "../App";

function changeBackground() {
  const body = document.querySelector("body");
  if (noCounter > 19) {
    body?.classList.add("backgroundChange");
  } else {
    body?.classList.remove("backgroundChange");
  }
};

export { changeBackground };