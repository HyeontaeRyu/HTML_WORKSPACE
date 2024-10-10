function nSquaretable(num) {
  document.write(
    "<table width=80% border=1 style='margin:auto; text-align:center'>"
  );
  for (let i = 0; i < num; i++) {
    document.write("<tr>");
    if (i == 0) {
      document.write("<th>" + "n" + "</th>");
    } else {
      document.write("<th>" + "n" + "<sup>" + (i + 1) + "</sup>" + "</th>");
    }
    for (let j = 0; j < 9; j++) {
      document.write("<td>" + (j + 1) ** (i + 1) + "</td>");
    }
  }
  document.write("</table>");
}
