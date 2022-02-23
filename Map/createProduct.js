function create(svdid) {
  createMap(svgid);
}
//attrname:["x","y","width","height","backgroundcolor","bordercolor","borderwidth","rx"]
function shapeUpdate(id, attrname, attrvalue) {
  switch (attrname) {
    case "x":
      $("#" + id).attr("x", attrvalue);
      break;
    case "y":
      $("#" + id).attr("y", attrvalue);
      break;
    case "width":
      $("#" + id).attr("width", attrvalue);
      break;
    case "height":
      $("#" + id).attr("height", attrvalue);
      break;
    case "backgroundcolor":
      $("#" + id).attr("fill", attrvalue);
      break;
    case "bordercolor":
      $("#" + id).attr("stroke", attrvalue);
      break;
    case "borderwidth":
      $("#" + id).attr("stroke-width", attrvalue);
      break;
    case "rx":
      $("#" + id).attr("rx", attrvalue);
      break;
    default:
      console.log(
        "Sorry, we cannot identify the attrname: " +
          attrname +
          ". Please check it, thanks."
      );
      break;
  }
  SetTextposition(id);
}
//id: Rectangle ID, e.g,"S-900003"
//isRetain: Whether to retain original data
//newproperty={"text":"zhangyi","Site":"SG","Number":"11023"}

function propertyUpdate(data, id, part, newproperty) {
  if (data.shape[0].list.filter((p) => p.ID == id).length != 0) {
    //ID exists.
    data.shape[0].list.filter((p) => {
      if (p.ID == id) {
        let count = 0;

        Object.keys(newproperty).forEach((key) => {
          if (newproperty["text"] != null) {
            p["text"] = newproperty["text"];
          }
          p.property[part].content[key] = newproperty[key];
          count++;
        });
        console.log("The id exists and has been updated with" + count + "data");
      }
    });
  } else {
    let obj = {};
    obj["ID"] = id;
    obj["text"] = newproperty["text"];
    obj["property"] = [
      {
        name: "body",
        content: {},
      },
      { name: "foot", content: {} },
    ];
    obj["property"][part].content = newproperty;

    data.shape[0].list.push(obj);
    console.log("The id does not exist, new data has been created");
  }

  return data;
}
function SetTextposition(id) {
  var x = parseInt($("#" + id).attr("x"));
  var y = parseInt($("#" + id).attr("y"));
  var width = parseInt($("#" + id).attr("width"));
  var height = parseInt($("#" + id).attr("height"));

  $("#" + id + "t1")
    .attr("x", x + width / 2)
    .attr("y", y + height / 2);
}
