function ToolTipsBodynew(id) {
  data.shape[0].list.filter((p) => {
    if (p.ID == "S-900001") {
      let str =
        '<table class="tooltable" ><thead class="toolheader"<tr><td colspan="2" >' +
        p.text +
        "</td></tr></thead></table>" +
        '<table class="tooltable toolbody"><tbody id="body1">';

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
        "<tbody id='footer1'>";
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

      $("#contenttooldiv").text("");
      $("#contenttooldiv").append(str);

       tooltipcss();

       $("#tool1 h3").text("Name");
       $("#textp").text(p.text);
       headerEditor();
    }
  });




    

     $(".toolheader").click(function () {
       $("#tool1 h3").text("Name");
       $("#textp").text($(this).text());
       headerEditor();
     });
     $(".toolbody tr td").click(function () {
       $("#tool1 h3").text("Body");
       $("#textp").text($(this).text());
       bodyEditor();
     });

     $(".toolfooter tr td").click(function () {
       $("#tool1 h3").text("Footer");
       $("#textp").text($(this).text());
       footerEditor();
     });

  $("#editorSave").html(
    '<button id="Esave"  class="btn btn-default btn-delete">Save</button><br></br>'
  );
  
 $("#Esave").click(function () {
   if ($("#tool1 h3").text() == "Name") {
       let p=data.format[0].style[0]
    
         
         p.class = $("#text1 p")
           .attr("class")
           .split(/\s+/)
           .filter((n) => n);
         p.width = $(".note-current-width").text();
         p.fontsize = $("#text1 p").css("fontSize");
         p.fontcolor = $("#text1 p").css("color");
         p.fontfamily = $("#text1 p").css("font-family");
         p.backgroundcolor = $("#text1 p").css("background-color");
     
   }

   if ($("#tool1 h3").text() == "Body") {
   let p = data.format[0].style[1];
       
         p.class = $("#text1 p")
           .attr("class")
           .split(/\s+/)
           .filter((n) => n);
         p.fontsize = $("#text1 p").css("fontSize");
         p.fontcolor = $("#text1 p").css("color");
         p.fontfamily = $("#text1 p").css("font-family");
         p.backgroundcolor = $("#text1 p").css("background-color");
         p.height = $(".note-current-height").text();

         
      
   }

   if ($("#tool1 h3").text() == "Footer") {
     let p = data.format[0].style[2];
    
         p.class = $("#text1 p")
           .attr("class")
           .split(/\s+/)
           .filter((n) => n);
         p.fontsize = $("#text1 p").css("fontSize");
         p.fontcolor = $("#text1 p").css("color");
         p.fontfamily = $("#text1 p").css("font-family");
         p.backgroundcolor = $("#text1 p").css("background-color");
         p.height = $(".note-current-height").text();

    
  
   }

   console.log(data.format[0].style[0]);

   ToolTipsBodynew(id);
 });

}



 function headerEditor() {
   $("#editorwidth").show();
   $("#editorheight").hide();
   $("#editorrows").hide();
 let p = data.format[0].style[0];
   $("#textp").css({
     color: p.fontcolor,
     "font-size": p.fontsize,
     "font-family": p.fontfamily,
     "background-color": p.backgroundcolor,
   });
   var fontclass = "";
   for (var i = 0; i < p.class.length; i++) {
     fontclass = fontclass + " " + p.class[i];
   }
   $("#textp").attr("class", fontclass);
 }
 function bodyEditor() {
   $("#editorheight").show();

   $("#editorwidth").hide();

   let p = data.format[0].style[1];
   $("#textp").css({
     color: p.fontcolor,
     "font-size": p.fontsize,
     "font-family": p.fontfamily,
     "background-color": p.backgroundcolor,
   });
   var fontclass = "";
   for (var i = 0; i < p.class.length; i++) {
     fontclass = fontclass + " " + p.class[i];
   }
   $("#textp").attr("class", fontclass);
 }
 function footerEditor() {
   $("#editorwidth").hide();
   $("#editorheight").show();
   $("#editorrows").show();

  let p = data.format[0].style[2];
  $("#textp").css({
    color: p.fontcolor,
    "font-size": p.fontsize,
    "font-family": p.fontfamily,
    "background-color": p.backgroundcolor,
  });
  var fontclass = "";
  for (var i = 0; i < p.class.length; i++) {
    fontclass = fontclass + " " + p.class[i];
  }
  $("#textp").attr("class", fontclass);
 }

 function tooltipcss() {
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

   $("#toolnav").css("border-right", "80px solid " + p.style[1].backgroundcolor);
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