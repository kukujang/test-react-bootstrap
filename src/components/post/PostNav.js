import React from "react";

// img
import iconEye from "../../assets/img/icon-eye.png";
import iconHearth from "../../assets/img/icon-hearth.png";
import iconPlus from "../../assets/img/icon-plus.png";
import iconTag from "../../assets/img/icon-tag.png";
import iconDelete from "../../assets/img/icon-delete.png";

function PostNav() {
	return (
    <div className="list-nav">
      <ul className="list-unstyled mb-0">
        <li className="noborder"><a href="."><img src={iconEye} alt="icon" /></a></li>
        <li className="noborder"><a href="."><img src={iconHearth} alt="icon" /></a></li>
        <li><a href="."><img src={iconPlus} alt="icon" /></a></li>
        <li><a href="."><img src={iconTag} alt="icon" /></a></li>
        <li className="last"><a href="."><img src={iconDelete} alt="icon" /></a></li>
      </ul>
    </div>
	);
}

export default PostNav;
