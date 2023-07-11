import ReactGA from "react-ga4";

export default function analyticsInit() {
  ReactGA.initialize("G-8ENM6FGY2F");
  setupPageViewEvent();
}

function setupPageViewEvent() {
  let target = document.querySelector('title');

  let observer = new MutationObserver(pageViewCallback);
  let config = { subtree: true, characterData: true, childList: true };
  observer.observe(target, config);
}

function pageViewCallback(mutations) {
  let title = mutations[0].target;

  let pageViewEvent = {
    hitType: "pageview",
    page: window.location.href,
    title: title.innerHTML
  }

  ReactGA.send(pageViewEvent);

  if (process.env.NODE_ENV === "development") {
    console.log(`[PageView event sended]`)
    console.log(pageViewEvent)
  }
}