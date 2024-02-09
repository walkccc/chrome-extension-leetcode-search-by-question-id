const LEETCODE_API_ENDPOINT = 'https://leetcode.com/api/problems/all';

export async function fetchLeetCodeProblems() {
  const response = await fetch(LEETCODE_API_ENDPOINT);
  const data = await response.json();
  return data;
}
