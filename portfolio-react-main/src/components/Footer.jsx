import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"}
          alt="Founder"
        />

        <h2>Prachi Pranesh</h2>
        <p>Motivation is temporary, but discipline lasts forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.google.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
