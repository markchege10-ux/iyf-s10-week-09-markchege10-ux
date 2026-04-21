import useFetch from "../hooks/useFetch";
import { getPosts } from "../services/api";
import PostCard from "../components/PostCard";

function Home() {
  const { data: posts, loading } = useFetch(getPosts);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Community Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;