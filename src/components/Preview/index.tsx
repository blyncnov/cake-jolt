import React from "react";
import Head from "next/head";

//=> Redux
import { useSelector } from "react-redux";

const Preview = () => {
  //=> Birthday Message
  const birthday_message = useSelector(
    (state: any) => state.ModeReducer.birthdayMessage
  );

  //=> Celebrant Name
  const CelebrantName = useSelector(
    (state: any) => state.ModeReducer.celebrant
  );

  //=> Sender
  const sender = useSelector((state: any) => state.ModeReducer.sender);

  return (
    <div id="card_body">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cake-jolt | Happy Birthday</title>
      </Head>

      <div className="birthdayCard">
        <div className="cardFront">
          <div className="frame">
            <div className="book_cover">
              <div className="book_grid_container">
                <div className="grid_section">
                  <div className="balls">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                  </div>
                </div>
                <div className="grid_section">
                  <div className="circular_tag">
                    <div className="circular_inner_tag">
                      <p>
                        Happy <br />
                        <span className="birthday_word">Birthday</span>
                        <br />
                        to you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">SPECIAL BIRTHDAY ❤️ </h3>
          <p className="preview_text">Hi {CelebrantName},</p>
          <p className="preview_text">{birthday_message}</p>
          <p className="name">{sender}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
