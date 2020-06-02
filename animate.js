const titles = document.querySelectorAll(".open-title");
titles.forEach(function (title) {
  title.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click!");

    const expanded = document.querySelectorAll(".expand");
    expanded.forEach(function (eachExpand) {
      if (eachExpand.style.display === "none") {
        eachExpand.style.display = "block";
        //   titles.style.backgroundColor = "#F28040";
      } else {
        eachExpand.style.display = "none";
      }
    });
  });
});
