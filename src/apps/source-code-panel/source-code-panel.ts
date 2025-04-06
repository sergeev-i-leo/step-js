import {
  DIV,
  SPAN
} from "@step-js-core/index";
import {
  XYScrollablePanel,
} from "@step-js-widgets/index";
import {
  Text,
  Word
} from "@step-js-documents/index";

class SourceCodePanel extends XYScrollablePanel {
  source: string[];

  constructor(source: string, ...params: any) {
    super(...params);
    this.source = source.split("\n");
    this.setStyle({
      fontFamily: "'DM Mono', monospace",
      fontStyle: "italic",
      whiteSpace: "nowrap"
    });
    this.addClassNames("h-100");
  }

  mount() {
    this.source.forEach((line: string) => {
      let div = new DIV();
      this.append(div);
      if (line.length === 0) {
        div.setInnerHTML("&nbsp;");
        return;
      }
      let words = Text.createWords(line);
      words.forEach((word: Word) => {
        const span = new SPAN(undefined);
        div.append(span);
        span.setInnerHTML(`${word.text}&nbsp;`);
      });
    });
  }
}

export default SourceCodePanel;
