function createMap(svgid, divid, data) {
  $("#" + svgid + " .pointC").hide();

  $("#" + divid).text("");
  $("#" + divid).append(
    '<div id="containdiv" style="display: none;">' +
      '<div id="contentdiv">' +
      "</div>" +
      '<div id = "nav" >' +
      "</div>" +
      "</div>"
  );

  ToolTipsproduct("S-900001", data);

  LocationDetermination("S-900001");
}
function LocationDetermination(id) {
  var constyle = document.getElementById("containdiv").style;
  var navstyle = document.getElementById("nav").style;

  if (constyle.display === "none") {
    navstyle.top = "auto"; //初始化
    navstyle.bottom = "auto";
    navstyle.left = "auto";
    navstyle.right = "auto";

    var a = 30;
    var dom = d3.select("#" + id);
    var wintop;
    var winleft;
    if (id.substring(0, 1) == "S") {
      wintop = parseFloat(dom.attr("y"));
      winleft = parseFloat(dom.attr("x"));

      constyle.top = wintop + 20 + "px";
      constyle.left = winleft + 150 + "px";
      navstyle.left = "-72px";
      navstyle.top = "70px";
    } else {
      wintop = parseFloat(dom.attr("cy"));
      winleft = parseFloat(dom.attr("cx"));

      constyle.top = wintop + 20 + "px";
      constyle.left = winleft + 120 + "px";
      navstyle.left = "-72px";
      navstyle.top = "50px";
    }

    //var wintop = parseInt($('#' + id + 'c3').attr('cy'));
    // offset相对父级元素偏移
    //var winleft = parseInt($('#' + id + 'c3').attr('cx'));

    constyle.display = "";
  } else {
    constyle.display = "none";
  }

  $("#" + svgid + " rect")
    .unbind()
    .click(function () {
      var str = $(this).attr("id");

      ToolTipsproduct(str, data);

      LocationDetermination(str);
    });

  $("#" + svgid + " circle")
    .unbind()
    .click(function () {
      var str = $(this).attr("id");

      ToolTipsproduct(str, data);

      LocationDetermination(str);
    });
}
