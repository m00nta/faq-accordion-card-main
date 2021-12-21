"use strict";

const quetionsFAQ = document.querySelectorAll(".accordion-list");

const remove = function () {
  quetionsFAQ.forEach((question) => question.classList.remove("active"));
};

quetionsFAQ.forEach((question) => {
  question.addEventListener("click", function () {
    remove();
    question.classList.toggle("active");
  });
});
