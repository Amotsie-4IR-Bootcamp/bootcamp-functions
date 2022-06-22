const inst_transport =
  "Check the transport fee apllicable by selcting the time of day for your shift";
function TransportFee() {
  return {
    morning: 20,
    afternoon: 10,
    night: "free",
    show: false,
    instructions: inst_transport,
    message: "",
    displayFee(shift) {
      switch (shift) {
        case "Morning": {
          this.message = `Your fee is: R${this.morning}`;
          break;
        }
        case "Afternoon": {
          this.message = `Your fee is: R${this.afternoon}`;
          break;
        }
        case "Night": {
          this.message = `Night shift transport is ${this.night}`;
          break;
        }
      }
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("transport", TransportFee);
});
