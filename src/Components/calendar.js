import React, { useState } from "react";
import "./cal.scss";
import moment from "moment";

const WeekName = () => {
  return (
    <div className="week-name">
      <div>sun</div>
      <div>mon</div>
      <div>tue</div>
      <div>wed</div>
      <div>thu</div>
      <div>fri</div>
      <div>sat</div>
    </div>
  );
};

const WeekDay = ({ start }) => {
  let items = Array(7).fill("");
  let temp = start;
  const DateData = items.map((_, index) => {
    let today = "";
    if (index === 0) {
      temp = temp.clone();
    } else {
      temp = temp.clone().add(1, "day");
    }
    if (moment().format("YYYY-MM-DD") === temp.format("YYYY-MM-DD"))
      today = "text-today";

    return { date: temp, today };
  });
  const dayClicked = (val) => {
    console.log("clicked", val.format("DD/MM/YYYY"));
  };
  return (
    <div className="date">
      {DateData.map((item, i) => (
        <div
          key={i}
          className={`day ${item.today}`}
          onClick={() => dayClicked(item.date)}
        >
          <span className={`text-label`}>{item.date.format("D")}</span>
        </div>
      ))}
    </div>
  );
};

const WeekDays = ({ currDate }) => {
  const week = currDate
    .clone()
    .startOf("month")
    .add("w" - 1)
    .day("sunday");
  console.log("week", week.format("DD"));

  const items = [
    <WeekDay start={week.clone()} />,
    <WeekDay start={week.add(1, "w").clone()} />,
    <WeekDay start={week.add(1, "w").clone()} />,
    <WeekDay start={week.add(1, "w").clone()} />,
    <WeekDay start={week.add(1, "w").clone()} />,
    <WeekDay start={week.add(1, "w").clone()} />,
  ];
  return items;
};

const Calendar = () => {
  const currDate = moment();
  const monthName = currDate.format("MMM");
  const year = currDate.format("YYYY");

  const [headerData, setHearderData] = useState({ monthName, year, currDate });
  //console.log("moment now", monthName, year);
  const prevDate = () => {
    let { monthName, year, currDate } = headerData;
    currDate.subtract(1, "month");
    year = currDate.format("YYYY");
    monthName = currDate.format("MMM");
    setHearderData({ monthName, year, currDate });
    console.log(currDate.format("MMMM"));
  };

  const nextDate = () => {
    let { monthName, year, currDate } = headerData;
    currDate.add(1, "month");
    year = currDate.format("YYYY");
    monthName = currDate.format("MMM");
    setHearderData({ monthName, year, currDate });
    console.log(currDate.format("MMMM"));
  };
  const headData = headerData.monthName + ", " + headerData.year;
  return (
    <>
      <div className="calendar-container">
        <div className="cal-header">
          <button className="left-btn" onClick={prevDate}>
            <i className="fas fa-angle-left" />
          </button>
          <div>{headData}</div>
          <button className="right-btn" onClick={nextDate}>
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
        <div className="cal-body">
          <WeekName />
          <WeekDays currDate={headerData.currDate} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
