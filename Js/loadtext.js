function loadtext(divId, id) {

$("#shape").text("");
 $("#defaultstyle").text("");
   $("#svgID .pointC").hide();
    $("#" + id).show();
    for (i = 0; i < 5; i++) {
      $("#" + id + "c" + i).show();
    }
  DefaultText(id);
  TextSetChangeCss(id);
  $("#recttext").show();

  $(divId + "-buttongroup").text("");
  $(divId + "-buttongroup").append(
    '<button id="TextSetSave1" class="btn btn-default btn-delete">Save</button><br></br>'
  );

  textshowEditor(id);
 
  $("#TextSetSave1").click(function () {
    TextEditorLoadToJson(id);
    drawtext(id);
    $("#"+ id ).hide();
for (i = 0; i < 5; i++) {
  $("#" + id + "c" + i).hide();
}


  });
}

function textshowEditor(id) {
  $("#textshape").text($("#" + id + "t1").text());
  $("#FontSize1")
    .find(".note-current-fontsize")
    .text(data.format[3].style.fontsize);

  $("#FontName1")
    .find(".note-current-fontname")
    .text(data.format[3].style.fontfamily);

  $("#textshape").css({
    color: data.format[3].style.fontcolor,
    "font-size": data.format[3].style.fontsize,
    "font-family": data.format[3].style.fontfamily,
  });

  $("#textshape").attr("class", data.format[3].style.class);
}

function TextEditorLoadToJson(id) {
  if (data.shape[1].list.filter((p) => p.ID == id).length != 0) {
    data.shape[1].list.filter((p) => {
      if (p.ID == id) {
        p.text = $("#textshape").text();
      }
    });
  } else {
    let newtext = {};
    newtext["ID"] = id;
    newtext["text"] = $("#textshape").text();
    data.shape[1].list.push(newtext);
    console.log(data.shape[1].list);
  }

  //text style format

  data.format[3].style.class = $("#textshape").attr("class");
  data.format[3].style.fontsize = $("#textshape").css("fontSize");
  data.format[3].style.fontcolor = $("#textshape").css("color");

  data.format[3].style.fontfamily = $("#textshape").css("font-family");
}
function TextSetChangeCss(id) {
  data.shape[1].list.filter((p) => {
    if (p.ID == id) {
      $("#" + id + "t1").text(p.text);
    }
  });

  $("#" + id + "t1").attr("class", data.format[3].style.class);

  $("#" + id + "t1").css({
    fill: data.format[3].style.fontcolor,
    "font-size": data.format[3].style.fontsize,
    "font-family": data.format[3].style.fontfamily,
  });
}

function DefaultText(id) {
  let text = {};
  text["ID"] = id;
  text["text"] = $("#" + id + "t1").text();
}
