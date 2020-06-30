async function getSortedProblems() {
  const res = await fetch('https://leetcode.com/api/problems/all/');
  const json = await res.json();
  const problems = await json['stat_status_pairs'];

  problems.sort((a, b) => a['stat']['frontend_question_id'] - b['stat']['frontend_question_id']);

  return problems;
}

async function openLeetCodeProblemByNumber(input) {
  const problemNo = input.value;

  if (isNaN(problemNo)) {
    alert('You must enter a number!');
    return;
  }

  const problems = await getSortedProblems();

  if (problemNo < 1 || problemNo > problems.length) {
    alert('You must enter a valid problem number');
    return;
  }

  const questionTitle = await problems[problemNo - 1]['stat']['question__title_slug'];

  chrome.tabs.create({ url: `https://leetcode.com/problems/${questionTitle}` });
}
