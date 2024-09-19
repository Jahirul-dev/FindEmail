// document.getElementById("para").innerHTML = "Para";

// let firstName = "Jahirul";
// let lastName = "Islam";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(firstName[0]);

// console.log(fullName.length);

// console.log(fullName.toUpperCase());

// console.log(fullName.toLowerCase());

let Dates = ["Jahirul.jitu@gmail.com", "Human", 43];

for (let i = 0; i < Dates.length; i++) {
  //   console.log(Dates[i]);
  console.log("................................................");

  for (let j = 0; j < Dates[i].length; j++) {
    // console.log(Dates[i][j]);
    if (Dates[i][j] == "@") {
      console.log("Email found in" + Dates[i]);
    }
  }
  //   console.log(Dates[i].length);
}
