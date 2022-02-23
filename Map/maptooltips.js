function ToolTipsproduct(id, data) {
  if (id.substring(0, 1) == "S") {
    data.shape[0].list.filter((p) => {
      if (p.ID == id) {
        let str =
          '<table class="tooltable" ><thead class="toolheader"<tr><td colspan="2" >' +
          p.text +
          "</td></tr></thead></table>" +
          '<table class="tooltable toolbody"><tbody>';

        Object.keys(p.property[0].content).forEach(function (key) {
          str +=
            "<tr>" +
            "<td><strong>" +
            key +
            "</strong></td>" +
            "<td >" +
            p.property[0].content[key] +
            "</td>" +
            "</tr>";
        });
        str +=
          "</tbody>" +
          "</table>" +
          "<table class='tooltable toolfooter'>" +
          "<tbody>";
        Object.keys(p.property[1].content).forEach(function (key) {
          if (key != "BattStatus") {
            str +=
              "<tr>" +
              "<td><strong>" +
              key +
              "</strong></td>" +
              "<td>" +
              p.property[1].content[key] +
              "</td>" +
              "</tr>";
          }
        });

        $("#contentdiv").text("");
        $("#contentdiv").append(str);

        productcss();
      }
    });
  } else {
    data.shape[3].list.filter((p) => {
      if (p.ID == id) {
        let str =
          '<table class="tooltable" ><thead class="toolheader"<tr><td colspan="2" >' +
          p.text +
          "</td></tr></thead></table>" +
          '<table class="tooltable toolbody"><tbody>';

        Object.keys(p.property[0].content).forEach(function (key) {
          str +=
            "<tr>" +
            "<td><strong>" +
            key +
            "</strong></td>" +
            "<td >" +
            p.property[0].content[key] +
            "</td>" +
            "</tr>";
        });
        str +=
          "</tbody>" +
          "</table>" +
          "<table class='tooltable toolfooter'>" +
          "<tbody>";
        Object.keys(p.property[1].content).forEach(function (key) {
          if (key != "BattStatus") {
            str +=
              "<tr>" +
              "<td><strong>" +
              key +
              "</strong></td>" +
              "<td>" +
              p.property[1].content[key] +
              "</td>" +
              "</tr>";
          }
        });

        $("#contentdiv").text("");
        $("#contentdiv").append(str);

        productcss();
      }
    });
  }
}
function productcss() {
  let p = data.format[0];
 
  //header
  $(".tooltable").css({ width: p.style[0].width });
  $(".toolheader td ").css({
    color: p.style[0].fontcolor,
    "font-size": p.style[0].fontsize,
    "font-family": p.style[0].fontfamily,
    "background-color": p.style[0].backgroundcolor,
  });

  let headclass = "";
  for (var i = 0; i < p.style[0].class.length; i++) {
    headclass = headclass + " " + p.style[0].class[i];
  }
  $(".toolheader td").attr("class", headclass);

  //body

  $(".toolbody td").css({
    color: p.style[1].fontcolor,
    "font-size": p.style[1].fontsize,
    "font-family": p.style[1].fontfamily,
    "background-color": p.style[1].backgroundcolor,

    "line-height": p.style[1].height,
  });

  $("#nav").css("border-right", "80px solid " + p.style[1].backgroundcolor);
  $(".note-current-fontname").text(p.style[1].fontfamily);
  $(".note-current-fontsize").text(p.style[1].fontsize);
  $(".note-current-height").text(p.style[1].height);

  var bodyclass = "";
  for (var i = 0; i < p.style[1].class.length; i++) {
    bodyclass = bodyclass + " " + p.style[1].class[i];
  }
  $(".toolbody td").attr("class", bodyclass);

  //foot
  $(".toolfooter td").css({
    color: p.style[2].fontcolor,
    "font-size": p.style[2].fontsize,
    "font-family": p.style[2].fontfamily,
    "background-color": p.style[2].backgroundcolor,

    "line-height": p.style[2].height,
  });

  $(".note-current-fontname").text(p.style[2].fontfamily);
  $(".note-current-fontsize").text(p.style[2].fontsize);
  $(".note-current-height").text(p.style[2].height);

  var footclass = "";
  for (var i = 0; i < p.style[2].class.length; i++) {
    footclass = footclass + " " + p.style[2].class[i];
  }
  $(".toolfooter td").attr("class", footclass);
}
