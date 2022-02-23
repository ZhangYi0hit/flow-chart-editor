function Editor() {
  $("#bold").click(function () {
    $("#text1 p").toggleClass("bold");
  });
  $("#italic").click(function () {
    $("#text1 p").toggleClass("italic");
  });
  $("#underline").click(function () {
    $("#text1 p").toggleClass("underline");
  });

  $("#BackgroundColor button").click(function () {
    $("#text1 p").css({ "background-color": $(this).attr("data-value") });
  });
  $("#ForegroundColor button").click(function () {
    $("#text1 p").css({ color: $(this).attr("data-value") });
  });
  $("#FontSize li a p").click(function () {
    $(".note-current-fontsize").text($(this).text());
    $("#text1 p").css({ fontSize: $(this).text() });
  });
  $("#FontName li a span").click(function () {
    $(".note-current-fontname").text($(this).text());
    $("#text1 p").css({ "font-family": $(this).text() });
  });
  $("#editorheight li a p").click(function () {
    $(".note-current-height").text($(this).text());
    $("#text1 p").css({ "line-height": $(this).text() });
  });
  $("#editorwidth li a p").click(function () {
    $(".note-current-width").text($(this).text());
    //$("#text1 p").css({ "width": $(this).text() });
  });
  //     $("#editorrows li a p").click(function () {
  //     $(".note-current-rows").text($(this).text()+' rows');
  //     });






  //  $("p").css({ "background-color": "yellow", "font-size": "200%" });
  //   underline
  //   italic
  //   bold
  //   fontname
  //   FontSize
  //   FontName
  //   BackgroundColor
  //   ForegroundColor
}  
