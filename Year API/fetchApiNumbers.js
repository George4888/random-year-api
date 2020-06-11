class FetchApi {
  constructor() {
    this.createTitle();
    this.createinput();
    this.setStartOnEnter();
    this.createText();
  }

  createTitle() {
    const body = document.getElementById("body");

    const title = document.createElement("h1");
    title.classList.add("main-title");
    title.innerText = "Year Facts";
    body.appendChild(title);
  }

  createinput() {
    const body = document.getElementById("body");

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "h3");
    h3.innerHTML =
      "Input a random year in the field below and you will receive a random fact about it.";
    body.appendChild(h3);

    const input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("type", "number");
    this.inputRef = input;
    body.appendChild(input);
  }

  createText() {
    const body = document.getElementById("body");

    const p = document.createElement("p");
    p.setAttribute("id", "paragraph");
    this.paVal = p;
    body.appendChild(p);
  }

  setStartOnEnter() {
    this.inputRef.addEventListener("keydown", this.handleEnter.bind(this));
  }

  handleEnter(event) {
    if (event.key === "Enter") {
      this.fetchYear();
      this.inputRef.value = "";
    }
  }

  fetchYear() {
    const year = this.inputRef.value;
    fetch(`http://numbersapi.com/${year}/year`)
      .then(response => response.text())
      .then(responseText => {
        this.paVal.innerHTML = responseText;
      });
  }
}
