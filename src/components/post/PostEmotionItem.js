import React from "react";
import { Col, Row } from "react-bootstrap";

// img
import iconPlusGrey from "../../assets/img/icon-plus-grey.png";
import iconEmotionGreen from "../../assets/img/icon-emation-green.png";
import iconEmotionGrey from "../../assets/img/icon-emation-grey.png";
import iconEmotionRed from "../../assets/img/icon-emation-red.png";

function PostEmotionItem() {
	return (
    <>
    <Row noGutters="true" className="mb-2 emotion">
      <Col sm="3" lg="2" className="emotion-title">
        <img src={iconEmotionGreen} alt="Tom n Toms" /> Tom n Toms
      </Col>
      <Col>
        <ul className="list-unstyled mb-0 emotion-tag">
          <li><span>Tom n Toms</span></li>
          <li><a href="."><img src={iconPlusGrey} alt="icon" /></a></li>
        </ul>
      </Col>
    </Row>
    <Row noGutters="true" className="mb-2 emotion">
      <Col sm="3" lg="2" className="emotion-title">
        <img src={iconEmotionGrey} alt="Starbuck" /> Starbuck
      </Col>
      <Col>
        <ul className="list-unstyled mb-0 emotion-tag">
          <li><span>Starbuck</span></li>
          <li><span>Starbuck</span></li>
          <li><a href="."><img src={iconPlusGrey} alt="icon" /></a></li>
        </ul>
      </Col>
    </Row>
    <Row noGutters="true" className="mb-2 emotion">
      <Col sm="3" lg="2" className="emotion-title">
        <img src={iconEmotionRed} alt="Tom Coffee" /> Tom Coffee
      </Col>
      <Col>
        <ul className="list-unstyled mb-0 emotion-tag">
          <li><span>Tom n</span></li>
          <li><a href="."><img src={iconPlusGrey} alt="icon" /></a></li>
        </ul>
      </Col>
    </Row>
    </>
	);
}

export default PostEmotionItem;
