/**
 * api 리퀘스트 파일
 */

export const getFoods = async () => {
  const response = await fetch("https://learn.codeit.kr/9516/foods");
  const body = await response.json();
  console.log(body);
  return body;
};
