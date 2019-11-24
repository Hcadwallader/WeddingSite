import React, {useEffect} from "react";

const Timer = () => {

    const countdown = (endDate) => {
        let days, hours, minutes, seconds;

        endDate = new Date(endDate).getTime();
        console.log('endDate: ' + endDate);
        if (isNaN(endDate)) {
            return;
        }

        const calculate = () => {
            let startDate = new Date().getTime();
            console.log('start date: ' + startDate);

            let timeRemaining = parseInt((endDate - startDate) / 1000);
            console.log('time Remaining: ' + timeRemaining);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                console.log('days: ' + days);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                console.log('hours: ' + hours);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                console.log('minutes: ' + minutes);
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
          <div className="countdown">
              <p className="timer">
                  <span id="days"></span> Days
                  <span id="hours"></span> Hours
                  <span id="minutes"></span> Minutes
                  <span id="seconds"></span> Seconds
              </p>
          </div>
  </React.Fragment>
  );
};

export default Timer;