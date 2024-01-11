import React from 'react';

const SocialSidebar = () => {
    return(
        <span id="social-game">
          <a href="https://www.facebook.com/Virus-100530071605217" target="blank" className="mt-1">
            <img src={require("../../assets/img/facebook.png")}></img>
          </a>
          <a href="https://www.instagram.com/virusarcade/" target="blank" className="my-2">
            <img src={require("../../assets/img/IG.png")}></img>
          </a>
        </span>
    )
}

export default SocialSidebar;