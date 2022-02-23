var design = true;
var num1 = 900000;
var num2 = 9000;
var num3 = 1000;
var Rectid;
var Lineid;
var Circleid;
var rows = [];
var allObjects;
var focused = "S-900001";
var currentR = "";
var dStatus = "No";

var w = 600,
  h = 700;
Editor();

let data = {
  project: "project",
  description: "Front-end flowchart editor",
  format: [
    {
      name: "tooltips",
      style: [
        {
          name: "head",
          class: ["bold", "italic"],
          fontsize: "24px",
          width: "250px",
          fontcolor: "rgb(239, 239, 236)",
          backgroundcolor: "rgb(64, 64, 63)",
          fontfamily: "Arial",
        },
        {
          name: "body",
          class: ["bold"],
          fontsize: "18px",
          fontcolor: "#efefec",
          backgroundcolor: "#40403f",
          fontfamily: "Arial",
          height: "150%",
        },
        {
          name: "foot",
          class: ["bold"],
          fontsize: "18px",
          fontcolor: "#40403f",
          backgroundcolor: "#efefec",
          fontfamily: "Arial",
          height: "150%",
        },
      ],
    },
    {
      name: "rectangle",
      style: {
        width: "",
        height: "",
        backgroundcolor: "",
        bordercolor: "",
        borderwidth: "",
        borderradius: "",
      },
    },
    {
      name: "recttext",
      style: {
        class: "bold",
        fontsize: "24px",
        fontcolor: "#40403f",
        fontfamily: "Arial",
      },
    },
    {
      name: "text",
      style: {
        class: ["bold"],
        fontsize: "25px",
        fontcolor: "red",

        fontfamily: "Arial",
      },
    },
    {
      name: "line",
      style: {
        width: "",
        color: "",
        endarrowsize: "",
        beginarrowsize: "",
      },
    },
    {
      name: "circletext",
      style: {
        class: "bold",
        fontsize: "24px",
        fontcolor: "#40403f",
        fontfamily: "Arial",
      },
    },
    {
      name: "circle",
      style: {
        color: "lightblue",
        width: "5",
        r: "35",
        
        bordercolor: "red",
      },
    },
  ],
  shape: [
    {
      name: "rectangle",
      list: [
        {
          ID: "S-900001",
          text: "hello",
          property: [
            {
              name: "body",
              content: {
                AMHType0: "dAT0",
                AMHType1: "dAT1",
                AMHType2: "dAT2",
                AMHType3: "dAT3",
              },
            },
            {
              name: "foot",
              content: {
                AMHType4: "dAT4",
                AMHType5: "dAT5",
                AMHType6: "dAT6",
              },
            },
          ],
        },
      ],
    },
    {
      name: "text",
      list: [
        {
          ID: "",
          text: "",
        },
      ],
    },
    {
      name: "line",
      list: [
        {
          ID: "",
          dashtype: "",
          beginarrowtype: "",
          endarrowtype: "",
        },
      ],
    },
    {
      name: "circle",
      list: [
        {
          ID: "C-1001",
          text: "hello",
          property: [
            {
              name: "body",
              content: {
                AMHType7: "dAT7",
                AMHType8: "dAT8",
              },
            },
            {
              name: "foot",
              content: {
                AMHType9: "dAT9",
                AMHType10: "dAT10",
              },
            },
          ],
        },
      ],
    },
  ],
};

let zoom = d3.zoom().scaleExtent([0.25, 10]).on("zoom", handleZoom);

var svgID = d3.select("#svgID");
var g = svgID.append("g").call(zoom);
d3.select("#svgID").on("dblclick.zoom", null);

function handleZoom(e) {
  d3.select("svg g").attr("transform", e.transform);
  d3.selectAll(".pointC").attr("r", getScale(5));
}
$("#recttext").hide();
d3.select("#tlbRect").on("click", function () {
  //new Rectangle();
  new TextwithRect();
});

//---------------
d3.select("#tlbLock").on("click", function () {
  new Pointer();
});

function Pointer() {
  svgID.on("click", function (event) {
    m1 = d3.pointer(event, this);

    $("#x").html(m1[0]);
    $("#y").html(m1[1]);
  });
}

//------
d3.select("#tlbEllipse").on("click", function () {
  new Circle();
});
d3.select("#tlbLine").on("click", function () {
  new Line();
});
d3.select("#tlbText").on("click", function () {
  //console.log(data);
  new TextSet();
});
d3.select("#tlbResidentFontText").on("click", function () {
  new TextwithRect();
});

d3.select("#tlbZoomIn").on("click", function () {
  d3.select("#svgID").transition().call(zoom.scaleBy, 1.3);
});

