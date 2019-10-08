import React from "react";
import { Col, Row, Form } from "react-bootstrap";

// img
import profile from "../../assets/img/profile.jpg";
import iconFacebook from "../../assets/img/icon-facebook.jpg";
import iconMore from "../../assets/img/icon-more.png";

function PostHead() {
	return (
    <div className="list-head mb-3">
      <Row noGutters="true">
        <Col xs="auto">
          <Form.Check
            custom
            type="checkbox"
            id="checkbox-1"
            label=""
            className="mt-2"
          />
        </Col>
        <Col xs="auto" className="list-thumb">
          <img src={profile} alt="Profile" className="circle" />
          <img src={iconFacebook} alt="Profile" className="circle" />
        </Col>
        <Col className="list-info pl-2">
          <a href="." className="name font-weight-bold">Oil Nuasdasd aasdas</a>
          <div className="post"><span className="type">Public</span> <span className="date">09 October 2019</span></div>
        </Col>
      </Row>
      <a href="." className="more"><img src={iconMore} alt="more" /></a>
    </div>
	);
}

export default PostHead;
