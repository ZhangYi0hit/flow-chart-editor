function loadshape(divId, id) {
  $("#recttext").show();
  $(divId + "-buttongroup").text("");
  $(divId + "-buttongroup").append(
    '<button id="SetAsDefault" class="btn btn-default btn-delete">Set as Default</button>' +
      "&nbsp;" +
      "&nbsp;" +
      "&nbsp;" +
      '<button id="ShapeSave1" class="btn btn-default btn-delete">Save</button><br></br>'
  );
  DefaultSite(id);
  setData(id);

  function DefaultSite(id) {
    $(divId).text("");

    $(divId).append(
      '<table class="shapedetail linedetail"><tbody>' +
        "<tr>" +
        "<td><strong>X (px)</strong></td>" +
        "<td >" +
        '<input class="shapeX linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Y (px)</strong></td>" +
        "<td >" +
        '<input class="shapeY linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Width (px)</strong></td>" +
        "<td >" +
        '<input class="shapewidth linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Height (px)</strong></td>" +
        "<td >" +
        '<input class="shapeheight linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Background Color</strong></td>" +
        "<td >" +
        '<input class="shapeBGCtext linecolortext" style="text-align: left" type="text" id="ok" value="#40403f" />' +
        '<input class="shapeBGCinput linecolorinput" type="color" id="favcolor" name="favcolor" value="#40403f" size="18">' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Border Color</strong></td>" +
        "<td >" +
        '<input class="shapeBDCtext linecolortext" style="text-align: left" type="text" id="ok" value="#40403f" />' +
        '<input class="shapeBDCinput linecolorinput" type="color" id="favcolor" name="favcolor" value="#40403f" size="18">' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Border Width (px)</strong></td>" +
        "<td >" +
        '<input class="shapeBW linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Border Radius (px)</strong></td>" +
        "<td >" +
        '<input class="shapeBR linetext" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>"
    );
  }
  function setData(id) {
    $(".shapeX").val($("#" + id).attr("x"));
    $(".shapeY").val($("#" + id).attr("y"));
    $(".shapewidth").val($("#" + id).attr("width"));
    $(".shapeheight").val($("#" + id).attr("height"));
    $(".shapeBGCtext").val($("#" + id).attr("fill"));

    $(".shapeBDCtext").val($("#" + id).attr("stroke"));
    $(".shapeBW").val($("#" + id).attr("stroke-width"));
    $(".shapeBR").val($("#" + id).attr("rx"));
  }

  function SetcircleAndTextposition(id) {
    var x = parseInt($("#" + id).attr("x"));
    var y = parseInt($("#" + id).attr("y"));
    var width = parseInt($("#" + id).attr("width"));
    var height = parseInt($("#" + id).attr("height"));
    $("#" + id + "c0")
      .attr("cx", x + width / 2)
      .attr("cy", y - 20);
    $("#" + id + "c1")
      .attr("cx", x)
      .attr("cy", y);
    $("#" + id + "c2")
      .attr("cx", x + width)
      .attr("cy", y);
    $("#" + id + "c3")
      .attr("cx", x)
      .attr("cy", y + height);
    $("#" + id + "c4")
      .attr("cx", x + width)
      .attr("cy", y + height);

    $("#" + id + "t1")
      .attr("x", x + width / 2)
      .attr("y", y + height / 2);
  }
  $(".shapeX").blur(function () {
    $("#" + id).attr("x", $(".shapeX").val());
    SetcircleAndTextposition(id);
  });
  $(".shapeY").blur(function () {
    $("#" + id).attr("y", $(".shapeY").val());
    SetcircleAndTextposition(id);
  });
  $(".shapewidth").blur(function () {
    $("#" + id).attr("width", $(".shapewidth").val());
    SetcircleAndTextposition(id);
  });
  $(".shapeheight").blur(function () {
    $("#" + id).attr("height", $(".shapeheight").val());
    SetcircleAndTextposition(id);
  });
  $(".shapeBGCtext").blur(function () {
    $("#" + id).attr("fill", $(".shapeBGCtext").val());
  });

  $(".shapeBGCinput").change(function () {
    $(".shapeBGCtext").val($(".shapeBGCinput").val());

    $("#" + id).attr("fill", $(".shapeBGCtext").val());
  });

  $(".shapeBDCtext").blur(function () {
    $("#" + id).attr("stroke", $(".shapeBDCtext").val());
  });

  $(".shapeBDCinput").change(function () {
    $(".shapeBDCtext").val($(".shapeBDCinput").val());

    $("#" + id).attr("stroke", $(".shapeBDCtext").val());
  });

  $(".shapeBW").blur(function () {
    $("#" + id).attr("stroke-width", $(".shapeBW").val());
  });

  $(".shapeBR").blur(function () {
    $("#" + id).attr("rx", $(".shapeBR").val());
  });

  
    init();
  

  function init() {
    var row = {};
    row["ID"] = id;
    row["rect"] = {};

    row.rect.text = "Text 1";
    row.rect.class = ["bold"];
    row.rect.fontSize = "24px";

    row.rect.fontColor = "#40403f";

    row.rect.fontFamily = "Arial";
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].ID == row["ID"]) {
        rows.splice(i, 1);
      }
    }

    rows.push(row);

    allObjects = JSON.stringify(rows);
    alert(allObjects);
  }

  

  showEditor(id);
  shapeEditor();
  $("#ShapeSave1").click(function () {
    $("#" + id + "t1").text($("#textshape").text());
    EditorLoadToJson(id);
    RectTextcss(id);
    allObjects = JSON.stringify(rows);
    alert(allObjects);
  });
}

