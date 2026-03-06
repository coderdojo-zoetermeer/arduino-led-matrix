const inactive = (tab) => tab.classList.remove('active');

const active = (tab) => tab.classList.add('active');

const tabClick = (tab) => tab.addEventListener('click', listener);

const listener = (event) => {
  const tabId = event.target.getAttribute('data-id');

  containerId =
    event.target.parentElement.parentElement.getAttribute('data-id');

  const parentQuery = `.tabs-tabs-wrapper[data-id=${containerId}]`;

  document
    .querySelectorAll(
      `${parentQuery}
            .tabs-tab-content`,
    )
    .forEach(inactive);

  document
    .querySelectorAll(
      `${parentQuery} .tabs-tabs-header
            button`,
    )
    .forEach(inactive);

  document.querySelectorAll(`${parentQuery} [data-id=${tabId}]`).forEach(active);
};
document.querySelectorAll('.tabs-tabs-header button').forEach(tabClick);