d3.select("#tlbZoomOut").on("click", function () {
  d3.select("#svgID").transition().call(zoom.scaleBy, 0.8);
});
d3.select("#tlbZoom100").on("click", function () {
  d3.select("#svgID g").attr("transform", "translate(0,0) scale(1)");
  //alert(d3.select("#svgID g").attr("transform"));
});
d3.select("#tlbDelete").on("click", function () {
  new Delete();

  //break;
});

$("#tlbSave").click(() => {
  // $("#summereditor").hide()
  d3.select("#svgID g").attr("transform", "translate(0,0) scale(1)");

  var svgText = $("#svgID").html();
  let g = d3.select("#showsvg").append("g").attr("id", "showg");

  document.getElementById("showg").innerHTML = svgText;

  $("#showsvg .pointC").hide();

  $("#showdiv").text("");
  $("#showdiv").append(
    '<div id="containtooldiv" style="display: none;">' +
      '<div id="contenttooldiv">' +
      "</div>" +
      '<div id = "toolnav" >' +
      "</div>" +
      "</div>"
  );
  ToolTipsBodynew();
  showtooltips("S-900001");

  $("#tlbtoolSave").click(function () {
    localStorage.setItem("datajson", JSON.stringify(data));
    localStorage.setItem("svgtext", svgText);

    window.open("viewpage.html");

    //createProduct();
    //createmap();
  });
  $("#showsvg rect")
    .unbind()
    .click(function () {
      var str = $(this).attr("id");

      ToolTipsBodynew(str);

      showtooltips(str);
    });

  function showtooltips(id) {
    var constyle = document.getElementById("containtooldiv").style;
    var navstyle = document.getElementById("toolnav").style;
    if (constyle.display === "none") {
      navstyle.top = "auto"; //初始化
      navstyle.bottom = "auto";
      navstyle.left = "auto";
      navstyle.right = "auto";

      var a = 30;
      var dom = d3.select("#" + id);
      var wintop = parseFloat(dom.attr("y"));
      var winleft = parseFloat(dom.attr("x"));
      constyle.top = wintop - 40 + "px";
      constyle.left = winleft + 150 + "px";
      navstyle.left = "-72px";
      navstyle.top = "70px";
      constyle.display = "";
    } else {
      constyle.display = "none";
    }
  }
});

function getcolor(status) {
  if (status == "green") {
    return "#6EBE49";
  } else if (status == "red") {
    return "#d50000";
  } else if (status == "blue") {
    return "#00b5fc";
  } else if (status == "yellow") {
    return "#ffc300";
  } else {
    return "#b9faee";
  }
}
//--------------------------------------

//--------------------------------------

//======================================
function getScale(r) {
  var str = d3.select("#svgID g").attr("transform");

  if (str) {
    var tmp = "",
      arr = [];
    for (var i = 0; i < str.length; i++) {
      var cur = str[i];
      if ((!isNaN(cur) && cur !== " ") | (cur == ".") | (cur == "-")) {
        tmp += cur;
      } else {
        if (tmp) {
          arr.push(tmp);
          tmp = "";
        }
      }
    }
    if (tmp) {
      arr.push(tmp);
    }
    return r / parseFloat(arr[2]);
  }
  return r;
}