function showEditor(id) {
  rows.filter((p) => {
    if (p.ID == id) {
      //load(".text1");
      $("#" + id + "t1").text(p.rect.text);
      load("#textshape");
      $("#textshape").text(p.rect.text);

      function load(div) {
        $("#FontSize1").find(".note-current-fontsize").text(p.rect.fontSize);

        $("#FontName1").find(".note-current-fontname").text(p.rect.fontFamily);

        $(div).css({
          color: p.rect.fontColor,
          "font-size": p.rect.fontSize,
          "font-family": p.rect.fontFamily,
          "background-color": p.rect.BackgroundColor,
        });

        var fontclass = "";
        for (var i = 0; i < p.rect.class.length; i++) {
          fontclass = fontclass + " " + p.rect.class[i];
        }
        //$(div).attr("class", fontclass);
      }
    }
  });
}
function shapeEditor() {
  $("#bold1").click(function () {
    $("#textshape").toggleClass("bold");
  });
  $("#italic1").click(function () {
    $("#textshape").toggleClass("italic");
  });
  $("#underline1").click(function () {
    $("#textshape").toggleClass("underline");
  });

  $("#BackgroundColor1 button").click(function () {
    $("#textshape").css({ "background-color": $(this).attr("data-value") });
  });
  $("#ForegroundColor1 button").click(function () {
    $("#textshape").css({ color: $(this).attr("data-value") });
  });
  $("#FontSize1 li a p").click(function () {
    $("#FontSize1").find(".note-current-fontsize").text($(this).text());
    $("#textshape").css({ fontSize: $(this).text() });
  });
  $("#FontName1 li a span").click(function () {
    $("#FontName1").find(".note-current-fontname").text($(this).text());
    $("#textshape").css({ "font-family": $(this).text() });
  });
}

function EditorLoadToJson(id) {
  rows.filter((p) => {
    if (p.ID == id) {
      p.rect.text = $("#textshape").text();

      p.rect.class = $("#textshape")
        .attr("class")
        .split(/\s+/)
        .filter((n) => n);

      p.rect.fontSize = $("#textshape").css("fontSize");
      p.rect.fontColor = $("#textshape").css("color");

      p.rect.fontFamily = $("#textshape").css("font-family");
    }
  });
}
function RectTextcss(id) {
  rows.filter((p) => {
    if (p.ID == id) {
      $("text1").css({
        color: p.rect.fontColor,
        "font-size": p.rect.fontSize,
        "font-family": p.rect.fontFamily,
      });

      var fontclass = "";
      for (var i = 0; i < p.rect.class.length; i++) {
        fontclass = fontclass + " " + p.rect.class[i];
      }
      $("#" + id + "t1").attr("class", "text1 " + fontclass);
    }
  });
}
