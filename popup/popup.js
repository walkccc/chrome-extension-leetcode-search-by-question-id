const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = document.getElementById('question-id').value;
  const questionId = parseInt(value, 10);
  if (isNaN(questionId) || questionId < 0) {
    alert('You must enter a valid number!');
    return;
  }

  chrome.storage.local.get(['questionIdToSlugObj']).then((result) => {
    const { questionIdToSlugObj } = result;
    const maxQuestionId = Object.keys(questionIdToSlugObj).length;
    if (questionId > maxQuestionId) {
      alert('The question ID does not exist!');
      return;
    }
    const questionSlug = questionIdToSlugObj[questionId.toString()];
    chrome.tabs.create({
      url: `https://leetcode.com/problems/${questionSlug}`,
    });
  });
});
