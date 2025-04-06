import {
  Browser,
  VirtualElement
} from "@step-js-core/index";

function browserIndex1() {
  let ve0 = new VirtualElement(null, "div", {
    style: {
      position: "relative",
      height: "100%"
    }
  });
  let i = 0;
  ve0.props.onClick = () => {
    console.log(i);
  };
  i = 1;
  ve0.props.onClick = () => {
    console.log(i);
  };
  for (let i = 0; i < 10; i++) {
    let span = new VirtualElement(null, "span");
    span.constructedBy = {
      innerHTML: `&nbsp;SPAN${span.key}&nbsp;`
    };
    ve0.append(span);
  }
  let ve1 = new VirtualElement(null, "div");
  ve0.append(ve1);
  for (let i = 0; i < 10; i++) {
    let a = new VirtualElement(null, "a", {
      href: "#",
    });
    a.constructedBy = {
      innerHTML: `&nbsp;A${a.key}&nbsp;`,
    };
    a.props.onClick = () => {
      console.log(i);
      console.log(a.key);
    };
    ve1.append(a);
  }
  Browser.mountVirtualElement(document.getElementById("app")!, ve0);
}

function changeFirstSPAN() {
  let spans = document.getElementsByTagName("SPAN");
  if (spans.length) {
    let key = spans[0].getAttribute("data-key");
    const ve = Browser.findVirtualElementByKey(key);
    Browser.unmountVirtualElement(ve!, createSPANChange());
  }
}

function createSPANChange() {
  const ul = new VirtualElement(null, "ul", {
    style: {
      backgroundColor: "yellow"
    }
  });
  let li = new VirtualElement(null, "li", {
    style: {
      color: "blue"
    }
  });
  ul.append(li);
  li.constructedBy = {
    innerHTML: `&nbsp;LI${li.key}&nbsp;`,
    onClick: function() {
      console.log(li.key);
    }
  };
  li = new VirtualElement(null, "li", {
    style: {
      color: "red"
    }
  });
  ul.append(li);
  li.constructedBy = {
    innerHTML: `&nbsp;LI${li.key}&nbsp;`,
    onClick: function() {
      console.log(li.key);
    }
  };
  return ul;
}

function deleteSPAN() {
  let spans = document.getElementsByTagName("SPAN");
  if (spans.length) {
    let key = spans[Math.floor(Math.random() * spans.length)].getAttribute("data-key") as string;
    const ve = Browser.findVirtualElementByKey(key);
    Browser.unmountVirtualElement(ve!);
  }
}

function deleteA() {
  let as = document.getElementsByTagName("A");
  if (as.length) {
    let key = as[Math.floor((Math.random() * as.length))].getAttribute("data-key") as string;
    const ve = Browser.findVirtualElementByKey(key);
    Browser.unmountVirtualElement(ve!);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("change-first-span")?.addEventListener("click", changeFirstSPAN);
  document.getElementById("delete-span")?.addEventListener("click", deleteSPAN);
  document.getElementById("delete-a")?.addEventListener("click", deleteA);
  browserIndex1();
});

/*
  document.getElementById("app")?.addEventListener("click", (event: any) => {
    let element = document.elementFromPoint(event.clientX, event.clientY);
    if (element instanceof HTMLElement) {
      const key = element.getAttribute("data-key");
      if (key) {
        let ve = Browser.findVirtualElementByKey(key);
        if (ve) {
          if ((ve as any).props.test0) {
            ve!.props.test0();
          }
        }
      }
    }
  });

 */