function Refinement(m1) {
  var str = d3.select("#svgID g").attr("transform");

  if (str) {
    var tmp = "",
      arr = [];
    for (var i = 0; i < str.length; i++) {
      var cur = str[i];
      if ((!isNaN(cur) && cur !== " ") | (cur == ".") | (cur == "-")) {
        tmp += cur;
      } else {
        if (tmp) {
          arr.push(tmp);
          tmp = "";
        }
      }
    }
    if (tmp) {
      arr.push(tmp);
    }

    var x_refine = parseFloat(arr[0]);
    var y_refine = parseFloat(arr[1]);
    var scale = parseFloat(arr[2]);

    m1[0] = (m1[0] - x_refine) / scale;
    m1[1] = (m1[1] - y_refine) / scale;
  }

  return m1;
}
function Delete() {
  let count = 0;
  $("rect,line,circle").click(function () {
    if (!count) {
      let id = $(this).attr("id");

      for (var i = 0; i < data.shape[0].list.length; i++) {
        if (data.shape[0].list[i].ID == id) {
          if(id.substring(id.length-3)!="001"){
          data.shape[0].list.splice(i, 1);
          }
        }
      }

      for (i = 0; i < 5; i++) {
        $("#" + id + "c" + i).remove();
      }
      $("#" + id + "t1").remove();
      $(this).remove();

      $("#recttext").hide();
      $("#shape").text("");
      $("#shape-buttongroup").text("");
      count++;
    }
  });
}
function Line() {
  var self = this,
    lineData = [],
    isDown = false,
    l1,
    l2,
    isDrag = false;
  count = 0;

  svgID
    .on("click", function (event) {
      l1 = d3.pointer(event, this);

      l1 = Refinement(l1);
      if (!isDown && !isDrag) {
        num2++;
        Lineid = "L-" + num2;

        $("#svgID .pointC").hide();

        self.lineData = [
          {
            x: l1[0],
            y: l1[1],
          },
          {
            x: l1[0],
            y: l1[1],
          },
        ];

        var canvasdef = g.append("svg:defs");

        var svgEndArrowTriangle1 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "EndArrowTriangle1")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 0)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto")
          .attr("class", "arrow")
          .append("path")
          .attr("fill", "#40403f")
          .attr("d", "M0,0L10,5L0,10");

        var svgStartArrowTriangle1 = canvasdef
          .append("svg:marker")

          .attr("id", Lineid + "StartArrowTriangle1")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 0)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto-start-reverse")
          .attr("class", "arrow")
          .append("path")
          .attr("fill", "#40403f")
          .attr("d", "M0,0L10,5L0,10");

        //auto-start-reverse

        var svgEndArrowTriangle2 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "EndArrowTriangle2")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto")
          .attr("class", "arrow")
          .append("path")
          .attr("fill", "#40403f")
          .attr("d", "M 0 0 L 10 5 L 0 10 L 5 5 Z");

        var svgStartArrowTriangle2 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "StartArrowTriangle2")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto-start-reverse")
          .attr("class", "arrow")
          .append("path")
          .attr("fill", "#40403f")
          .attr("d", "M 0 0 L 10 5 L 0 10 L 5 5 Z");

        var svgEndArrowTriangle3 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "EndArrowTriangle3")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto")
          .attr("class", "arrow")
          .append("polyline")
          .attr("points", "0 0, 5 5, 0 10")
          .attr("fill", "none")
          .attr("stroke", "#40403f");

        var svgStartArrowTriangle3 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "StartArrowTriangle3")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto-start-reverse")
          .attr("class", "arrow")
          .append("polyline")
          .attr("points", "0 0, 5 5, 0 10")
          .attr("fill", "none")
          .attr("stroke", "#40403f");

        var svgEndArrowCircle1 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "EndArrowCircle01")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 10)
          .attr("markerHeight", 10)
          .attr("orient", "auto")
          .attr("class", "arrow")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "4")
          .attr("fill", "#40403f");

        var svgStartArrowCircle1 = canvasdef
          .append("svg:marker")
          //.append('marker')
          .attr("id", Lineid + "StartArrowCircle01")
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerWidth", 5)
          .attr("markerHeight", 5)
          .attr("orient", "auto")
          .attr("class", "arrow")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "4")
          .attr("fill", "#40403f");

        self.lineElement = g
          .append("line")
          .attr("id", Lineid)
          .attr("class", "line")

          .attr("stroke", "#40403f")
          .attr("stroke-width", "5px")

          .attr("marker-end", "url(#" + Lineid + "EndArrowTriangle1)")
          .attr("marker-start", "url(#" + Lineid + "StartArrowCircle01)")
          .call(dragLine);

        self.pointline1 = g
          .append("circle")
          .attr("id", Lineid + "c1")
          .attr("class", "pointC")
          .call(dragP1);
        self.pointline2 = g
          .append("circle")
          .attr("id", Lineid + "c2")
          .attr("class", "pointC")
          .call(dragP2);
        updateLine();
        isDrag = false;
      } else {
        isDrag = true;
        if (!count) {
          drawline(Lineid);
          count++;
          //only executes once
        }
      }
      $("line")
        .unbind("click")
        .click(function () {
          var str = $(this).attr("id");

          $("#svgID .pointC").hide();
          for (i = 1; i < 3; i++) {
            $("#" + str + "c" + i).show();
          }

          drawline(str);
        });
      isDown = !isDown;
    })

    .on("mousemove", function (event) {
      l2 = d3.pointer(event, this);

      if (isDown && !isDrag) {
        self.lineData[1] = {
          x: l2[0],
          y: l2[1],
        };

        updateLine();
      }
    });

  function updateLine() {
    self.lineElement

      .attr("x1", function () {
        return self.lineData[0].x;
      })
      .attr("y1", function () {
        return self.lineData[0].y;
      })
      .attr("x2", function () {
        return self.lineData[1].x;
      })
      .attr("y2", function () {
        return self.lineData[1].y;
      });

    self.pointline1

      .attr("r", 5)

      .attr("cx", self.lineData[0].x)
      .attr("cy", self.lineData[0].y);
    self.pointline2

      .attr("r", 4)
      .attr("cx", self.lineData[1].x)
      .attr("cy", self.lineData[1].y);
  }
  var dragLine = d3.drag().on("drag", dragline);

  function dragline(event, d) {
    for (var i = 0; i < self.lineData.length; i++) {
      self.lineData[i].x += event.dx;
      self.lineData[i].y += event.dy;
    }
    //line.style("cursor", "pointer");
    updateLine();
  }

  var dragP1 = d3.drag().on("drag", dragPoint1);
  var dragP2 = d3.drag().on("drag", dragPoint2);

  function dragPoint1(event, d) {
    self.pointline1
      .attr("cx", (self.lineData[0].x += event.dx))
      .attr("cy", (self.lineData[0].y += event.dy));

    updateLine();
  }

  function dragPoint2(event, d) {
    var e = d3.event;
    self.pointline2
      .attr("cx", (self.lineData[1].x += event.dx))
      .attr("cy", (self.lineData[1].y += event.dy));
    updateLine();
  }
}

