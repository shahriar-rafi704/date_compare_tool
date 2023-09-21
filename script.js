let result = document.getElementById("result");
let btn = document.getElementById("check");
let clearBtn = document.getElementById("clear");

btn.addEventListener("click", () => {
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  if (isNaN(date1) || isNaN(date2)) {
    result.innerHTML = "<span><b>Enter valid dates</b></span>";
  } else {
    if (date1 > date2) {
      let yearDiff = date1.getFullYear() - date2.getFullYear();
      let monthDiff = date1.getMonth() - date2.getMonth();
      let dayDiff = date1.getDate() - date2.getDate();
      if (dayDiff < 0) {
        monthDiff -= 1;
        dayDiff += new Date(
          date1.getFullYear(),
          date1.getMonth(),
          0
        ).getDate();
      }
      if (monthDiff < 0) {
        yearDiff -= 1;
        monthDiff += 12;
      }

      result.innerHTML = `Date 1 is <b>greater</b> than Date 2 by <u><b>${yearDiff} years, ${monthDiff} months, and ${dayDiff} days</u></b>.`;
    } else if (date1 < date2) {
      let yearDiff = date2.getFullYear() - date1.getFullYear();
      let monthDiff = date2.getMonth() - date1.getMonth();
      let dayDiff = date2.getDate() - date1.getDate();

      if (dayDiff < 0) {
        monthDiff -= 1;
        dayDiff += new Date(
          date2.getFullYear(),
          date2.getMonth(),
          0
        ).getDate();
      }
      if (monthDiff < 0) {
        yearDiff -= 1;
        monthDiff += 12;
      }

      result.innerHTML = `Date 2 is <b>greater</b> than Date 1 by <u><b>${yearDiff} years, ${monthDiff} months, and ${dayDiff} days</u></b>.`;
    } else if (date1.getTime() === date2.getTime()) {
      result.innerHTML = "Date 1 is <b>equal</b> to Date 2";
    }
  }
});

clearBtn.addEventListener("click", () => {
  document.getElementById("date-1").value = "";
  document.getElementById("date-2").value = "";
  result.innerHTML = "Input Dates to Start";
});