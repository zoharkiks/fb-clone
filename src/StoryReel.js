import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://guitar.com/wp-content/uploads/2019/05/Gibson-Custom-60th-Anniversary-1959-Les-Paul-Standard-badge@1400x1050.jpg"
        profileSrc="https://i.ytimg.com/vi/1q4YdeZ9Noc/hqdefault_live.jpg"
        title="Zohar Williams"
      />
      <Story
        image="https://s01.sgp1.cdn.digitaloceanspaces.com/article/119298-tqvoskxurz-1557394806.jpg"
        profileSrc="https://i.insider.com/5d7f92ec2e22af0405417a78?width=1136&format=jpeg"
        title="Ash Ketchum"
      />
      <Story
        image="https://townsquare.media/site/366/files/2018/11/rose.jpg?w=980&q=75"
        profileSrc="https://townsquare.media/site/295/files/2018/11/axl.jpg?w=980&q=75"
        title="Axl Rose"
      />
      <Story
        image="https://leshop-lyon.fr/3903-15696-thickbox_default/gibson-les-paul-deluxe-goldtop-1970.jpg"
        profileSrc="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-183181-180668889.jpg?resize=1800,1200&w=450"
        title="Slash"
      />

      <Story
        image="https://sites.google.com/site/alterbridge1028/_/rsrc/1353350732834/home/myles-kennedy/MK.jpg"
        profileSrc="https://i.pinimg.com/originals/c6/d5/52/c6d552b92fab59550d74a8f0aff026f7.jpg"
        title="Myles Kennedy"
      />
    </div>
  );
}

export default StoryReel;
