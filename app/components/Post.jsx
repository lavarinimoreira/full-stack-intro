import React from "react";

function Post({ id, title, content, authorName }) {
  return (
    <div style={{ border: "1px solid white", margin: "20px", padding: "15px" }}>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Post;
