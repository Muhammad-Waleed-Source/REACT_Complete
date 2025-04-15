export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return await response.json();
};

export const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });
  return await response.json();
};

export const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "GET",
  });
  return await response.json();
};
