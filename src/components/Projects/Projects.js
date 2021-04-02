import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
    return ( <
        Container fluid className = "project-section" >
        <
        Particle / >
        <
        Container >
        <
        h1 className = "project-heading" >
        My Recent < strong className = "purple" > Works < /strong> < /
        h1 > <
        p style = {
            { color: "white" }
        } >
        Here are a few projects I 've worked on recently. < /
        p > <
        Row style = {
            { justifyContent: "center", paddingBottom: "10px" }
        } >
        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { editor }
        isBlog = { false }
        title = "Spotify Playlist"
        description = "Uses metadata to search and amke the playlist."
        link = "https://github.com/mahi0601/SpotifyPlaylist" /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { editor }
        isBlog = { false }
        title = "Library"
        description = "Template for online library"
        link = "https://mahi0601.github.io/Library/#" /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { editor }
        isBlog = { false }
        title = "e-shop"
        description = "Fully functional e-commerce web for the client"
        link = "https://github.com/mahi0601/e-shop" /
        >
        <
        /Col>    < /
        Row >


        <
        /Container> < /
        Container >
    );
}

export default Projects;