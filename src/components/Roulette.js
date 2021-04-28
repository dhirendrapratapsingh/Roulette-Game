import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import swal from 'sweetalert';

const Prizes = [
 
  {
    option: "1.5X Savings",
    style: { backgroundColor: "#742544", textColor: "#e2d2d8" },
  },
  {
    option: "2X Bonus",
    style: { backgroundColor: "#551b31", textColor: "#e9e1e4" },
  },
  {
    option: "₹20000 💸",
    style: { backgroundColor: "#65203a", textColor: "#e9dfe3" },
  },
  {
    option: "₹500 💸",
    style: { backgroundColor: "#832a4a", textColor: "#e5d2da" },
  },
  {
    option: "Better luck next time!",
    style: { backgroundColor: "#832a4a", textColor: "#e5d2da"  },
  },
  {
    option: "₹50000 💸",
    style: { backgroundColor: "#65203a", textColor: "#e9dfe3" },
  },
  {
    option: "2X Savings",
    style: { backgroundColor: "#742544", textColor: "#e2d2d8" },
  },
  {
    option: "₹10000 Cashback",
    style: { backgroundColor: "#551b31", textColor: "#e9e1e4" },
  },
];

export default function Spinner() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [trialCounter, setTrialCounter] = useState(0);


  const updateSpreadSheet = () => {  // Post Data to Google Spreadsheet

    var applicationType = navigator.userAgentData.mobile ? "mobile Browser" : "web Broser"; 
    //navigator.userAgentData.mobile is Browser's default variable which tell the platform is mobile of not

    var data = {
      majorDimension: "ROWS",
      values: [[applicationType, new Date().toISOString(), prizeNumber]], //A new row with 3 column data shall be added into Spreadsheet
    };

    window.updateSheet(data);

    // not required as API itself is not working the problem faced is well explained in Read me
    // axios.post(
    //     `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append`,
    //     data
    //   )
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       console.log('data sent');
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  

  };


  const handleSpinStop = () => {
    setMustSpin(false);
    console.log('Spinnig stopped the prize won is '+prizeNumber);

    if (prizeNumber !== 4) { // Since 4 is for the unlucky ones
      swal({
        title: 'Congratulations! You have won '+Prizes[prizeNumber].option+'!',
        text: 'With ' + trialCounter + ' steps ',
        icon: "success",
        button: "Play again!",
        allowEscapeKey: false,
       allowOutsideClick: false,
      });
    }

  };

  const handleSpinClick = () => {

    const newPrizeNumber = Math.floor(Math.random() * Prizes.length);
    console.log(newPrizeNumber);

    if (!mustSpin) { //if its not spinning, this prevent counter incremts, API call on back to back clicks
      setPrizeNumber(newPrizeNumber);
      setTrialCounter((prevCount)=> prevCount+1)
      setMustSpin(true);
      updateSpreadSheet();    
    }    
  
  };


  return (
    <>
      <header>
        <h1>Roulette Game</h1>
      </header>
      <div className="container">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={Prizes}
          fontSize={16}
          outerBorderColor={"#dad9d6"}
          radiusLineColor={"#65203a"}
          onStopSpinning={handleSpinStop}
        />
      </div>

      <button id="spinbutton" onClick={handleSpinClick}>
        <span>Spin</span>
      </button>

      <div className="container card">
        <h2 >Spin the wheel now to get rewarded</h2>
        <p style={{ fontSize: "1rem", color: "#7d7d7d" }}>
          Tap on Spin  to start spinning
        </p>
          You have tried your luck <span className="moves">{trialCounter}</span> times
      </div>
      <a style={{ color: "#e3ef31f0", textDecoration:'none', fontWeight:'bold' }} href="https://www.npmjs.com/package/react-custom-roulette" target="_blank" rel="noopener noreferrer">
        Have a question? Get Help
      </a>
    </>
  );
}
