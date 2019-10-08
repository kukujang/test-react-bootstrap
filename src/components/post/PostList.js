import React from "react";

// img
import PostHead from "../../components/post/PostHead";
import PostDesc from "../../components/post/PostDesc";
import PostEmotion from "../../components/post/PostEmotion";
import PostAmount from "../../components/post/PostAmount";
import PostNav from "../../components/post/PostNav";

function PostList() {
	return (
    <div className="list">
      <PostHead />
      <PostDesc />
      <PostAmount />
      <PostEmotion />
      <PostNav />
    </div>
	);
}

export default PostList;
