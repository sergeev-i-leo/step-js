import {
  Router,
  StyleRuleAnimations,
  Utils,
  Widget
} from "@step-js-core/index";
import AppsPage from "./apps-page/apps-page";
import ComponentsPage from "./components-page/components-page";
import AboutPage from "./about-page/about-page";
import HomePage from "./home-page/home-page";

class AppRouter extends Router {
  pageName?: string;
  pageWidget?: Widget;

  constructor() {
    super("flex-grow-1");
  }

  mount() {
    let pageName = this.getPageName();
    switch (pageName) {
      case "apps-page":
        this.pageWidget = new AppsPage();
        break;
      case "components-page":
        this.pageWidget = new ComponentsPage();
        break;
      case "about-page":
        this.pageWidget = new AboutPage();
        break;
      default:
        this.pageWidget = new HomePage();
        break;
    }

    this.append(this.pageWidget);
    if (!this.pageName) {
      // first mount
      return;
    }
    this.pageName = pageName;
    this.pageWidget.props.style = this.pageWidget.props.style || {};
    this.pageWidget.props.style.opacity = "0";
  }

  componentDidMount() {
    if (!this.pageName) {
      // first mount
      this.pageName = this.getPageName();
      return;
    }
    const htmlElement = this.pageWidget?.getHTMLElement();
    if (htmlElement) {
      StyleRuleAnimations.fire(htmlElement, {
        styleRule: "opacity",
        from: 0,
        to: 1,
        duration: 0.5
      });
    }
  }

  getPageName() {
    const parsedUrl = new Utils.ParsedURL(window.location);
    let pageName = "home-page";
    if (parsedUrl.pathname.indexOf("/apps") === 0) {
      pageName = "apps-page";
    } else if (parsedUrl.pathname.indexOf("/components") === 0) {
      pageName = "components-page";
    } else if (parsedUrl.pathname === "/about") {
      pageName = "about-page";
    }
    return pageName;
  }
}

export default AppRouter;
