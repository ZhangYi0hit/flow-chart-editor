function loadcircle(divId, id) {

    data.shape[3].list.filter((p) => {
      if (p.ID == id) {
        $("#" + id + "t1").text(p.text);
      }
    });
    allTextChangeCss(id, 5);
   
   $("#recttext").show();
  $("#defaultstyle").text("");
  
  

  $(divId + "-buttongroup").text("");
  $(divId + "-buttongroup").append(
    
      '<button id="Circlesave" class="btn btn-default btn-delete">Save</button><br></br>'
  );

  setcirclestyle(id);
  circleshapepage(divId, id);
  circlepropertyPage(id);
  setCircleShape(id);
  showEditor(id, 5);
  
  


  function circleshapepage(divId, id) {
    $(divId).text("");

    $(divId).append(
      '<div class="lineid">' +
        id +
        "</div><br>" +
        '<table class="linedetail"><tbody>' +
        "<tr>" +
        "<td><strong>cx, cy</strong></td>" +
        "<td >" +
        '<input class="linepostion circlecx" style="text-align: left" type="number" value="5" />' +
        "&nbsp" +
        '<input class="linepostion circlecy" style="text-align: left" type="number" value="5" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>Radius</strong></td>" +
        "<td >" +
        '<input class="linetext circler" style="text-align: left" type="number" value="15" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>BackgroundColor</strong></td>" +
        "<td >" +
        '<input class="linecolortext circlecolortext" style="text-align: left" type="text" id="ok" value="#40403f" />' +
        '<input class="linecolorinput circlecolorinput" type="color" id="favcolor" name="favcolor" value="#40403f" size="18">' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>BorderWidth</strong></td>" +
        "<td >" +
        '<input class="linetext circlewidth" style="text-align: left" type="number" value="15" />' +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td><strong>BorderColor</strong></td>" +
        "<td >" +
        '<input class="linecolortext circlebcolortext" style="text-align: left" type="text" id="ok" value="#40403f" />' +
        '<input class="linecolorinput circlebcolorinput" type="color" id="favcolor" name="favcolor" value="#40403f" size="18">' +
        "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>"
    );
  }
  function setCircleShape(id) {
    $(".circlecx").val($("#" + id).attr("cx"));
    $(".circlecy").val($("#" + id).attr("cy"));
    $(".circler").val($("#" + id).attr("r"));
    $(".circlewidth").val($("#" + id).attr("stroke-width"));
    $(".circlecolortext").val($("#" + id).attr("fill"));

   
  }

//x1,y1 x2,y2
  $(".circlecx").blur(function () {
    
    $("#" + id).attr("cx", $(".circlecx").val());
    Setcircleposition(id);
  });
  $(".circlecy").blur(function () {
    $("#" + id).attr("y1", $(".circlecy").val());
    Setcircleposition(id);
  });
  $(".circler").blur(function () {
    $("#" + id).attr("r", $(".circler").val());
     Setcircleposition(id);
  });

  $(".circlewidth").blur(function () {
    $("#" + id).attr("stroke-width", $(".circlewidth").val());
  });

  $(".circlecolortext").blur(function () {
    $("#" + id).attr("fill", $(".circlecolortext").val());
  })
   $(".circlebcolortext").blur(function () {
     $("#" + id).attr("fill", $(".circlebcolortext").val());
   });
  $(".circlecolorinput").change(function () {
   
    $(".circlecolortext").val($(".circlecolorinput").val());

    $("#" + id).attr("fill", $(".circlecolortext").val());
   
    
  });
   $(".circlebcolorinput").change(function () {
     $(".circlebcolortext").val($(".circlebcolorinput").val());

     $("#" + id).attr("stroke", $(".circlebcolortext").val());
   
   });

$("#Circlesave").click(function () {
  $("#" + id + "t1").text($("#textshape").text());
  EditorLoadToJson(id, 5);
  
  data.shape[3].list.filter((p) => {
    if (p.ID == id) {
      p.text = $("#textshape").text();
    }
  });
console.log(data.shape[3].list);
  allTextChangeCss(id, 5);
});


function  Setcircleposition(id) {
  var cx = parseInt($("#" + id).attr("cx"));
  var cy = parseInt($("#" + id).attr("cy"));
  var r = parseInt($("#" + id).attr("r"));
 
  $("#" + id + "c1")
    .attr("cx", cx)
    .attr("cy", cy);
  $("#" + id + "c2")
    .attr("cx", cx+r)
    .attr("cy", cy);

       $("#" + id + "t1")
         .attr("x", cx)
         .attr("y", cy);
}


}

function circlepropertyPage(id) {
  //#property;

  $("#property-buttongroup").text("");
  $("#property-buttongroup").append(
    '<button id="circleedit" class="btn btn-default btn-delete">Edit</button>' +
      "&nbsp;" +
      "&nbsp;" +
      '<button id="circlesave" class="btn btn-default btn-delete">Save</button><br></br>'
  );

  //if this rect is not a new node, use its data.
  if (data.shape[3].list.filter((p) => p.ID == id).length != 0) {
    
    data.shape[3].list.filter((p) => {
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
  //if this rect is a new node, use data of "c-1001"
  else {
    data.shape[3].list.filter((p) => {
      if (p.ID == "C-1001") {
        
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
  $("#circlesave").click(function () {
    $("#circleedit").show();

    PropertyLoadToJson(id,3);

    drawcircle(id);
  });

  $("#circleedit")
    .unbind("click")
    .click(function () {
      $("#circleedit").hide();

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
function setcirclestyle(id){

  $("#" + id).attr("fill", data.format[6].style.color);
  $("#" + id).attr("stroke", data.format[6].style.bordercolor);
  $("#" + id).attr("stroke-width", data.format[6].style.width);
 

}