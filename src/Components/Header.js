import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsCameraVideo, BsDownload } from "react-icons/bs";
import { AiFillAliwangwang } from "react-icons/ai";

const Header = () => {
  return (
    <div className="sidebar">
      <a href="#">
        <i>
          <AiFillAliwangwang className="logo" />
        </i>
      </a>
      <a href="#">
        <i>
          <FaHeadphones />
        </i>
      </a>
      <a href="#">
        <i>
          <IoGameController className="gameController" />
        </i>
      </a>
      <a href="#">
        <i>
          <BsCameraVideo />
        </i>
      </a>
      <a href="#">
        <i>
          <BsDownload className="downloadBtn" />
        </i>
      </a>
    </div>
  );
};

export default Header;
