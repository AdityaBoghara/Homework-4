function getTheData() {
  var formcontents = document.getElementById("form");
  var formoutput;
  var datatype;
  var i;
  formoutput =
    "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
    console.log(
      "item: " +
        i +
        " " +
        formcontents.elements[i].name +
        " = " +
        formcontents.elements[i].value
    );
    //if (formcontents.elements[i].value !="") {
    datatype = formcontents.elements[i].type;
    switch (datatype) {
      case "checkbox":
        if (formcontents.elements[i].checked) {
          formoutput =
            formoutput +
            "<tr><td align='right'>" +
            formcontents.elements[i].value +
            "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked) {
          formoutput =
            formoutput +
            "<tr><td align='right'>" +
            formcontents.elements[i].name +
            "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput =
            formoutput +
            "<td class='outputdata'>" +
            formcontents.elements[i].value +
            "</td></tr>";
        }
        break;
      case "button":
      case "submit":
      case "reset":
        formoutput =
          formoutput +
          "<tr><td align='right'>" +
          formcontents.elements[i].name +
          "</td>";
        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
        formoutput =
          formoutput +
          "<td class='outputdata'>" +
          formcontents.elements[i].value +
          "</td></tr>";
        break;
      default:
        formoutput =
          formoutput +
          "<tr><td align='right'>" +
          formcontents.elements[i].name +
          "</td>";
        formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
        formoutput =
          formoutput +
          "<td class='outputdata'>" +
          formcontents.elements[i].value +
          "</td></tr>";
    }
  }

  if (formoutput.length > 0) {
    formoutput = formoutput + "</table>";
    document.getElementById("outputformdata").innerHTML = formoutput;
  }
}
