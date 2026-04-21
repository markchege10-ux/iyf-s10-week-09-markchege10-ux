import useFetch from "../hooks/useFetch";
import { getPosts } from "../services/api";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const { data: posts, loading, error } = useFetch(getPosts);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h1>Community Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;