import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.useCollection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts.docs.map((post) => {
        <Post />;
      })}
    </div>
  );
}

export default Posts;
