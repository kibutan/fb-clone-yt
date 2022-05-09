import { useCollection } from "@nestjs/firestore";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.useCollection("posts").orderBy("timestamp", "desc")
  );
  return <div></div>;
}

export default Posts;
