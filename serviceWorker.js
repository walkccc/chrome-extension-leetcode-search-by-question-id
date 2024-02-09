import { fetchLeetCodeProblems } from './api/data.js';

chrome.runtime.onInstalled.addListener(async () => {
  const data = await fetchLeetCodeProblems();
  const questionIdToSlugObj = {};
  data['stat_status_pairs'].forEach((problem) => {
    const questionId = problem.stat.frontend_question_id.toString();
    const questionSlug = problem.stat.question__title_slug;
    questionIdToSlugObj[questionId] = questionSlug;
  });
  chrome.storage.local.set({ questionIdToSlugObj });
});
