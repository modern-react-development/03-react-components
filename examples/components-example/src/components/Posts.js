import Post from './Post';

function Posts({ posts }) {
  return (
    <>
      <h3>THIS IS A POSTS COMPONENT</h3>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
}

export default Posts;
