//array
let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est a nobis ut obcaecati sapiente laboriosam assumenda nemo ad aperiam.",
    image: "images/slider 2.png",
  },
  {
    name: "Loki",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est a nobis ut obcaecati sapiente laboriosam assumenda nemo ad aperiam.",
    image: "images/slider 1.png",
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est a nobis ut obcaecati sapiente laboriosam assumenda nemo ad aperiam.",
    image: "images/slider 3.png",
  },
  {
    name: "rays and the last dragon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est a nobis ut obcaecati sapiente laboriosam assumenda nemo ad aperiam.",
    image: "images/slider 4.png",
  },
  {
    name: "Luca",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi est a nobis ut obcaecati sapiente laboriosam assumenda nemo ad aperiam.",
    image: "images/slider 5.png",
  },
];

//slider
const caraousel = document.querySelector(".caraousel");
let slider = []; //empty array

let slideIndex = 0; //track the current slide
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  slider.push(slide);

  if (slide.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
      30 * (slider.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
