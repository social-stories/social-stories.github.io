// paper.install(window);
// // Get a reference to the canvas object
// var canvas = document.getElementById("myCanvas");
// // Create an empty project and a view for the canvas:
// paper.setup(canvas);

// var path;
// // Create a Paper.js Path to draw a line into it:

// var tool = new Tool();
// tool.onMouseDown = function(event) {
//   // If we produced a path before, deselect it:
//   if (path) {
//     path.selected = false;
//   }

//   // Create a new path and set its stroke color to black:
//   path = new Path();
//   path.add(event.point);
//   path.strokeColor = "black";

//   // Select the path, so we can see its segment points:
//   path.fullySelected = true;
// };

// tool.onMouseDrag = function(event) {
//   path.add(event.point);
// };

// tool.onMouseUp = function(event) {
//   var segmentCount = path.segments.length;

//   // When the mouse is released, simplify it:
//   path.simplify(10);

//   // Select the path, so we can see its segments:
//   path.fullySelected = true;

//   $("#theJSON").val(path.segments);
// };
