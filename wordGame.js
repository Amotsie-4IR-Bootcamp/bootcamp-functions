let inst_wordgame =
  "To see the longest and shortest words, write your sentence in the text area and click 'Check'.";

function WordGame() {
  return {
    input: "",
    show: false,
    instructions: inst_wordgame,
    message: "",
    findWords() {
      let sentence = this.input.trim();
      if (sentence == "") {
        this.message = "Please write a sentence...";
        return;
      }
      let wordList = sentence.split(" ");
      let longest = wordList[0].trim();
      let shortest = wordList[0].trim();
      let sum = wordList[0].length;

      for (let i = 1; i < wordList.length; i++) {
        let word = wordList[i].trimEnd();
        if (word.length >= longest.length) longest = word;
        if (word.length <= shortest.length) shortest = word;
        sum += word.length;
      }

      this.message = `
      Longest word : <strong>${longest}</strong> <br/>
      Shortest word : <strong>${shortest}</strong><br/>
      Sum of lengths = <strong>${sum}</strong>
      `;
    },
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("wordgame", WordGame);
});
