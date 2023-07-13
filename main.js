// MENU

const btnMenu = document.getElementById("handle-menu");
const navbar = document.getElementById("navbar");
const navBtns = document.querySelectorAll(".nav-item");

let menuIsOpen = false;

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

btnMenu.addEventListener("click", function (e) {
  if (!menuIsOpen) {
    btnMenu.classList.replace("bx-menu-alt-right", "bx-x");
    navbar.classList.add("active");
    menuIsOpen = true;
    disableScroll();
  } else {
    btnMenu.classList.replace("bx-x", "bx-menu-alt-right");
    navbar.classList.remove("active");
    menuIsOpen = false;
    enableScroll();
  }
});

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnMenu.classList.replace("bx-x", "bx-menu-alt-right");
    navbar.classList.remove("active");
    menuIsOpen = false;
    enableScroll();
  });
});

// CHANGE IMAGES GRID

const imgs = document.querySelectorAll(".grid-item");

const btnPopular = document.querySelector(".popular");
const btnAll = document.querySelector(".all");
const btnTable = document.querySelector(".table");
const btnLamp = document.querySelector(".lamp");

const TableImgs = [
  "/assets/table/table-1.webp",
  "/assets/table/table-2.webp",
  "/assets/table/table-3.webp",
  "/assets/table/table-4.webp",
  "/assets/table/table-5.webp",
  "/assets/table/table-6.webp",
];

const LampImgs = [
  "/assets/lamp/lamp-1.webp",
  "/assets/lamp/lamp-2.webp",
  "/assets/lamp/lamp-3.webp",
  "/assets/lamp/lamp-4.webp",
  "/assets/lamp/lamp-5.webp",
  "/assets/lamp/lamp-6.webp",
];

const ChairImgs = [
  "/assets/chair/chair-1.webp",
  "/assets/chair/chair-2.webp",
  "/assets/chair/chair-3.webp",
  "/assets/chair/chair-4.webp",
  "/assets/chair/chair-5.webp",
  "/assets/chair/chair-6.webp",
];

const PopularImgs = [
  "/assets/table/table-1.webp",
  "/assets/table/table-2.webp",
  "/assets/chair/chair-3.webp",
  "/assets/chair/chair-4.webp",
  "/assets/lamp/lamp-5.webp",
  "/assets/lamp/lamp-6.webp",
];

btnPopular.addEventListener("click", function (e) {
  btnAll.classList.remove("active");
  btnTable.classList.remove("active");
  btnLamp.classList.remove("active");
  btnPopular.classList.add("active");

  PopularImgs.forEach((img, index) => {
    imgs[index].src = img;
  });
});

btnAll.addEventListener("click", function (e) {
  btnTable.classList.remove("active");
  btnLamp.classList.remove("active");
  btnPopular.classList.remove("active");
  btnAll.classList.add("active");

  ChairImgs.forEach((img, index) => {
    imgs[index].src = img;
  });
});

btnTable.addEventListener("click", function (e) {
  btnAll.classList.remove("active");
  btnLamp.classList.remove("active");
  btnPopular.classList.remove("active");
  btnTable.classList.add("active");

  TableImgs.forEach((img, index) => {
    imgs[index].src = img;
  });
});

btnLamp.addEventListener("click", function (e) {
  btnAll.classList.remove("active");
  btnTable.classList.remove("active");
  btnPopular.classList.remove("active");
  btnLamp.classList.add("active");

  LampImgs.forEach((img, index) => {
    imgs[index].src = img;
  });
});

// ACORDEON

const acordeonItems = document.querySelectorAll(".acordeon-item");
const acordeonImgs = document.querySelectorAll(".img-acordeon");

const PatioImgs = [
  "/assets/patio/patio-1.webp",
  "/assets/patio/patio-2.webp",
  "/assets/patio/patio-3.webp",
];

const LivingImgs = [
  "/assets/living/living-1.webp",
  "/assets/living/living-2.webp",
  "/assets/living/living-3.webp",
];

const WorkspaceImgs = [
  "/assets/workspace/workspace-1.webp",
  "/assets/workspace/workspace-2.webp",
  "/assets/workspace/workspace-3.webp",
];

const GamingImgs = [
  "/assets/gaming/gaming-1.webp",
  "/assets/gaming/gaming-2.webp",
  "/assets/gaming/gaming-3.webp",
];

function changeImgs(id) {
  if (id === "gaming") {
    GamingImgs.forEach((img, index) => {
      acordeonImgs[index].src = img;
    });
  }

  if (id === "patio") {
    PatioImgs.forEach((img, index) => {
      acordeonImgs[index].src = img;
    });
  }

  if (id === "living") {
    LivingImgs.forEach((img, index) => {
      acordeonImgs[index].src = img;
    });
  }

  if (id === "workspace") {
    WorkspaceImgs.forEach((img, index) => {
      acordeonImgs[index].src = img;
    });
  }

  return;
}

function toggleActive(itemActive) {
  acordeonItems.forEach((element) => {
    element.classList.remove("active");
  });

  itemActive.classList.add("active");
}

function toggleActiveImgs(itemActiveImg) {
  containerImgs.forEach((element) => {
    element.classList.remove("active");
  });

  itemActiveImg.classList.add("active");
}

acordeonItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggleActive(item);
    changeImgs(item.dataset.id);
  });
});

const containerImgs = document.querySelectorAll(".box");

containerImgs.forEach((box) => {
  box.addEventListener("click", (e) => {
    toggleActiveImgs(box);
  });
});

// SLIDER

const slider = document.getElementById("slider");

const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

let slide = 1;

btnRight.addEventListener("click", (e) => {
  e.preventDefault();

  if (slide === 1) {
    slider.style.transform = "translateX(-33.33%)";
    slide++;
    return;
  }

  if (slide === 2) {
    slider.style.transform = "translateX(-66.66%)";
    slide++;
    return;
  }

  if (slide === 3) {
    slider.style.transform = "translateX(0)";
    slide = 1;
    return;
  }
});

btnLeft.addEventListener("click", (e) => {
  e.preventDefault();

  if (slide === 1) {
    slider.style.transform = "translateX(-66.66%)";
    slide = 3;
    return;
  }

  if (slide === 3) {
    slider.style.transform = "translateX(-33.33%)";
    slide--;
    return;
  }

  if (slide === 2) {
    slider.style.transform = "translateX(0)";
    slide--;
    return;
  }
});

// SCROLL SPY

const encabezados = document.querySelectorAll(".encabezado");
const navLinks = document.querySelectorAll(".nav-link")

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let section =`#${entry.target.dataset.section}`
        history.pushState({}, section, section);
        navLinks.forEach(link => {
          if (section === link.hash){
            link.classList.add("active")
            return
          }
          link.classList.remove("active")
        })
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px",
  }
);

encabezados.forEach((encabezado) => {
  observer.observe(encabezado);
});
