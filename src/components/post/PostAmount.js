import React from "react";

// img
import iconShare from "../../assets/img/icon-share.png";
import iconLike from "../../assets/img/icon-like.png";
import iconChat from "../../assets/img/icon-chat.png";

function PostAmount() {
	return (
    <div className="list-amount">
      <ul className="list-unstyled mb-3">
        <li><img src={iconShare} alt="icon" /> 300</li>
        <li><img src={iconLike} alt="icon" /> 549</li>
        <li><img src={iconChat} alt="icon" /> 10k</li>
      </ul>
    </div>
	);
}

export default PostAmount;
