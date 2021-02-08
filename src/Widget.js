import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fzohar.williams%2Fvideos%2F3317184571702885%2F&show_text=true&width=734&height=874&appId"
        width="734"
        height="874"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe> 
    </div>
  );
}

export default Widget;
