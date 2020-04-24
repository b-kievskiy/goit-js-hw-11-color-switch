"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSetter = {
  isBtnStart: false,

  handlerStartBtn() {
    if (this.isBtnStart) {
      return;
    }
    this.isBtnStart = true;
    this.intervalId = setInterval(() => {
      body.bgColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },

  handlerStopBtn() {
    clearInterval(this.intervalId);
    this.isBtnStart = false;
  },
};

const body = document.querySelector("body");
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
start.addEventListener("click", colorSetter.handlerStartBtn.bind(colorSetter));
stop.addEventListener("click", colorSetter.handlerStopBtn.bind(colorSetter));
