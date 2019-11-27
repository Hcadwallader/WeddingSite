import React, {useEffect} from "react";
import "./Timer.scss";
import "../../styles/App.scss"

const Timer = () => {

    const countdown = (endDate) => {
        let days, hours, minutes, seconds = 0;

        endDate = new Date(endDate).getTime();
        if (isNaN(endDate)) {
            return;
        }

        const calculate = () => {
            let startDate = new Date().getTime();

            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);

                seconds = parseInt(timeRemaining);

                document.getElementById("days").innerHTML = parseInt(days, 10);
                document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
                document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
                document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
            } else {
                return;
            }
        }
        setInterval(calculate, 1000);
    }

    useEffect(() => {
        countdown('08/22/2020 02:00:00 PM');
    }, [""]);

  return (
      <React.Fragment>
          <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong id="days"></strong>
              <span>days</span>
          </span>
        </span>

              <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong id="hours"></strong>
            <span>hours</span>
          </span>
        </span>


              <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong id="minutes"></strong>
            <span>minutes</span>
          </span>
        </span>

              <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong id="seconds"></strong>
            <span>seconds</span>
          </span>
        </span>
          </div>
  </React.Fragment>
  );
};

export default Timer;