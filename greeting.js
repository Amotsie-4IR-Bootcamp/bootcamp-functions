const inst =
  "This functions will greet you. Enter your name in the text box and click 'Greet'";

function Greetings() {
  return {
    name: "",
    greetText: "",
    show: false,
    instructions: inst,
    greet() {
      if (this.name.trim() == "") this.greetText = "Enter your name!😒";
      else {
        this.name[0] = this.name[0].toUpperCase();
        this.greetText = `Hello, ${this.name}..😎`;
        this.name = "";
      }
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("greetings", Greetings);
});
