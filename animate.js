const titles = document.querySelectorAll(".open-title");

titles.forEach(function (title) {
  title.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click!");

    const _this = this;

    let nextNode = _this.nextElementSibling;

    let tags_container = document.querySelector(".info .tags");
    console.log("the classes", nextNode.classList);

    if (nextNode.classList.contains("active")) {
      _this.classList.remove("active");
      nextNode.classList.remove("active");

      tags_container.dataset.project = "";
    } else {
      const expanded = document.querySelectorAll(".expand");
      expanded.forEach(function (eachExpand, index) {
        eachExpand.classList.remove("active");
      });
      titles.forEach(function (eachTitle) {
        eachTitle.classList.remove("active");
      });

      _this.classList.add("active");
      nextNode.classList.add("active");

      tags_container.dataset.project = _this.dataset.type;
    }

    // console.log("Which ONe", _this.dataset.type);

    _this.addClass;
  });
});

titles.forEach(function (title) {
  title.addEventListener("mouseover", function (e) {
    e.preventDefault();
    console.log("click!");

    const _this = this;

    let nextNode = _this.nextElementSibling;

    let tags_container = document.querySelector(".info .tags");

    if (nextNode.classList.contains("active")) {
    } else {
      tags_container.dataset.project = _this.dataset.type;
    }

    // console.log("Which ONe", _this.dataset.type);

    // _this.addClass;
  });
});

titles.forEach(function (title) {
  title.addEventListener("mouseleave", function (e) {
    e.preventDefault();

    let tags_container = document.querySelector(".info .tags");
    let active_titles = document.querySelector(".open-title.active");

    if (active_titles) {
      let proj = active_titles.dataset.type;
      // console.log("Which Project?", proj);
      tags_container.dataset.project = proj;
    } else {
      tags_container.dataset.project = "";
    }
  });
});
