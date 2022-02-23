function loadline(divId, id) {
  $("#recttext").hide();
  $("#defaultstyle").text("");
  $("#defaultstyle").html(
    '<div class="alert alert-info"><form><label class= "checkbox-inline" id = "Linedefaultcheckbox" ><strong>Use the Line Template</strong></label ></form ></div>'
  );
  $("#defaultstyle").show();

  $(divId + "-buttongroup").text("");
  $(divId + "-buttongroup").append(
    '<button id="linedefault" class="btn btn-default btn-delete">Set as Default</button>' +
      "&nbsp;" +
      "&nbsp;" +
      "&nbsp;" +
      '<button id="Psave" class="btn btn-default btn-delete">Save</button><br></br>'
  );
  DefaultSite(divId, id);
  setLineData(id);
  function DefaultSite(divId, id) {
    $(divId).text("");

    $(divId).append(
      '<div class="lineid">' +
        id +
        "</div><br>" +
        '<table class="linedetail"><tbody>' +
        "<tr>" +
        "<td><strong>X1, Y1</strong></td>" +
        "<td >" +
        '<input class="linepostion linex1" style="text-align: left" type="number" value="5" />' +
        "&nbsp" +
        '<input class="linepostion liney1" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>X2, Y2</strong></td>" +
        "<td >" +
        '<input class="linepostion linex2" style="text-align: left" type="number" value="5" />' +
        "&nbsp" +
        '<input class="linepostion liney2" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Width</strong></td>" +
        "<td >" +
        '<input class="linewidth linetext" style="text-align: left" type="number" value="15" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Color</strong></td>" +
        "<td >" +
        '<input class="linecolortext" style="text-align: left" type="text" id="ok" value="#40403f" />' +
        '<input class="linecolorinput" type="color" id="favcolor" name="favcolor" value="#40403f" size="18">' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Dash Type</strong></td>" +
        "<td >" +
        '<button class="linebtn lineshow" type="button" >' +
        '<svg height="20" width="100"><g fill= "none" stroke= "black" stroke-width="4" ><path stroke-dasharray="5,5" d="M5 10 l215 0" />' +
        "</button>" +
        '<div class="dropdown">' +
        ' <button class="linebtn1" style="border-left:1px solid #0d8bf2">' +
        '  <i class="note-icon-caret"></i>' +
        " </button>" +
        ' <div class="dropdown-content linedrop">' +
        '  <a class="linestyle1"> <svg height="20" width="100" > <g fill="none" stroke="black" stroke-width="4" ><path  stroke-dasharray="" d="M5 10 l215 0" ></g></svg></a>' +
        '  <a class="5,5"> <svg height = "20" width = "100" > <g fill="none" stroke="black" stroke-width="4" ><path stroke-dasharray="5,5" d="M5 10 l215 0" ></g></svg></a>' +
        '<a class="10,10"><svg height = "20" width = "100" > <g fill="none" stroke="black" stroke-width="4" ><path stroke-dasharray="10,10" d="M5 10 l215 0" ></g></svg></a>' +
        '<a class="20,10,5,5,5,10"><svg height = "20" width = "100" > <g fill="none" stroke="black" stroke-width="4" ><path stroke-dasharray="20,10,5,5,5,10" d="M5 10 l215 0" ></g></svg></a>' +
        "</div>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>End Arrow Type</strong></td>" +
        "<td >" +
        '<button class="linebtn EAshow" type="button" >' +
        '<svg height = "20" width = "100" > ' +
        ' <defs><marker id = "EndArrowTriangle1" viewBox = "0 0 10 10" refX = "0" refY = "5" markerUnits = "strokeWidth" markerWidth = "20"markerHeight = "20" orient = "auto" ><path d="M 0 0 L 10 5 L 0 10 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 60,10  " marker-end="url(#EndArrowTriangle1)" />' +
        "</svg>" +
        "</button>" +
        '<div class="dropdown">' +
        ' <button class="linebtn1" style="border-left:1px solid #0d8bf2">' +
        '  <i class="note-icon-caret"></i>' +
        " </button>" +
        ' <div class="dropdown-content EAdrop">' +
        '  <a> <svg height = "20" width = "100" > ' +
        ' <defs><marker id = "Nothing" viewBox = "0 0 10 10" refX = "0" refY = "5" markerUnits = "strokeWidth" markerWidth = "20"markerHeight = "20" orient = "auto" ><path d="M 0 0 L 10 5 L 0 10 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 70,10 "  />' +
        "</svg></a>" +
        '  <a> <svg height = "20" width = "100" > ' +
        ' <defs><marker id = "EndArrowTriangle1" viewBox = "0 0 10 10" refX = "0" refY = "5" markerUnits = "strokeWidth" markerWidth = "20"markerHeight = "20" orient = "auto" ><path d="M 0 0 L 10 5 L 0 10 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 60,10  " marker-end="url(#EndArrowTriangle1)" />' +
        "</svg></a>" +
        '  <a> <svg height="20" width="100" >' +
        ' <defs> <marker id = "EndArrowTriangle2" viewBox = "0 0 10 10" refX = "5" refY = "5" markerUnits = "strokeWidth" markerWidth = "20" markerHeight = "20" orient = "auto" ><path d="M 0 0 L 10 5 L 0 10 L 5 5 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 70,10 " marker-end="url(#EndArrowTriangle2)" />' +
        " </svg></a>" +
        '<a><svg height = "20" width = "100" >' +
        '<defs><marker id = "EndArrowTriangle3" viewBox = "0 0 10 10" refX = "5" refY = "5" markerUnits = "strokeWidth" markerWidth = "20" markerHeight = "20" orient = "auto" ><polyline points="0 0, 5 5, 0 10" fill="none" stroke="#40403f" />    </marker ></defs ><polyline fill="none" stroke="black" points="20,10 70,10 " marker-end="url(#EndArrowTriangle3)" />' +
        "</svg></a>" +
        '<a><svg height = "20" width = "100" >' +
        '<defs><marker id = "EndArrowCircle01" viewBox = "0 0 10 10" markerWidth = "15" markerHeight = "15" refX = "5" refY = "5" orient = "auto" ><circle cx="5" cy="5" r="4" fill="#40403f" /></defs ><polyline fill="none" stroke="#40403f" points="20,10 70,10 " marker-end="url(#EndArrowCircle01)" />' +
        "</svg></a>" +
        "</div>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<tr>" +
        "<td><strong>End Arrow Size</strong></td>" +
        "<td> " +
        '<input class="linetext EAStext" style="text-align: left" type="number" value="10" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<tr>" +
        "<td><strong>Begin Arrow Type</strong></td>" +
        "<td >" +
        '<button class="linebtn BAshow" type="button" >' +
        '<svg height = "20" width = "100" >' +
        '<defs><marker id = "StartArrowCircle01" viewBox = "0 0 10 10" markerWidth = "15" markerHeight = "15" refX = "5" refY = "5" orient = "auto-start-reverse" ><circle cx="5" cy="5" r="4" fill="#40403f" /></defs ><polyline fill="none" stroke="#40403f" points="20,10 70,10 " marker-start="url(#StartArrowCircle01)" />' +
        "</svg>" +
        "</button>" +
        '<div class="dropdown">' +
        ' <button class="linebtn1" style="border-left:1px solid #0d8bf2">' +
        '  <i class="note-icon-caret"></i>' +
        " </button>" +
        ' <div class="dropdown-content BAdrop">' +
        '  <a> <svg height = "20" width = "100" > ' +
        ' <defs><marker id = "Nothing" viewBox = "0 0 10 10" refX = "0" refY = "5" markerUnits = "strokeWidth" markerWidth = "20"markerHeight = "20" orient = "auto" ><path d="M 0 0 L 10 5 L 0 10 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 70,10 "  />' +
        "</svg></a>" +
        '  <a> <svg height = "20" width = "100" > ' +
        ' <defs><marker id = "StartArrowTriangle1" viewBox = "0 0 10 10" refX = "0" refY = "5" markerUnits = "strokeWidth" markerWidth = "20"markerHeight = "20" orient = "auto-start-reverse" ><path d="M 0 0 L 10 5 L 0 10 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="30,10 70,10  " marker-start="url(#StartArrowTriangle1)" />' +
        "</svg></a>" +
        '  <a> <svg height="20" width="100" >' +
        ' <defs> <marker id = "StartArrowTriangle2" viewBox = "0 0 10 10" refX = "5" refY = "5" markerUnits = "strokeWidth" markerWidth = "20" markerHeight = "20" orient = "auto-start-reverse" ><path d="M 0 0 L 10 5 L 0 10 L 5 5 Z" fill="#40403f" /></marker ></defs ><polyline fill="none" stroke="black" points="20,10 70,10 " marker-start="url(#StartArrowTriangle2)" />' +
        " </svg></a>" +
        '<a><svg height = "20" width = "100" >' +
        '<defs><marker id = "StartArrowTriangle3" viewBox = "0 0 10 10" refX = "5" refY = "5" markerUnits = "strokeWidth" markerWidth = "20" markerHeight = "20" orient = "auto-start-reverse" ><polyline points="0 0, 5 5, 0 10" fill="none" stroke="#40403f" />    </marker ></defs ><polyline fill="none" stroke="black" points="15,10 70,10 " marker-start="url(#StartArrowTriangle3)" />' +
        "</svg></a>" +
        '<a><svg height = "20" width = "100" >' +
        '<defs><marker id = "StartArrowCircle01" viewBox = "0 0 10 10" markerWidth = "15" markerHeight = "15" refX = "5" refY = "5" orient = "auto-start-reverse" ><circle cx="5" cy="5" r="4" fill="#40403f" /></defs ><polyline fill="none" stroke="#40403f" points="20,10 70,10 " marker-start="url(#StartArrowCircle01)" />' +
        "</svg></a>" +
        "</div>" +
        "</div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<tr>" +
        "<td><strong>Begin Arrow Size</strong></td>" +
        "<td >" +
        '<input class="linetext BAStext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "</tbody>" +
        "</table>"
    );
  }

  function SetcircleAndLineposition(id) {
    var x1 = parseInt($("#" + id).attr("x1"));
    var y1 = parseInt($("#" + id).attr("y1"));
    var x2 = parseInt($("#" + id).attr("x2"));
    var y2 = parseInt($("#" + id).attr("y2"));

    $("#" + id + "c1")
      .attr("cx", x1)
      .attr("cy", y1);
    $("#" + id + "c2")
      .attr("cx", x2)
      .attr("cy", y2);
  }

  function setLineData(id) {
    $(".linex1").val($("#" + id).attr("x1"));
    $(".liney1").val($("#" + id).attr("y1"));
    $(".linex2").val($("#" + id).attr("x2"));
    $(".liney2").val($("#" + id).attr("y2"));

    $(".linewidth").val(
      $("#" + id)
        .attr("stroke-width")
        .substring(0, 1)
    );
    $(".linecolortext").val($("#" + id).attr("stroke"));
  }

  $("#Linedefaultcheckbox").click(function () {
    if (data.format[4].style.width.length != 0) {
      $("#" + id).attr("stroke-width", data.format[4].style.width);
      $("#" + id).attr("stroke", data.format[4].style.color);

      let EndarrowIDTemp = $("#" + id)
        .attr("marker-end")
        .slice(5);
      let EndarrowID = EndarrowIDTemp.substring(0, EndarrowIDTemp.length - 1);

      $("#" + EndarrowID).attr(
        "markerWidth",
        data.format[4].style.endarrowsize
      );
      $("#" + EndarrowID).attr(
        "markerHeight",
        data.format[4].style.endarrowsize
      );
      let StartarrowIDTemp = $("#" + id)
        .attr("marker-start")
        .slice(5);
      let StartarrowID = StartarrowIDTemp.substring(
        0,
        StartarrowIDTemp.length - 1
      );

      $("#" + StartarrowID).attr(
        "markerWidth",
        data.format[4].style.beginarrowsize
      );
      $("#" + StartarrowID).attr(
        "markerHeight",
        data.format[4].style.beginarrowsize
      );

      $(".linex1").val($("#" + id).attr("x1"));
      $(".liney1").val($("#" + id).attr("y1"));
      $(".linex2").val($("#" + id).attr("x2"));
      $(".liney2").val($("#" + id).attr("y2"));

      syncolor(id, data.format[4].style.color);
      SetcircleAndLineposition(id);
    }
  });

  let EndarrowID = $("#" + id)
    .attr("marker-end")
    .slice(5)
    .substring(
      0,
      $("#" + id)
        .attr("marker-end")
        .slice(5).length - 1
    );

  let StartarrowID = $("#" + id)
    .attr("marker-start")
    .slice(5)
    .substring(
      0,
      $("#" + id)
        .attr("marker-start")
        .slice(5).length - 1
    );

  //x1,y1 x2,y2
  $(".linex1").blur(function () {
    $("#" + id).attr("x1", $(".linex1").val());
    SetcircleAndLineposition(id);
  });
  $(".liney1").blur(function () {
    $("#" + id).attr("y1", $(".liney1").val());
    SetcircleAndLineposition(id);
  });
  $(".linex2").blur(function () {
    $("#" + id).attr("x2", $(".linex2").val());
    SetcircleAndLineposition(id);
  });
  $(".liney2").blur(function () {
    $("#" + id).attr("y2", $(".liney2").val());
    SetcircleAndLineposition(id);
  });

  $(".linetext").blur(function () {
    $("#" + id).attr("stroke-width", $(".linetext").val());
  });

  $(".linecolorinput").change(function () {
    $(".linecolortext").val($(".linecolorinput").val());

    $("#" + id).attr("stroke", $(".linecolortext").val());
    //syn color
    syncolor(id, $(".linecolortext").val());

   
  });
  $(".linecolortext").blur(function () {
    $("#" + id).attr("stroke", $(".linecolortext").val());

    $("#" + id + "end-arrow path").attr("fill", $(".linecolortext").val());
  });

  $(".linedrop a").click(function () {
    let dash = $(this)
      .children("svg")
      .children("g")
      .children("path")
      .attr("stroke-dasharray");

    $("#" + id).attr("stroke-dasharray", dash);
    $(".lineshow").html($(this).html());
  });

  $(".EAdrop a").click(function () {
    let arrowID = $(this)
      .children("svg")
      .children("defs")
      .children("marker")
      .attr("id");
    $("#" + id).attr("marker-end", "url(#" + id + arrowID + ")");

    //syn color
    if (
      $("#" + id + arrowID)
        .children(0)
        .attr("fill") != "none"
    ) {
      $("#" + id + arrowID)
        .children(0)
        .attr("fill", $(".linecolortext").val());
    } else {
      $("#" + id + arrowID)
        .children(0)
        .attr("stroke", $(".linecolortext").val());
    }
    //syn color end

    $(".EAshow").html($(this).html());
  });

  $(".EAStext").blur(function () {
    let arrowIDTemp = $("#" + id)
      .attr("marker-end")
      .slice(5);
    let arrowID = arrowIDTemp.substring(0, arrowIDTemp.length - 1);

    $("#" + arrowID).attr("markerWidth", $(".EAStext").val());
    $("#" + arrowID).attr("markerHeight", $(".EAStext").val());
  });

  $(".BAdrop a").click(function () {
    let arrowID = $(this)
      .children("svg")
      .children("defs")
      .children("marker")
      .attr("id");
    $("#" + id).attr("marker-start", "url(#" + id + arrowID + ")");
    if (
      $("#" + id + arrowID)
        .children(0)
        .attr("fill") != "none"
    ) {
      $("#" + id + arrowID)
        .children(0)
        .attr("fill", $(".linecolortext").val());
    } else {
      $("#" + id + arrowID)
        .children(0)
        .attr("stroke", $(".linecolortext").val());
    }

    $(".BAshow").html($(this).html());
  });

  $(".BAStext").blur(function () {
    let arrowIDTemp = $("#" + id)
      .attr("marker-start")
      .slice(5);
    let arrowID = arrowIDTemp.substring(0, arrowIDTemp.length - 1);

    $("#" + arrowID).attr("markerWidth", $(".BAStext").val());
    $("#" + arrowID).attr("markerHeight", $(".BAStext").val());
  });

  $("#Psave").click(function () {
    drawsite($(".lineid").text());
  });
  $("#linedefault").click(function () {
    data.format[4].style.width = $(".linetext").val();
    data.format[4].style.color = $(".linecolortext").val();
    data.format[4].style.endarrowsize = $(".EAStext").val();
    data.format[4].style.beginarrowsize = $(".BAStext").val();
  });

  function syncolor(id,color) {
    let EndarrowID = $("#" + id)
      .attr("marker-end")
      .slice(5)
      .substring(
        0,
        $("#" + id)
          .attr("marker-end")
          .slice(5).length - 1
      );

    let StartarrowID = $("#" + id)
      .attr("marker-start")
      .slice(5)
      .substring(
        0,
        $("#" + id)
          .attr("marker-start")
          .slice(5).length - 1
      );

    if (
      $("#" + EndarrowID)
        .children(0)
        .attr("fill") != "none"
    ) {
      $("#" + EndarrowID)
        .children(0)
        .attr("fill", color);
    } else {
      $("#" + EndarrowID)
        .children(0)
        .attr("stroke", color);
    }

    //syn color
    if (
      $("#" + StartarrowID)
        .children(0)
        .attr("fill") != "none"
    ) {
      $("#" + StartarrowID)
        .children(0)
        .attr("fill", color);
    } else {
      $("#" + StartarrowID)
        .children(0)
        .attr("stroke", color);
    }
  }
}
