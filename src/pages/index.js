import * as React from "react"
import { useRef } from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./style.scss"
import soundfile from "./jingle-bells.mp3"

const IndexPage = () => {
  const start = useRef(null);
  const startOverlay = useRef(null);
  const endOverlay = useRef(null);

  const arrow = useRef(null);
  const loco = useRef(null);
  const wagon = useRef(null);
  const gifts = useRef(null);
  const snowman = useRef(null);
  const snowmanDec = useRef(null);

  // const song = useRef(null);
  // const toggleSong = useRef(null);

  const startFun = () => {
    startOverlay.current.classList.add("overlay_state_disabled");
  };

  const arrowFun = () => {
    arrow.current.classList.add("obj_state_active");
    loco.current.classList.add("obj_state_run");
    wagon.current.classList.add("obj_state_run");
  };

  const wagonFun = () => {
    loco.current.classList.add("obj_state_active");
    wagon.current.classList.add("obj_state_active");
    gifts.current.classList.add("obj_state_run");
  };

  const giftsFun = () => {
    gifts.current.classList.add("obj_state_active");
    endOverlay.current.classList.remove("overlay_state_disabled");
  };

  const snowmanFun = () => {
    snowman.current.classList.add("obj_state_active");
    snowmanDec.current.classList.add("obj_state_active");
  };

  // useLayoutEffect(() => {
  //   song.current.volume = 0.1;
  //   song.current.loop = true;
  // });

  // const toggleSongFun = () => {
  //   if (song.current.paused) {
  //     song.current.play();
  //     toggleSong.current.classList.remove("gg-play-button-o");
  //     toggleSong.current.classList.add("gg-play-pause-o");
  //   } else {
  //     song.current.pause();
  //     toggleSong.current.classList.remove("gg-play-pause-o");
  //     toggleSong.current.classList.add("gg-play-button-o");
  //   }
  // };

  return (
    <>
      <main className="room">
        <ReactAudioPlayer
          id="audio-player"
          src={soundfile}
          loop={true}
          autoPlay={true}
          controls
        />
        <div className="floating-container">
          <section className="obj obj_name_rail">
            <div className="spr spr_name_rail"></div>
          </section>

          <section className="obj obj_name_loco" ref={loco}>
            <div className="spr spr_name_loco"></div>
          </section>

          <button className="obj obj_name_wagon obj_type_btn" ref={wagon} type="button" onClick={wagonFun}>
            <div className="spr spr_name_wagon"></div>
          </button>

          <section className="obj obj_name_tunnel">
            <div className="spr spr_name_tunnel"></div>
          </section>

          <button className="obj obj_name_arrow obj_type_btn" ref={arrow} type="button" onClick={arrowFun}>
            <div className="spr spr_name_arrow"></div>
          </button>

          <section className="obj obj_name_tree">
            <div className="spr spr_name_tree"></div>
          </section>

          <button className="obj obj_name_gifts obj_type_btn" ref={gifts} type="button" onClick={giftsFun}>
            <div className="spr spr_name_gifts"></div>
          </button>

          <button className="obj obj_name_snowman obj_type_btn" ref={snowman} type="button" onClick={snowmanFun}>
            <div className="spr spr_name_snowman"></div>
          </button>

          <section className="obj obj_name_snowman-dec" ref={snowmanDec}>
            <div className="spr spr_name_snowman-dec"></div>
          </section>
        </div>

        <section className="overlay overlay_name_start" ref={startOverlay}>
          <div className="modal">
            <div className="modal__person">
              <div className="santa"></div>
              <h3>Jultomten</h3>
            </div>
            <p>
              GOD JUL NOAH!!
              <br />Jag har gömt din julklapp.
              <br />Kan du hitta den?
            </p>
            <button className="modal__btn js_scr_start" ref={start} type="button" onClick={startFun}>Start</button>
          </div>
        </section>

        <section className="overlay overlay_name_end overlay_state_disabled" ref={endOverlay}>
          <div className="modal">
            <div className="modal__person">
              <div className="santa"></div>
              <h3>Jultomten</h3>
            </div>
            <p>
              Bra jobbat! 🎄
              <br />Din o mammas julklapp är flygbiljetter,
              <br />för att komma o hälsa på oss i sommar!
              <br />(till ett värde upp till 1000kr)
            </p>
          </div>
        </section>

        <section className="snowflakes" aria-hidden="true">
          <div className="snowflake">❅</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
        </section>
      </main>

    </>
  )
}

export default IndexPage
