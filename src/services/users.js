const BASE_API_URL = "https://api.github.com";

async function fetchWrtapper(url, options) {
  const response = await fetch(url);

  if (!response.ok) {
    return {
      data: null,
      isError: true,
    };
  }
  const data = await response.json();

  return {
    data,
    isError: false,
  };
}

export async function getUser(user) {
  return fetchWrtapper(`${BASE_API_URL}/users/${user}`);
}

export async function getRepos(user) {
    return fetchWrtapper(`${BASE_API_URL}/users/${user}/repos`);
}
