var today = new Date();
var firstM = "January";
var tMonth = today.getMonth();
var tDate = today.getDate();
tMonth += tMonth / 2 + tDate++;
if (tMonth == 10) {
  document.getElementById("tHead").innerHTML = "It's Fall";
//   document.write(
//     "It's October - time for sweaters, hot drinks, and campfires."
//   );
} else if (tMonth < 5 && tMonth < 10) {
  document.getElementById("tHead").innerHTML = "It's Spring/Sumer";
//   document.write("Warm weather with flowers and sunshine.");
} else {
  document.getElementById("tHead").innerHTML = "It's winter!";
//   document.write(
//     "It's chilly outside! Better wear your winter coat, gloves, and hat!"
//   );
}
