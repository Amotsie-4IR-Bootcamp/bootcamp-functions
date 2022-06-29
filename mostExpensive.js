const inst_expensive =
  "Create a list of fruits with quantities and use the program to find items over a certain value.";
function MostExpesive() {
  return {
    show: false,
    instructions: inst_expensive,
    message: "",
    myList: [],
    item: "",
    price: "",
    limit: 10,
    counter() {
      return this.myList.length;
    },
    insertItem() {
      let p = parseInt(this.price);
      let item = this.item;
      if (!p || !item) {
        this.message = "poupulate both item and Qty";
      } else {
        this.myList.push({ item: item, qty: p });
        this.message = "Item Added";
        setTimeout(() => {
          this.message = "";
        }, 2000);
        this.item = "";
        this.price = "";
      }
    },

    findItems() {
      let res = findItemsOver(this.myList, this.limit);
      if (typeof res == "string") {
        this.message = res;
        return;
      }
      let out = "";
      for (let element of res) {
        out += `${element.item}: ${element.qty}<br />`;
      }
      this.message = out;
    },
  };
}

function findItemsOver(itemList, threshold = 20) {
  const results = [];

  for (let i = 0; i < itemList.length; i++) {
    let item = itemList[i];
    if (item.qty >= threshold) {
      results.push(item);
    }
  }
  if (results.length == 0) return `No items with qty over ${threshold}`;
  return results;
}

function checkIsert(item, price) {}

document.addEventListener("alpine:init", () => {
  Alpine.data("mostExpensive", MostExpesive);
});
