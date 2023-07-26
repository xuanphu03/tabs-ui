import './main.css';

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item") as NodeListOf<HTMLElement>;
const panes = $$(".tab-pane") as NodeListOf<HTMLElement>;

const tabActive:HTMLElement | null = $(".tab-item.active");
const line: HTMLElement | null = $(".tabs .line");

requestIdleCallback(function () {
  if (tabActive) {
  line!.style.left = tabActive.offsetLeft + "px";
  line!.style.width = tabActive.offsetWidth + "px";
}
});

tabs.forEach((tab: HTMLElement, index: number) => {
  const pane = panes[index];

  tab.onclick = function () {
    const activeTabPane: HTMLElement | null = $(".tab-pane.active")
    const activeTabItem: HTMLElement | null = $(".tab-item.active")
    
    activeTabPane?.classList.add("hidden");
    activeTabPane?.classList.remove("active");

    activeTabItem?.classList.add("opacity-60");
    activeTabItem?.classList.remove("active");
  if (line  && this instanceof HTMLElement) {
    line.style.left = `${this.offsetLeft}px`;
    line.style.width = `${this.offsetWidth}px`;
  }
    (this as HTMLElement).classList.add("active");
    (this as HTMLElement).classList.remove("opacity-60");
    pane.classList.add("active");
    pane.classList.remove("hidden");
  };
});
