import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {

    return ( <
        Container fluid className = "footer" >
        <
        Row >
        <
        Col md = "4"
        className = "footer-copywright" >
        <
        h3 > Designed and Developed by Bipasha < /h3> <
        /Col>

        <
        Col md = "4"
        className = "footer-body" >
        <
        ul className = "footer-icons" >
        <
        li className = "social-icons" >
        <
        a href = "https://github.com/mahi0601"
        style = {
            { color: "white" } } >
        <
        i className = "fab fa-github" > < /i> <
        /a> <
        /li>

        <
        li className = "social-icons" >
        <
        a href = "https://www.linkedin.com/in/bipasha-bhattacharjee-1862061aa/"
        style = {
            { color: "white" } } >
        <
        i className = "fab fa-linkedin-in" > < /i> <
        /a> <
        /li>

        <
        /ul> <
        /Col> <
        /Row> <
        /Container>
    );
}

export default Footer;