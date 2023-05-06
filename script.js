//БОНУС
//=====================================================================================
window.addEventListener("load", function () {
  for (let i = 0; i < 5; ++i) {
    $("#section1").append(
      `<input type="text" id="input${i}" placeholder="${i}"/>`
    );
  }

  $("#input0").on("input", function () {
    let str = $("#input0").val();
    $("#input1").val(str.slice(0, str.length - 1));
    $("#input2").val(str.slice(0, str.length - 2));
    $("#input3").val(str.slice(0, str.length - 3));
    $("#input4").val(str.slice(0, str.length - 4));
  });

  for (let i = 0; i < 5; ++i) {
    $("#section1").append("<br/>");
  }

  //HOME WORK
  //=======================================================================
  $("#section2").append("<h1>Registration Form</h1>").css({
    color: "white",
    "text-align": "center",
    "padding-top": "1px",
    margin: "auto",
  });
  $("#section2")
    .append("<div id='form'></div>")
    .css({ background: "blueviolet", width: "400px" });
  $("#section2")
    .append("<div id='input-wrap'></div>")
    .css({ background: "blue", padding: "30px" });
  $("#section2").append("<h3 id='h3'>disigned by freepik</h3>");

  $("#input-wrap")
    .append(
      '<input type="text" id="inputFirstName" placeholder="First name"/>',
      '<input type="text" id="inputLastName" placeholder="Last name"/>',
      '<input type="text" id="inputEmail" placeholder="Email"/>',
      '<input type="password" id="inputPassword" placeholder="Password"/>',
      '<div id="check-wrap"></div>',
      '<button id="btn">Register</button>'
    )
    .css({
      display: "flex",
      flexDirection: "column",
      background: "darkblue",
      padding: "30px",
    });

  $("#input-wrap > input").css({
    width: "300px",
    margin: "auto",
    "margin-top": "10px",
    height: "30px",
    "border-top-left-radius": "10%",
    "border-top-right-radius": "10%",
    "border-bottom-left-radius": "10%",
    "border-bottom-right-radius": "10%",
  });

  $("#check-wrap")
    .append(
      `<input type="checkbox" id="check" />`,
      `<h6>Lorem Ipsum dolor sit amot consecterese Lorem Ipsum dolor consectereseLorem Ipsum dolor sit amot consectereseL</h6>`,
      `<input type="checkbox" id="check" />`,
      `<h6> Wolor Ipsum dolor sit amot Loremconsecterese Lorem Ipsum consectereseLorem IpsumconsectereseL dolor sit amot </h6>`
    )
    .css({
      display: "flex",
      flexDirection: "row",
      width: "310px",
      margin: "auto",
    });

  $("#btn").css({
    background: "yellowgreen",
    width: "100px",
    height: "40px",
    borderRadius: "20%",
    marginLeft: "65%",
    color: "yellow",
  });

  //LOGICS PART==================================

  $("#btn").click(() => {
    const firstName = $("#inputFirstName").val();
    const lastName = $("#inputLastName").val();
    const email = $("#inputEmail").val();
    const password = $("#inputPassword").val();

    if (firstName.length < 3 || lastName.length < 3) {
      alert(`You entered an invalid name`);
      $("#inputFirstName").val("");
      return {};
    }

    if (
      email.length < 6 ||
      email.includes(".") === false ||
      email.includes("@") === false
    ) {
      alert(`You entered an invalid email`);
      $("#inputEmail").val("");
      console.log(email, "EMAIL");
      return console.error("Entered an invalid email");
    }

    if (password.length < 10 && checkNumber(password) === false) {
      alert(`You entered an invalid password`);
      $("#inputFirstName").val("");
      return console.error("Entered an invalid password");
    }

    console.group("USER");
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.groupEnd();
  });

  function checkNumber(str) {
    let res = true;
    for (let el in str) {
      Number.isNaN(el) && (res = false);
    }
    return res;
  }
});
