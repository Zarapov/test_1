import React, { FC, useState, useEffect } from "react";

const useFetchPosts = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { data, error, isLoading };
};

/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
*/

export const PostsList: FC<{ url: string }> = ({ url }) => {
  const { data, error, isLoading } = useFetchPosts(url);
  const posts = JSON.stringify(data);
  return (
    <pre>
      <code>{isLoading ? "Loading..." : error || posts}</code>
    </pre>
  );
};
