// Select HTML Element

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const ampmElement = document.getElementById("ampm");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");

// Days & Months

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Update Clock Function

function updateClock() {
  // Get current date and time

  const now = new Date();

  // Get Hours, Minutes and Second

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Am / Pm

  const ampm = hours >= 12 ? "PM" : "AM";

  // Covert 12 Hours Format

  hours = hours % 12;

  hours = hours === 0 ? 12 : hours;

  // Add Leading Zero

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Update Time

  hoursElement.textContent = formattedHours;
  minutesElement.textContent = formattedMinutes;
  secondsElement.textContent = formattedSeconds;

  ampmElement.textContent = ampm;

  // Update Day

  const currentDay = days[now.getDay()];

  dayElement.textContent = currentDay;

  // Update Date

  const currentDate = now.getDate();
  const currentMonth = months[now.getMonth()];
  const currentYear = now.getFullYear();

  dateElement.textContent = `${currentMonth} ${currentDate}, ${currentYear}`;
}

// Run Clock Immediately

updateClock();

// Update Every Second

setInterval(updateClock, 1000);
