import Word from "./word";

class Text {

  static createWords(text: string) {
    const words: Word[] = [];
    const texts = text.split(' ');
    texts.forEach((text) => {
      words.push(new Word(text));
    });
    return words;
  }

}

export default Text;
