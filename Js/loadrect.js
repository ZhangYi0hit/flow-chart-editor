function loadrect(divId, id) {
  data.shape[0].list.filter((p) => {
    if (p.ID == id) {
      $("#" + id + "t1").text(p.text);
    }
  });
  allTextChangeCss(id, 2);
  $("#recttext").show();

  $("#defaultstyle").text("");

  $("#defaultstyle").html(
    '<div class="alert alert-info"><form><label class= "checkbox-inline" id = "Rectdefaultcheckbox" ><strong>Use the Rectangle Template</strong></label ></form ></div>'
  );

  $("#defaultstyle").show();

  $(divId + "-buttongroup").text("");
  $(divId + "-buttongroup").append(
    '<button id="SetAsDefault" class="btn btn-default btn-delete">Set as Default</button>' +
      "&nbsp;" +
      "&nbsp;" +
      "&nbsp;" +
      '<button id="ShapeSave1" class="btn btn-default btn-delete">Save</button><br></br>'
  );
  shapePage(id);
  propertyPage(id);
  setRectShape(id);

  showEditor(id, 2);
  //summerEditor();

  function shapePage(id) {
    $(divId).text("");

    $(divId).append(
      '<div id="singletable">' +
        id +
        "</div><br>" +
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
  function setRectShape(id) {
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

  $("#SetAsDefault").click(function () {
    data.format[1].style.width = $(".shapewidth").val();
    data.format[1].style.height = $(".shapeheight").val();
    data.format[1].style.backgroundcolor = $(".shapeBGCtext").val();
    data.format[1].style.bordercolor = $(".shapeBDCtext").val();
    data.format[1].style.borderwidth = $(".shapeBW").val();
    data.format[1].style.borderradius = $(".shapeBR").val();
    //("This template has been stored.");
  });

  $("#ShapeSave1").click(function () {
    $("#" + id + "t1").text($("#textshape").text());
    EditorLoadToJson(id, 2);
    data.shape[0].list.filter((p) => {
      if (p.ID == id) {
        p.text = $("#textshape").text();
      }
    });

    allTextChangeCss(id, 2);
  });

  $("#Rectdefaultcheckbox").click(function () {
    if (data.format[1].style.width.length != 0) {
      $("#" + id).attr("width", data.format[1].style.width);
      $("#" + id).attr("height", data.format[1].style.height);
      $("#" + id).attr("fill", data.format[1].style.backgroundcolor);
      $("#" + id).attr("stroke", data.format[1].style.bordercolor);
      $("#" + id).attr("stroke-width", data.format[1].style.borderwidth);
      $("#" + id).attr("rx", data.format[1].style.borderradius);

      setRectShape(id);
      SetcircleAndTextposition(id);

      //Important: If you use the defalut method, drag function is disabled.
    }
  });
}

function showEditor(id, type) {
  $("#textshape").text($("#" + id + "t1").text());
  $("#FontSize1")
    .find(".note-current-fontsize")
    .text(data.format[type].style.fontsize);

  $("#FontName1")
    .find(".note-current-fontname")
    .text(data.format[type].style.fontfamily);

  $("#textshape").css({
    color: data.format[type].style.fontcolor,
    "font-size": data.format[type].style.fontsize,
    "font-family": data.format[type].style.fontfamily,
  });

  $("#textshape").attr("class", data.format[type].style.class);
}


function EditorLoadToJson(id, type) {
  data.format[type].style.class = $("#textshape").attr("class");
  data.format[type].style.fontsize = $("#textshape").css("fontSize");
  data.format[type].style.fontcolor = $("#textshape").css("color");

  data.format[type].style.fontfamily = $("#textshape").css("font-family");
  console.log(data.format[type].style);
}
function allTextChangeCss(id, type) {

  




  $("text").attr("class", data.format[type].style.class);

  $("#" + id + "t1").css({
    fill: data.format[type].style.fontcolor,
    "font-size": data.format[type].style.fontsize,
    "font-family": data.format[type].style.fontfamily,
  });
}
function propertyPage(id) {
  //#property;

  $("#property-buttongroup").text("");
  $("#property-buttongroup").append(
    '<button id="Pedit" class="btn btn-default btn-delete">Edit</button>' +
      "&nbsp;" +
      "&nbsp;" +
      '<button id="Psave11" class="btn btn-default btn-delete">Save</button><br></br>'
  );

  //if this rect is not a new node, use its data.
  if (data.shape[0].list.filter((p) => p.ID == id).length != 0) {
    data.shape[0].list.filter((p) => {
      if (p.ID == id) {
        let str =
          '<div id="singletable">' +
          id +
          "</div><br>" +
          '<table class="detail-container "><tbody class="detailbody">';

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
          "<table class='detail-container'>" +
          '<tbody class="detailfooter">';
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

        $("#property").text("");
        $("#property").append(str);
      }
    });
  }
  //if this rect is a new node, use data of "S-900001"
  else {
    data.shape[0].list.filter((p) => {
      if (p.ID == "S-900001") {
        let str =
          '<div id="singletable">' +
          id +
          "</div><br>" +
          '<table class="detail-container "><tbody class="detailbody">';

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
          "<table class='detail-container'>" +
          '<tbody class="detailfooter">';
        Object.keys(p.property[1].content).forEach(function (key) {
          str +=
            "<tr>" +
            "<td><strong>" +
            key +
            "</strong></td>" +
            "<td>" +
            p.property[1].content[key] +
            "</td>" +
            "</tr>";
        });

        $("#property").text("");
        $("#property").append(str);
      }
    });
  }
  $("#Psave11").click(function () {
    $("#Pedit").show();

    PropertyLoadToJson(id, 0);

    drawrect(id);
  });

  $("#Pedit")
    .unbind("click")
    .click(function () {
      $("#Pedit").hide();

      $(".detail-container").css("width", "350px");

      $(".detailbody tr").append(
        "<td>" +
          "<button class='btn btn-default btn-lg' onclick = delecttr(this)>Delete</button>" +
          "</td>"
      );

      $(".detailfooter tr").append(
        "<td>" +
          "<button class='btn btn-default btn-delete' onclick = delecttr(this)>Delete</button>" +
          "</td>"
      );

      //alert($(".detailfooter tr button").css('width'));
      $(".detailbody").append(
        '<tr><td colspan="3">' +
          "<button id='bodyadd123' class='btn btn-default btn-lg' onclick = bodyadd()>Add a row </button>" +
          "</td></tr>"
      );
      $(".detailfooter").append(
        '<tr><td colspan="3">' +
          "<button id='footeradd' class='btn btn-default btn-delete' onclick = footadd()>Add a row </button>" +
          "</td></tr>"
      );
    });

  $(".detail-container td").dblclick(function () {
    /* 1.先拿到这个td原来的值，然后将这个td变成一个input:text,并且原来的值不动 */
    let tdVal = $(this).text();
    let isStrong = $(this).find("strong").length != 0;

    let oInput = $("<input class='input1'  value='" + tdVal + "'/>");
    $(this).html(oInput);
    oInput.focus();

    oInput.blur(function () {
      if (isStrong) {
        oInput.parent().html("<strong>" + oInput.val() + "</strong>");
      } else {
        oInput.parent().html(oInput.val());
      }
    });
  });
}
function delecttr(obj) {
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
}
function bodyadd() {
  $(".detailbody tr:last").before(
    "<tr>" +
      "<td><strong><input class='input1 inputtitle' placeholder='New Property'/></strong></td>" +
      "<td>" +
      "<input class='input1 inputcontent' placeholder='New Value' />" +
      "</td>" +
      "<td>" +
      "<button  class='btn btn-default btn-lg' onclick = delecttr(this) >Delete</button>" +
      "</td>" +
      "</tr>"
  );
  $(".inputtitle").blur(function () {
    $(".inputtitle")
      .parent()
      .html("<strong>" + $(".inputtitle").val() + "</strong>");
  });
  $(".inputcontent").blur(function () {
    $(".inputcontent").parent().html($(".inputcontent").val());
  });
}

function footadd() {
  $(".detailfooter tr:last").before(
    "<tr>" +
      "<td><strong><input class='input1 inputtitle' placeholder='New Property'/></strong></td>" +
      "<td>" +
      "<input class='input1 inputcontent' placeholder='New Value' />" +
      "</td>" +
      "<td>" +
      "<button  class='btn btn-default btn-lg' onclick = delecttr(this) >Delete</button>" +
      "</td>" +
      "</tr>"
  );
  $(".inputtitle").blur(function () {
    $(".inputtitle")
      .parent()
      .html("<strong>" + $(".inputtitle").val() + "</strong>");
  });
  $(".inputcontent").blur(function () {
    $(".inputcontent").parent().html($(".inputcontent").val());
  });
}
function PropertyLoadToJson(id, type) {
  var bodyHead = [];
  var bodytext = {};
  $(".detailbody strong").each(function () {
    var key = $(this).text().replace(/\s*/g, "");

    bodyHead.push(key);
  });
  $(".detailbody tr td:nth-child(2)").each(function (i) {
    var value = $(this).text().replace(/\s*/g, "");
    var key = bodyHead[i];

    if (
      !(value == "" || value == undefined || value == null) &
      !(key == "" || key == undefined || key == null)
    ) {
      bodytext[key] = value;
    }
  });
  console.log(bodytext);

  var footerHead = [];
  var footertext = {};
  $(".detailfooter strong").each(function () {
    var key = $(this).text().replace(/\s*/g, "");

    footerHead.push(key);
  });

  $(".detailfooter tr td:nth-child(2)").each(function (i) {
    var value = $(this).text().replace(/\s*/g, "");
    var key = footerHead[i];

    if (
      !(value == "" || value == undefined || value == null) &&
      !(key == "" || key == undefined || key == null)
    ) {
      footertext[key] = value;
    }
  });

  for (var i = 0; i < data.shape[type].list.length; i++) {
    if (data.shape[type].list[i].ID == id) {
      data.shape[type].list.splice(i, 1);
    }
  }

  let obj = {
    ID: "",
    text: "",
    property: [
      {
        name: "body",
        content: {},
      },
      {
        name: "foot",
        content: {},
      },
    ],
  };
  obj.ID = id;
  obj.text = $("#" + id + "t1").text();
  obj.property[0].content = bodytext;
  obj.property[1].content = footertext;

  data.shape[type].list.push(obj);
  console.log(data);
}
function circledisabled(id) {
  for (i = 0; i < 5; i++) {
    $("#" + id + "c" + i).hide();

    g.append("circle")
      .attr("id", id + "cc" + i)

      .attr("r", "5px")

      .attr("cx", $("#" + id + "c" + i).attr("cx"))
      .attr("cy", $("#" + id + "c" + i).attr("cy"))
      .attr("fill", "red");
  }
}
