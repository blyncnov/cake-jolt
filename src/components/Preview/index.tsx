import React from "react";
import Head from "next/head";

// Redux
import { useSelector } from "react-redux";

const Preview: () => React.JSX.Element = () => {
  // Toggle State
  const CardInfo = useSelector((state: any) => state.ModeReducer.CardInfo);

  return (
    <div id="card_body">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cake-jolt | Happy Birthday</title>
      </Head>

      <div className="birthdayCard">
        <div className="cardFront">
          <div className="happy">
            <div>A Surprise</div>
          </div>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
            <div className="balloon-5"></div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">SPECIAL BIRTHDAY ❤️ </h3>
          <p className="preview_text">Heyy There,</p>
          <p className="preview_text">{CardInfo.message}</p>
          <p className="name">{CardInfo.sender}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
