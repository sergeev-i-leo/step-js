import {
  DIV, SPAN,
  VirtualElement,
} from "@step-js-core/index";
import {
  XYScrollablePanel
} from "@step-js-widgets/index";
import "./tree-view.scss";

class TreeView extends XYScrollablePanel {
  treeModel: any;

  constructor(treeModel: any, ...params: any) {
    super(...params);
    this.addClassNames("step-js-tree-view");
    this.treeModel = treeModel;
  }

  mount() {
    if (!this.treeModel) {
      return;
    }
    for (let i0 = 0; i0 < this.treeModel.length; i0++) {
      let treeNode0 = new TreeView.Node(this);
      treeNode0.append(new SPAN(this.treeModel[i0].route, "-step-js-select-none"));
      treeNode0.setDataAttribute("route", this.treeModel[i0].route);
      if (this.treeModel[i0].selected) {
        treeNode0.selected = true;
      }
      treeNode0.collapsed = false;
      if (this.treeModel[i0].children) {
        for (let i1 = 0; i1 < this.treeModel[i0].children.length; i1++) {
          let treeNode1 = new TreeView.Node(treeNode0);
          treeNode1.append(new SPAN(this.treeModel[i0].children[i1].route, "-step-js-select-none"));
          treeNode1.setDataAttribute("route", this.treeModel[i0].children[i1].route);
          if (this.treeModel[i0].children[i1].selected) {
            treeNode1.selected = true;
          }
        }
      }
    }
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    const browseChildren = (parentVirtualElement: VirtualElement, children: any[], level: number, parentTreeViewNode?: TreeView.Node) => {
      children.forEach((child: any) => {
        if (child instanceof TreeView.Node) {
          child.level = level;
          child.parentTreeViewNode = parentTreeViewNode;
          const virtualElement = child.createVirtualElement();
          if (virtualElement) {
            this.addVirtualElement(parentVirtualElement, virtualElement);
            browseChildren(virtualElement, child.getChildren(), level + 1, child);
          }
        }
      });
    };
    browseChildren(parentVirtualElement, this.getChildren(), 0, undefined);
  }

  onTreeViewNodeIconClick(event: any, treeViewNode: TreeView.Node) {
    this.selectTreeViewNode(treeViewNode);
    if (treeViewNode.calculateChildrenTreeViewNodesNumber() > 0) {
      if (treeViewNode.collapsed) {
        treeViewNode.collapsed = false;
        treeViewNode.removeClassName("--collapsed");
        treeViewNode.addClassNames("--expanded");
      } else {
        treeViewNode.collapsed = true;
        treeViewNode.removeClassName("--expanded");
        treeViewNode.addClassNames("--collapsed");
      }
    }
  }

  onTreeViewNodeContentClick(event: any, treeViewNode: TreeView.Node) {
    this.selectTreeViewNode(treeViewNode);
  }

  onTreeViewNodeContentDblClick(event: any, treeViewNode: TreeView.Node) {
    this.onTreeViewNodeIconClick(undefined, treeViewNode);
  }

  selectTreeViewNode(treeViewNode: TreeView.Node) {
    const browseTreeViewNodes = ((treeViewNode: any) => {
      const children = treeViewNode.getChildren();
      children.forEach((child: any) => {
        if (child instanceof TreeView.Node) {
          if (child.selected) {
            child.selected = false;
            child.removeClassName("--selected");
          }
          browseTreeViewNodes(child);
        }
      });
    });
    browseTreeViewNodes(this);
    treeViewNode.selected = true;
    treeViewNode.addClassNames("--selected");
  }
}

namespace TreeView {

  export class Node extends DIV {
    level = 0;
    parentTreeViewNode?: TreeView.Node;
    collapsed = true;
    selected = false;
    rowVirtualElement?: VirtualElement;
    iconsVirtualElement?: VirtualElement;
    contentsVirtualElement?: VirtualElement;

    createVirtualElement() {
      let i = this.calculateChildrenTreeViewNodesNumber();
      this.virtualElement = this.createThisVirtualElement(i);

      this.rowVirtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-tree-view-node-row"
      });
      this.virtualElement.append(this.rowVirtualElement);