function TextwithRect() {
  let self = this,
    rect,
    rectData = [],
    isDown = false,
    m1,
    m2,
    isDrag = false;
  let count = 0;

  rectColor = "blue";
  isFocused = false;

  svgID
    .on("click", function (event) {
      m1 = d3.pointer(event, this);
      m1 = Refinement(m1);

      if (!isDown && !isDrag) {
        num1++;
        Rectid = "S-" + num1;
        currentR = Rectid;

        $("#svgID .pointC").hide();

        self.rectData = [
          {
            x: m1[0],
            y: m1[1],
          },
          {
            x: m1[0],
            y: m1[1],
          },
        ];
        self.id = Rectid;

        self.rectangleElement = g
          .append("rect")
          .attr("id", Rectid)
          .attr("fill", "lightblue")
          .attr("stroke", "#40403f")
          .attr("stroke-width", "3")
          .attr("rx", "15")

          .attr("rx", "15")
          .call(dragR);

        self.pointElement0 = g
          .append("circle")
          .attr("id", Rectid + "c0")
          .attr("class", "pointC")
          .call(dragC0);

        self.pointElement1 = g
          .append("circle")
          .attr("id", Rectid + "c1")
          .attr("class", "pointC")
          .call(dragC1);

        self.pointElement2 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c2")
          .call(dragC2);

        self.pointElement3 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c3")
          .call(dragC3);

        self.pointElement4 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c4")
          .call(dragC4);

        self.text1 = g
          .append("text")

          .attr("id", Rectid + "t1");

        isDrag = false;
      } else {
        isDrag = true;

        if (!count) {
          updateText();
          drawrect(Rectid);
          count++;
          //only executes once
        }
      }

      isDown = !isDown;

      $("rect")
        .unbind("click")
        .click(function () {
          var str = $(this).attr("id");
          if (str.substring(0, 2) == "S-") {
            drawrect(str);
          }

          $("#svgID .pointC").hide();
          for (i = 0; i < 5; i++) {
            $("#" + str + "c" + i).show();
          }
        });
    })

    .on("mousemove", function (event) {
      m2 = d3.pointer(event, this);
      m2 = Refinement(m2);
      if (isDown && !isDrag) {
        self.rectData[1] = {
          x: m2[0],
          y: m2[1],
        };

        updateRect();
      }
    });
  function updateText() {
    var x = (self.rectData[1].x + self.rectData[0].x) / 2;
    var y = (self.rectData[1].y + self.rectData[0].y) / 2;

    let text = "";
    data.shape[0].list.filter((p) => {
      if (p.ID == Rectid) {
        text = p.text;
      }
    });

    if (text == "") {
      text = "hello";
    }
    self.text1
      .attr("x", x)
      .attr("y", y)
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .attr("contenteditable", "true")
      .text(text);
  }

  function updateRect() {
    isFocused = focused == self.rectangleElement.attr("id");

    self.rectangleElement
      .attr(
        "x",
        self.rectData[1].x - self.rectData[0].x > 0
          ? self.rectData[0].x
          : self.rectData[1].x
      )
      .attr(
        "y",
        self.rectData[1].y - self.rectData[0].y > 0
          ? self.rectData[0].y
          : self.rectData[1].y
      )
      .attr("width", Math.abs(self.rectData[1].x - self.rectData[0].x))
      .attr("height", Math.abs(self.rectData[1].y - self.rectData[0].y));

    var currentR = getScale(5);

    self.pointElement0
      .data(self.rectData)
      .attr("r", "5px")
      .attr("cx", (self.rectData[0].x + self.rectData[1].x) / 2)
      .attr("cy", self.rectData[0].y - 20);

    self.pointElement1
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[0].x)
      .attr("cy", self.rectData[0].y);

    self.pointElement2
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[1].x)
      .attr("cy", self.rectData[1].y);
    self.pointElement3
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[1].x)
      .attr("cy", self.rectData[0].y);
    self.pointElement4
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[0].x)
      .attr("cy", self.rectData[1].y);
  }

  var dragR = d3.drag().on("drag", dragRect);
  var dragC0 = d3.drag().on("drag", dragPoint0);
  var dragC1 = d3.drag().on("drag", dragPoint1);
  var dragC2 = d3.drag().on("drag", dragPoint2);
  var dragC3 = d3.drag().on("drag", dragPoint3);
  var dragC4 = d3.drag().on("drag", dragPoint4);

  function dragRect(event, d) {
    updateRect();

    if (isFocused) {
      for (var i = 0; i < self.rectData.length; i++) {
        self.rectangleElement
          .attr("x", (self.rectData[i].x += event.dx))
          .attr("y", (self.rectData[i].y += event.dy))
          .style("cursor", "pointer");
      }

      updateRect();
      updateText();
    }
  }

  function dragPoint0(event, d) {
    function angleBetweenPoints(p1, p2) {
      if (p1[0] == p2[0] && p1[1] == p2[1]) return Math.PI / 2;
      else return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
    }

    function distanceBetweenPoints(p1, p2) {
      return Math.sqrt(Math.pow(p2[1] - p1[1], 2) + Math.pow(p2[0] - p1[0], 2));
    }
    function toDegrees(rad) {
      return rad * (180 / Math.PI);
    }

    var exy = [event.x, event.y],
      dxy = [
        (self.rectData[0].x + self.rectData[1].x) / 2,
        self.rectData[0].y - 20,
      ],
      dist = distanceBetweenPoints(exy, dxy),
      angle = Math.PI + angleBetweenPoints(dxy, exy);

    g.attr(
      "transform",
      "rotate(" + toDegrees(angle) + "," + dxy[0] + "," + dxy[1] + ")"
    );
    updateRect();
    updateText();
  }

  function dragPoint1(event, d) {
    self.pointElement1
      .attr("cx", function (d) {
        return (d.x += event.dx);
      })
      .attr("cy", function (d) {
        return (d.y += event.dy);
      });
    updateRect();
    updateText();
  }

  function dragPoint2(event, d) {
    self.pointElement2
      .attr("cx", (self.rectData[1].x += event.dx))
      .attr("cy", (self.rectData[1].y += event.dy));
    updateRect();
    updateText();
  }

  function dragPoint3(event, d) {
    self.pointElement3
      .attr("cx", (self.rectData[1].x += event.dx))
      .attr("cy", (self.rectData[0].y += event.dy));
    updateRect();
    updateText();
  }

  function dragPoint4(event, d) {
    self.pointElement4
      .attr("cx", (self.rectData[0].x += event.dx))
      .attr("cy", (self.rectData[1].y += event.dy));
    updateRect();
    updateText();
  }
}
function TextSet() {
  $(".pointC").hide();
  var self = this,
    rect,
    rectData = [],
    isDown = false,
    m1,
    m2,
    isDrag = false;
  num1++;
  count = 0;
  Rectid = "TS-" + num1;

  rectColor = "blue";
  isFocused = false;
  var g = svgID.append("g");

  svgID
    .on("click", function (event) {
      m1 = d3.pointer(event, this);
      m1 = Refinement(m1);

      if (!isDown && !isDrag) {
        num1++;

        self.rectData = [
          {
            x: m1[0],
            y: m1[1],
          },
          {
            x: m1[0],
            y: m1[1],
          },
        ];

        self.rectangleElement = g
          .append("rect")
          .attr("id", Rectid)
          
          .attr("fill", "white")
          .attr("stroke", "#40403f")
          .attr("stroke-width", "3")
          .attr("stroke-dasharray", "3,4")
          .attr("rx", "15")
          .call(dragR);

        self.pointElement0 = g
          .append("circle")
          .attr("id", Rectid + "c0")
          .attr("class", "pointC")
          .call(dragC0);

        self.pointElement1 = g
          .append("circle")
          .attr("id", Rectid + "c1")
          .attr("class", "pointC")
          .call(dragC1);

        self.pointElement2 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c2")
          .call(dragC2);

        self.pointElement3 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c3")
          .call(dragC3);

        self.pointElement4 = g
          .append("circle")
          .attr("class", "pointC")
          .attr("id", Rectid + "c4")
          .call(dragC4);
        self.text1 = g.append("text").attr("id", Rectid + "t1");

        //updateRect();

        isDrag = false;
      } else {
        isDrag = true;
        if (!count) {
          updateText();
          drawtext(Rectid);
          count++;
          //only executes once
        }
      }

      $("text")
        .unbind("click")
        .click(function () {
          var str = $(this).attr("id");
          if (str.substring(0, 2) == "TS") {
            drawtext(str.substring(0, 9));
          }
        });

      isDown = !isDown;
    })

    .on("mousemove", function (event) {
      m2 = d3.pointer(event, this);
      m2 = Refinement(m2);
      if (isDown && !isDrag) {
        self.rectData[1] = {
          x: m2[0],
          y: m2[1],
        };

        updateRect();
      }
    });
  function updateText() {
    let text = "";
    data.shape[1].list.filter((p) => {
      if (p.ID == Rectid) {
        text = p.text;
      }
    });

    if (text == "") {
      text = "hello";
    }

    var x = (self.rectData[1].x + self.rectData[0].x) / 2;
    var y = (self.rectData[1].y + self.rectData[0].y) / 2;
    self.text1
      .attr("x", x)
      .attr("y", y)
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")

      .text(text);
  }

  function updateRect() {
    isFocused = focused == self.rectangleElement.attr("id");

    self.rectangleElement
      .attr(
        "x",
        self.rectData[1].x - self.rectData[0].x > 0
          ? self.rectData[0].x
          : self.rectData[1].x
      )
      .attr(
        "y",
        self.rectData[1].y - self.rectData[0].y > 0
          ? self.rectData[0].y
          : self.rectData[1].y
      )
      .attr("width", Math.abs(self.rectData[1].x - self.rectData[0].x))
      .attr("height", Math.abs(self.rectData[1].y - self.rectData[0].y));

    var currentR = getScale(5);

    self.pointElement0
      .data(self.rectData)
      .attr("r", "5px")
      .attr("cx", (self.rectData[0].x + self.rectData[1].x) / 2)
      .attr("cy", self.rectData[0].y - 20);

    self.pointElement1
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[0].x)
      .attr("cy", self.rectData[0].y);

    self.pointElement2
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[1].x)
      .attr("cy", self.rectData[1].y);
    self.pointElement3
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[1].x)
      .attr("cy", self.rectData[0].y);
    self.pointElement4
      .data(self.rectData)
      .attr("r", "5px")

      .attr("cx", self.rectData[0].x)
      .attr("cy", self.rectData[1].y);
  }

  var dragR = d3.drag().on("drag", dragRect);
  var dragC0 = d3.drag().on("drag", dragPoint0);
  var dragC1 = d3.drag().on("drag", dragPoint1);
  var dragC2 = d3.drag().on("drag", dragPoint2);
  var dragC3 = d3.drag().on("drag", dragPoint3);
  var dragC4 = d3.drag().on("drag", dragPoint4);

  function dragRect(event, d) {
    updateRect();

    if (isFocused) {
      for (var i = 0; i < self.rectData.length; i++) {
        self.rectangleElement
          .attr("x", (self.rectData[i].x += event.dx))
          .attr("y", (self.rectData[i].y += event.dy))
          .style("cursor", "pointer");
      }

      updateRect();
      updateText();
    }
  }

  function dragPoint0(event, d) {
    function angleBetweenPoints(p1, p2) {
      if (p1[0] == p2[0] && p1[1] == p2[1]) return Math.PI / 2;
      else return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
    }

    function distanceBetweenPoints(p1, p2) {
      return Math.sqrt(Math.pow(p2[1] - p1[1], 2) + Math.pow(p2[0] - p1[0], 2));
    }
    function toDegrees(rad) {
      return rad * (180 / Math.PI);
    }

    var exy = [event.x, event.y],
      dxy = [
        (self.rectData[0].x + self.rectData[1].x) / 2,
        self.rectData[0].y - 20,
      ],
      dist = distanceBetweenPoints(exy, dxy),
      angle = Math.PI + angleBetweenPoints(dxy, exy);

    g.attr(
      "transform",
      "rotate(" + toDegrees(angle) + "," + dxy[0] + "," + dxy[1] + ")"
    );
    updateRect();
    updateText();
  }

  function dragPoint1(event, d) {
    if (isFocused) {
      self.pointElement1
        .attr("cx", function (d) {
          return (d.x += event.dx);
        })
        .attr("cy", function (d) {
          return (d.y += event.dy);
        });
      updateRect();
      updateText();
    }
  }

  function dragPoint2(event, d) {
    self.pointElement2
      .attr("cx", (self.rectData[1].x += event.dx))
      .attr("cy", (self.rectData[1].y += event.dy));
    updateRect();
    updateText();
  }

  function dragPoint3(event, d) {
    self.pointElement3
      .attr("cx", (self.rectData[1].x += event.dx))
      .attr("cy", (self.rectData[0].y += event.dy));
    updateRect();
    updateText();
  }

  function dragPoint4(event, d) {
    self.pointElement4
      .attr("cx", (self.rectData[0].x += event.dx))
      .attr("cy", (self.rectData[1].y += event.dy));
    updateRect();
    updateText();
  }
}
function Circle() {
  var self = this,
    circle,
    circleData = [],
    isDown = false,
    m1,
    m2,
    distance,
    isDrag = false;
  Circleid;
  circleColor = "blue";
  svgID
    .on("click", function (event) {
      m1 = d3.pointer(event, this);
      m1 = Refinement(m1);

      num3++;
      Circleid = "C-" + num1;
      if (!isDown && !isDrag) {
        self.circleData = [
          {
            x: m1[0],
            y: m1[1],
          },
          {
            x: m1[0],
            y: m1[1],
          },
        ];

        self.circleElement = g
          .append("circle")
          .attr("id", Circleid)
          .attr("class", "circle12")
          .call(dragC);

        self.circle1 = g
          .append("circle")
          .attr("id", Circleid + "c1")
          .attr("class", "circle");
        self.circle2 = g
          .append("circle")
          .attr("id", Circleid + "c2")
          .attr("class", "circle")
          .call(dragC1);
        updateCircle();
        isDrag = false;
      } else {
        isDrag = true;
      }
      isDown = !isDown;
    })
    .on("mousemove", function (event) {
      m2 = d3.pointer(event, this);
      if (isDown && !isDrag) {
        self.circleData[1] = {
          x: m2[0],
          y: m2[1],
        };

        updateCircle();
      }
    });

  function updateCircle() {
    self.circleElement
      .attr("cx", function () {
        return self.circleData[0].x;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("stroke-width", "5px")
      .attr("stroke", "grey")
      .attr("fill", "red")
      

    distance = Math.sqrt(
      Math.pow(self.circleData[0].x - self.circleData[1].x, 2) +
        Math.pow(self.circleData[0].y - self.circleData[1].y, 2)
    );

    self.circle1
      .attr("cx", function () {
        return self.circleData[0].x;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("r", function () {
        return distance;
      })
      .attr("stroke", "grey")
      .attr("fill", function () {
        return circleColor;
      });

    self.circle2
      .attr("cx", function () {
        return self.circleData[0].x + distance;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("r", "5px")
      .attr("stroke", "grey")
      .attr("fill", "red");

    $("circle").click(function () {
      var str = $(this).attr("id");

      //drawsite(str);
    });
  }
  var dragC = d3.drag().on("drag", dragCircle);
  var dragC1 = d3.drag().on("drag", dragPoint1);

  function dragCircle(event, d) {
    for (var i = 0; i < self.circleData.length; i++) {
      self.circleElement
        .attr("cx", (self.circleData[i].x += event.dx))
        .attr("cy", (self.circleData[i].y += event.dy));
    }

    updateCircle();
  }

  function dragPoint1(event, d) {
    self.circle2
      .attr("cx", function (d) {
        return (self.circleData[1].x += event.dx);
      })
      .attr("cy", function (d) {
        return (self.circleData[1].y += event.dy);
      });

    updateCircle();
  }
}
function Circle() {
  var self = this,
    circle,
    circleData = [],
    isDown = false,
    m1,
    m2,
    distance,
    isDrag = false;
  Circleid;
  circleColor = "blue";
  count = 0;
  svgID
    .on("click", function (event) {
      m1 = d3.pointer(event, this);
      m1 = Refinement(m1);

      if (!isDown && !isDrag) {
        num3++;
        Circleid = "C-" + num3;
        $("#svgID .pointC").hide();
        self.circleData = [
          {
            x: m1[0],
            y: m1[1],
          },
          {
            x: m1[0],
            y: m1[1],
          },
        ];

        self.circleElement = g
          .append("circle")
          .attr("id", Circleid)

          .call(dragC);
        self.text1 = g.append("text").attr("id", Circleid + "t1");
        self.circle1 = g
          .append("circle")
          .attr("id", Circleid + "c1")
          .attr("class", "pointC");
        self.circle2 = g
          .append("circle")
          .attr("id", Circleid + "c2")
          .attr("class", "pointC")
          .call(dragC1);
        updateCircle();
        isDrag = false;
      } else {
        isDrag = true;

        if (!count) {
          updateText();
          drawcircle(Circleid);
          count++;
          //only executes once
        }
      }
      isDown = !isDown;
      $("circle")
        .unbind("click")
        .click(function () {
          var str = $(this).attr("id");
          if (str.substring(0, 2) == "C-") {
            drawcircle(str);
          }

          $("#svgID .pointC").hide();
          for (i = 1; i < 3; i++) {
            $("#" + str + "c" + i).show();
          }
        });
    })
    .on("mousemove", function (event) {
      m2 = d3.pointer(event, this);
      if (isDown && !isDrag) {
        self.circleData[1] = {
          x: m2[0],
          y: m2[1],
        };

        updateCircle();
      }
    });
  function updateText() {
    let text = "";
    data.shape[3].list.filter((p) => {
      if (p.ID == Rectid) {
        text = p.text;
      }
    });

    if (text == "") {
      text = "hello";
    }

    var x = self.circleData[0].x;
    var y = self.circleData[0].y;
    self.text1
      .attr("x", x)
      .attr("y", y)
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")

      .text(text);
  }
  function updateCircle() {
    self.circle1
      .attr("cx", function () {
        return self.circleData[0].x;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("r", "5px")
      .attr("stroke", "grey")
      .attr("fill", "red");

    distance = Math.sqrt(
      Math.pow(self.circleData[0].x - self.circleData[1].x, 2) +
        Math.pow(self.circleData[0].y - self.circleData[1].y, 2)
    );

    self.circleElement
      .attr("cx", function () {
        return self.circleData[0].x;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("r", function () {
        return distance;
      })
      .attr("stroke", "grey")
      .attr("fill", "#ad3e00")
      .attr("stroke-width", "3px");

    self.circle2
      .attr("cx", function () {
        return self.circleData[0].x + distance;
      })
      .attr("cy", function () {
        return self.circleData[0].y;
      })
      .attr("r", "5px")
      .attr("stroke", "grey")
      .attr("fill", "red");
  }
  var dragC = d3.drag().on("drag", dragCircle);
  var dragC1 = d3.drag().on("drag", dragPoint1);

  function dragCircle(event, d) {
    for (var i = 0; i < self.circleData.length; i++) {
      self.circleElement
        .attr("cx", (self.circleData[i].x += event.dx))
        .attr("cy", (self.circleData[i].y += event.dy));
    }

    updateCircle();
    updateText();
  }

  function dragPoint1(event, d) {
    self.circle2
      .attr("cx", function (d) {
        return (self.circleData[1].x += event.dx);
      })
      .attr("cy", function (d) {
        return (self.circleData[1].y += event.dy);
      });

    updateCircle();
    updateText();
  }
}
function hidecircle(id) {
  var clickcount = 0;
  $(document).bind("click", function (e) {
    if (clickcount) {
      if (
        $(e.target).closest($("rect")).length == 0 &&
        $(e.target).closest($("line")).length == 0
      ) {
        //hide the focus
        for (i = 0; i < 5; i++) {
          $("#" + id + "c" + i).hide();
        }
      } else {
        $("#svgID .pointC").hide();
        for (i = 0; i < 5; i++) {
          $("#" + id + "c" + i).show();
        }
      }
    } else {
      clickcount++;
    }
  });
}

function showFocus(id) {
  $("#svgID .pointC").hide();

  //d3.selectAll('rect').call(d3.drag().on("drag", null));

  for (i = 0; i < 5; i++) {
    $("#" + id + "c" + i).show();
  }
}
summerEditor();
function summerEditor() {
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
function drawrect(id) {
  focused = id;
  loadrect("#shape", id);
  PropertyLoadToJson(id,0);
}
function drawline(id) {
  focused = id;
  loadline("#shape", id);
}
function drawtext(id) {
  focused = id;

  loadtext("#shape", id);
}
function drawcircle(id) {
  focused = id;

  loadcircle("#shape", id);
   PropertyLoadToJson(id,3);
}

function fixpostion(self, id) {
  self.rectData[0].x = $("#" + id).attr("x");
  self.rectData[0].y = $("#" + id).attr("y");
  self.rectData[1].x = $("#" + id).attr("x") + $("#" + id).attr("width");
  self.rectData[1].y = $("#" + id).attr("x") + $("#" + id).attr("height");
}
