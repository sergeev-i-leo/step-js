import {
  DIV
} from "@step-js-core/index";
import {
  TreeView
} from "@step-js-views/index";
import "../app.scss";

const treeModel = [
  {
    route: "About",
  },
  {
    route: "Bars",
    children: [
      {
        route: "Navbar 1"
      },
      {
        route: "Navbar 2"
      },
      {
        route: "Sidebar 1"
      }
    ]
  },
  {
    route: "Modals",
    children: [
      {
        route: "Modal 1"
      },
    ]
  },
  {
    route: "JSX",
    children: [
      {
        route: "JSX Spinner"
      },
      {
        route: "JSX Modal 1"
      },
      {
        route: "JSX Modal 2"
      },
      {
        route: "JSX Modal 3"
      },
      {
        route: "JSX Modal 4"
      },
      {
        route: "JSX Modal 5"
      },
      {
        route: "JSX Modal 6"
      },
      {
        route: "JSX Modal 7"
      },
      {
        route: "JSX Modal 8"
      },
    ]
  },
];

class TreeView1Wrapper extends DIV {

  constructor() {
    super("h-100");
  }

  mount() {
    new TreeView(treeModel, this);
  }
}

export default TreeView1Wrapper;
