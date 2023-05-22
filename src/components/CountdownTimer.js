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
    <div className="inline-flex items-center rounded-full px-4 py-2">
      <div className="py-.75 mr-1 bg-gray-400  px-1 font-medium text-white">
        {timeLeft.format("HH")}{" "}
      </div>

      <div className="font-family-cursive">Hrs</div>
      <span className="mr-1 font-medium  text-white">:</span>
      <div className="py-.75 mr-1 bg-gray-400 px-1 font-medium text-white">
        {timeLeft.format("mm")}
      </div>
      <div className="font-family-cursive">Min</div>
      <span className="mr-1 font-medium text-white">:</span>
      <div className="py-.75 mr-1 bg-gray-400 px-1 font-medium text-white">
        {timeLeft.format("ss")}
      </div>
      <div className="font-family-cursive">Sec</div>
    </div>
  );
};

export default CountdownTimer;