      this.iconsVirtualElement = this.createIconsVirtualElement();
      this.rowVirtualElement.append(this.iconsVirtualElement);
      this.addIconVirtualElements(this.iconsVirtualElement, i);

      this.contentsVirtualElement = this.createContentsVirtualElement();
      this.rowVirtualElement.append(this.contentsVirtualElement);

      this.getChildren().forEach((child: any) => {
        if (!(child instanceof TreeView.Node)) {
          if (this.contentsVirtualElement) {
            this.contentsVirtualElement.append(child.createVirtualElement());
          }
        }
      });

      return this.virtualElement;
    }

    calculateChildrenTreeViewNodesNumber() {
      let i = 0;
      this.getChildren().forEach((child: any) => {
        if (child instanceof TreeView.Node) {
          i++;
        }
      });
      return i;
    }

    createThisVirtualElement(childrenTreeViewNodesNumber: number) {
      const virtualElement = new VirtualElement(this, "div", {
        className: "step-js-tree-view-node ---step-js-select-none " + this.getClassName()
      });

      if (childrenTreeViewNodesNumber === 0) {
        virtualElement.props.className += " --terminal";
      } else if (this.collapsed) {
        virtualElement.props.className += " --collapsed";
      } else {
        virtualElement.props.className += " --expanded";
      }
      if (this.selected) {
        virtualElement.props.className += " --selected";
      }

      return virtualElement;
    }

    createIconsVirtualElement() {
      const virtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-tree-view-node-icons"
      });
      virtualElement.props.style = {
        flexBasis: `${(this.level + 2)}rem`
      };
      virtualElement.props.onClick = (event: any) => {
        const parentTreeView = this.getParentTreeView();
        if (parentTreeView) {
          parentTreeView.onTreeViewNodeIconClick(event, this);
        }
      };

      return virtualElement;
    }

    addIconVirtualElements(iconsVirtualElement: VirtualElement, childrenTreeViewNodesNumber: number) {
      if (childrenTreeViewNodesNumber > 0) {
        let div = new DIV("step-js-tree-view-node-icon step-js-tree-view-node-expanded-icon -step-js-select-none");
        div.setInnerHTML(expandedSVG());
        iconsVirtualElement.append(div.createVirtualElement());

        div = new DIV("step-js-tree-view-node-icon step-js-tree-view-node-collapsed-icon -step-js-select-none");
        div.setInnerHTML(collapsedSVG());
        iconsVirtualElement.append(div.createVirtualElement());
      } else {
        const div = new DIV("step-js-tree-view-node-icon step-js-tree-view-node-terminal-icon -step-js-select-none");
        div.setInnerHTML(terminalSVG());
        iconsVirtualElement.append(div.createVirtualElement());
      }
    }

    createContentsVirtualElement() {
      const virtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-tree-view-node-contents -step-js-select-none"
      });
      virtualElement.props.onClick = (event: any) => {
        const parentTreeView = this.getParentTreeView();
        if (parentTreeView) {
          parentTreeView.onTreeViewNodeContentClick(event, this);
        }
      };
      virtualElement.props.onDblClick = (event: any) => {
        const parentTreeView = this.getParentTreeView();
        if (parentTreeView) {
          parentTreeView.onTreeViewNodeContentDblClick(event, this);
        }
      };
      return virtualElement;
    }

    getParentTreeView() {
      if (!this.virtualElement) {
        return undefined;
      }
      let virtualElement = this.virtualElement.parent;
      while (virtualElement) {
        if (virtualElement.constructedBy) {
          if (virtualElement.constructedBy instanceof TreeView) {
            return virtualElement.constructedBy;
          }
        }
        virtualElement = virtualElement.parent;
      }
      return undefined;
    }
  }
}

// collapsedSVG

const collapsedSVG = () => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
    </svg>
  `;
};

// expandedSVG

const expandedSVG = () => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
  `;
};

// terminalSVG

const terminalSVG = () => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
    </svg>
  `;
};

export default TreeView;
