document.addEventListener('DOMContentLoaded', documentEvents, false);

function documentEvents() {
  document.getElementById('form').addEventListener('submit', function () {
    const backgroundPage = chrome.extension.getBackgroundPage();
    backgroundPage.openLeetCodeProblemByNumber(document.getElementById('problem-no'));
  });
}
