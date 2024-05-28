import React from "react";

const Slider = () => {
  return (
    <>
      <div class="slider">
        <ul>
          <li>
            <img src="./images/main_slide_img1.jpg" alt="슬라이더1" />
          </li>
          <li>
            <img src="./images/main_slide_img2.jpg" alt="슬라이더2" />
          </li>
          <li>
            <img src="./images/main_slide_img3.jpg" alt="슬라이더3" />
          </li>
        </ul>

        <img
          src="./images/main_slide_img_tit.png"
          alt="사람과 자연을 사랑하는 팜스토리"
        />

        <div class="banner">
          <img src="./images/main_banner_txt.png" alt="GRAND OPEN" />
          <img
            src="./images/main_banner_tit.png"
            alt="팜스토리 오픈기념 30% 할인 이벤트"
          />
          <img src="./images/main_banner_img.png" alt="과일" />
        </div>
      </div>
    </>
  );
};

export default Slider;
