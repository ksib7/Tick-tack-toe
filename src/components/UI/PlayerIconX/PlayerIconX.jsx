import React, { useState } from "react";

import "./PlayerIconX.scss";

export const PlayerIconX = ({ Xscores }) => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="modal">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024.000000 1024.000000"
        className="modal__svg"
        onClick={() => setStatus(!status)}
      >
        <g
          transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M4880 9409 c-292 -38 -515 -105 -755 -229 -559 -287 -983 -820 -1126
-1415 -143 -597 -37 -1213 296 -1715 162 -244 381 -462 628 -625 32 -21 54
-41 50 -45 -4 -4 -37 -15 -73 -24 -225 -60 -512 -168 -745 -281 -888 -431
-1613 -1149 -2055 -2034 -315 -631 -470 -1295 -470 -2013 l0 -218 4485 0 4485
0 0 218 c0 1052 -340 2016 -1001 2837 -533 662 -1261 1165 -2074 1433 -82 27
-175 55 -205 62 -30 8 -59 17 -63 20 -4 4 23 27 60 51 154 100 349 275 478
429 204 244 363 564 439 881 99 416 73 857 -75 1254 -249 666 -806 1172 -1494
1355 -232 61 -570 87 -785 59z m475 -473 c241 -37 420 -100 625 -220 286 -167
523 -422 671 -723 236 -480 234 -1033 -6 -1515 -458 -922 -1625 -1232 -2481
-660 -510 341 -809 958 -755 1554 21 234 71 419 166 613 122 249 293 457 510
621 232 175 486 282 780 329 109 17 379 18 490 1z m240 -3900 c601 -80 1102
-254 1605 -559 288 -174 533 -370 785 -628 205 -210 320 -352 473 -581 290
-434 489 -910 596 -1423 41 -197 86 -565 69 -565 -42 0 -8001 0 -8011 0 -15 0
-12 53 14 262 86 690 363 1370 788 1928 163 215 475 537 671 693 421 336 834
558 1330 717 277 88 548 140 910 174 105 10 657 -3 770 -18z"
          />
        </g>
      </svg>
      {status ? (
        <div className="modal__form">
          <input
            className="modal__input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <button
            style={{ width: "37px", alignSelf: "end" }}
            onClick={() => setStatus(!status)}
          >
            Save
          </button>
        </div>
      ) : (
        <p onClick={() => setStatus(!status)} className="modal__name">
          {!value ? "Name" : value}: {Xscores}
        </p>
      )}
      <p style={{ color: "blue" }} className="modal__turn">
        X
      </p>
    </div>
  );
};
