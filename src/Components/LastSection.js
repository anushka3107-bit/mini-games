import React from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { PiBagLight } from "react-icons/pi";
import { SlEqualizer } from "react-icons/sl";
import { FcSearch } from "react-icons/fc";

const LastSection = () => {
  return (
    <div className="lastSection">
      <div className="lastSectionNavbar">
        <div className="leftPart">
          <span>
            <i>
              <PiDotsNineBold className="dots" />
            </i>
          </span>
          <span>
            <i>
              <PiBagLight className="cart" />
            </i>
          </span>
        </div>

        <div className="rightPart">
          <div className="searchBar">
            <FcSearch className="searchIcon" />
            <input type="search" placeholder="Search" />
          </div>

          <span>
            <i>
              <SlEqualizer className="filterIcon" />
            </i>
          </span>
        </div>
      </div>

      <div className="recommendedGames">
        <h1 className="recGameContent">Recommended Games</h1>
      </div>

      <div className="recentlyPlayedGames"></div>
    </div>
  );
};

export default LastSection;
