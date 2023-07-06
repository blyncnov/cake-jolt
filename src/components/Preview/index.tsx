import Head from "next/head";
import React from "react";

const Preview = () => {
  return (
    <div id="card_body">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cake-jolt | Happy Birthday</title>
      </Head>

      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY</h3>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY</h3>
          <p className="preview_text">Dear Friend,</p>
          <p className="preview_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            expedita debitis esse quaerat adipisci iste illum placeat incidunt
            reprehenderit laudantium!
          </p>
          <p className="name">Jeremytechie</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
