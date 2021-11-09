function SubRedditHeader({ title, url, numberOfMembers }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{url}</h4>
      <h5>{numberOfMembers}</h5>
    </div>
  );
}

export default SubRedditHeader;
