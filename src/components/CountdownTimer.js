import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
// import countdown from "dayjs/plugin/countdown";
dayjs.extend(duration);
// dayjs.extend(countdown);

const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(
    dayjs.duration(dayjs(endDate).diff(dayjs()))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(dayjs.duration(dayjs(endDate).diff(dayjs())));
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  if (timeLeft.asSeconds() <= 0) {
    return (
      <div className="inline-flex items-center rounded-full bg-yellow-500 px-4 py-2 text-white">
        Time's up!
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full bg-yellow-500 px-4 py-2">
      <div className="mr-1 font-medium text-white">{timeLeft.format("HH")}</div>
      <span className="mr-1 font-medium text-white">:</span>
      <div className="mr-1 font-medium text-white">{timeLeft.format("mm")}</div>
      <span className="mr-1 font-medium text-white">:</span>
      <div className="font-medium text-white">{timeLeft.format("ss")}</div>
    </div>
  );
};

export default CountdownTimer;
