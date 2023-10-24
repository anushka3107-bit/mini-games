import React from "react";
import { AiOutlineHeart, AiOutlineTrophy } from "react-icons/ai";


const MidSection = () => {
  return (
    <div className="userSection">
      <div className="userDetail">
        <img
          src="https://img.freepik.com/free-vector/cute-shiba-inu-dog-wearing-dragon-costume-cartoon-vector-icon-illustration-animal-holiday-isolated_138676-7105.jpg?size=626&ext=jpg&ga=GA1.1.1307901957.1697953784&semt=ais"
          alt="logo"
          className="logo"
        />
        <p className="userName">User</p>
      </div>
      <div className="sidePart">
        <i>
          <AiOutlineHeart />
        </i>
        <i>
          <AiOutlineTrophy />
        </i>
      </div>

      {/* <div className="contentPart">
        <h1>Let's Play Online Games.</h1>
      </div> */}
      {/* <ContentPart /> */}
    </div>
  );
};

export default MidSection;
