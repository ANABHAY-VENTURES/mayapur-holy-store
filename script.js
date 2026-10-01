const data = [
  {
    id: 1,
    title: "Gaura-Nitai in Festive Purple",
    tag: "A little piece of Mayapur",
    price: 4999,
    img: "assets/gaura-nitai-purple.jpg",
    type: "deities"
  },
  {
    id: 2,
    title: "Narasimha Brass Deity",
    tag: "Crafted with care and devotion",
    price: 3999,
    img: "assets/narsimha-brass.jpg",
    type: "deities"
  },
  {
    id: 3,
    title: "Gaura-Nitai Blue Collection",
    tag: "Traditional beauty from Mayapur",
    price: 4499,
    img: "assets/gaura-nitai-blue.jpg",
    type: "deities"
  },
  {
    id: 4,
    title: "Gaura-Nitai Yellow Collection",
    tag: "From Mayapur to your home",
    price: 4499,
    img: "assets/gaura-nitai-yellow.jpg",
    type: "deities"
  },
  {
    id: 5,
    title: "Gaura-Nitai Deity Set",
    tag: "Handcrafted for your devotional space",
    price: 4999,
    img: "assets/gaura-nitai-set.jpg",
    type: "deities"
  },
  {
    id: 6,
    title: "Festive Deity Dress",
    tag: "Detailed devotional attire",
    price: 1499,
    img: "assets/gaura-nitai-purple.jpg",
    type: "dresses"
  }
];

let cart = JSON.parse(localStorage.getItem("mhs") || "[]");

const money = n => "₹" + n.toLocaleString("en-IN");


/* =========================================================
   INSTAGRAM-STYLE JOURNAL POSTS
========================================================= */

function posts() {
  const postsContainer = document.querySelector("#posts");

  if (!postsContainer) return;

  postsContainer.innerHTML = data
    .slice(0, 6)
    .map(
      p => `
        <article class="post">
          <div class="post-media">
            <img src="${p.img}" alt="${p.title}">
            <div class="post-meta">
              <span>@mayapurpoojabox</span>
              <span>♡</span>
            </div>
          </div>

          <div class="post-info">
            <h3>${p.title}</h3>
            <p>“${p.tag}.”</p>

            <div class="post-bottom">
              <b>${money(p.price)}</b>
              <a href="#shop">View product →</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}


/* =========================================================
   PRODUCT CATALOGUE
========================================================= */

function products(filter = "all") {
  const productsContainer = document.querySelector("#products");

  if (!productsContainer) return;

  productsContainer.innerHTML = data
    .filter(p => filter === "all" || p.type === filter)
    .map(
      p => `
        <article class="product">
          <div class="product-media">
            <img src="${p.img}" alt="${p.title}">
            <button onclick="add(${p.id})">+</button>
          </div>

          <h3>${p.title}</h3>
          <p>${p.tag}</p>
          <p class="price">${money(p.price)}</p>
        </article>
      `
    )
    .join("");
}


/* =========================================================
   CART
========================================================= */

function add(id) {
  const product = data.find(p => p.id === id);

  if (!product) return;

  cart.push(product);

  localStorage.setItem("mhs", JSON.stringify(cart));

  renderCart();
  openCart();
}


function remove(index) {
  cart.splice(index, 1);

  localStorage.setItem("mhs", JSON.stringify(cart));

  renderCart();
}


function renderCart() {
  const count = document.querySelector("#count");
  const items = document.querySelector("#items");
  const totalElement = document.querySelector("#total");
  const order = document.querySelector("#order");

  if (!count || !items || !totalElement || !order) return;

  count.textContent = cart.length;

  if (cart.length) {
    items.innerHTML = cart
      .map(
        (p, i) => `
          <div class="cartline">
            <img src="${p.img}" alt="${p.title}">

            <div>
              <strong>${p.title}</strong>
              <small>${money(p.price)}</small>
            </div>

            <button onclick="remove(${i})">×</button>
          </div>
        `
      )
      .join("");
  } else {
    items.innerHTML =
      "<p style='color:#77685e'>Your bag is empty.</p>";
  }

  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  totalElement.textContent = money(total);

  const message = cart.length
    ? `Hare Krishna! I would like to enquire about: ${cart
        .map(p => p.title)
        .join(", ")}.

Please share availability and shipping details.`
    : "Hare Krishna! I would like to know more about your products.";

  order.href =
    "https://wa.me/919547231074?text=" +
    encodeURIComponent(message);
}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

const cartElement = document.querySelector("#cart");
const overlay = document.querySelector("#overlay");


function openCart() {
  if (!cartElement || !overlay) return;

  cartElement.classList.add("open");
  overlay.classList.add("show");
}


function closeCart() {
  if (!cartElement || !overlay) return;

  cartElement.classList.remove("open");
  overlay.classList.remove("show");
}


/* =========================================================
   PRODUCT FILTERS
========================================================= */

document.querySelectorAll(".filters button").forEach(button => {
  button.onclick = () => {
    document
      .querySelectorAll(".filters button")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    products(button.dataset.f);
  };
});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

window.addEventListener(
  "pointermove",
  event => {
    const cursor = document.querySelector(".cursor");

    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  },
  {
    passive: true
  }
);


/* =========================================================
   SMART VIDEO AUTOPLAY
=========================================================

   Videos:
   - Start muted
   - Autoplay when visible
   - Pause when mostly off-screen
   - Loop continuously
   - Work with mobile inline playback
========================================================= */

const videoObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const video = entry.target;

      if (
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.35
      ) {
        /*
         * Force muted autoplay.
         * Muted autoplay is much more widely
         * permitted by modern browsers.
         */

        video.muted = true;

        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");

        const playPromise = video.play();

        /*
         * Some browsers may still reject autoplay.
         * We silently handle that so the site doesn't
         * throw an error.
         */

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser blocked autoplay.
            // Native controls remain available.
          });
        }
      } else {
        /*
         * Pause videos when they are no longer
         * sufficiently visible.
         */

        video.pause();
      }
    });
  },
  {
    threshold: [0, 0.35, 0.75]
  }
);


/* =========================================================
   INITIALIZE ALL VIDEOS
========================================================= */

document.querySelectorAll("video").forEach(video => {

  /*
   * Force the important autoplay attributes.
   */

  video.muted = true;

  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("loop", "");

  /*
   * Observe the video for smart autoplay.
   */

  videoObserver.observe(video);


  /*
   * Detect missing/broken video files.
   */

  video.addEventListener("error", () => {

    const frame = video.closest(".video-frame");

    if (frame) {
      frame.classList.add("video-missing");
    }

    console.warn(
      "Video could not be loaded:",
      video.currentSrc || video.src
    );
  });


  /*
   * Try to start the video immediately as well.
   * The IntersectionObserver will manage it afterwards.
   */

  video.play().catch(() => {
    // Browser may block autoplay.
  });
});


/* =========================================================
   INITIAL PAGE LOAD
========================================================= */

posts();
products();
renderCart();