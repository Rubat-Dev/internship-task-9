// Dom Elements
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuIcon = mobileMenuButton.querySelector("i");
const container = document.getElementById("destinationsContainer");
const destinationBtn = document.getElementById("destinationBtn");
const packageBtn = document.getElementById("packageBtn");
const packageContainer = document.getElementById("packagesContainer");
const slider = document.getElementById("testimonialSlider");
const dots = document.querySelectorAll("[data-index]");
const darkModeToggle = document.getElementById("darkModeToggle");
const searchForm = document.getElementById('searchForm');
const errorMsgs = document.querySelectorAll('.error-msg');

// Mobile Menu Toggle
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-[600px]");
  mobileMenu.classList.toggle("dark:bg-gray-800");
  mobileMenuIcon.classList.toggle("fa-bars");
  mobileMenuIcon.classList.toggle("fa-times");
});

// destinations-list
const destinations = [
  {
    title: "Bali, Indonesia",
    desc: "Experience the perfect blend of culture, beaches, and nightlife in the Island.",
    price: "$899",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "Paris, France",
    desc: "Discover the city of love with its iconic Eiffel Tower and world-class cuisine.",
    price: "$1,199",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "Santorini, Greece",
    desc: "Enjoy stunning sunsets and white-washed buildings in this Aegean paradise.",
    price: "$1,099",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "Kyoto, Japan",
    desc: "Step into ancient temples, tranquil gardens, and rich traditions of Japan.",
    price: "$999",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "Dubai, UAE",
    desc: "Explore luxury shopping, ultramodern architecture, and desert adventures.",
    price: "$1,299",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop"
  },
  {
    title: "New York, USA",
    desc: "The city that never sleeps — lights, skyscrapers, and endless energy.",
    price: "$1,399",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&auto=format&fit=crop"
  }
];

// package list
const packages = [
  {
    title: "European Adventure",
    price: 1899,
    desc: "7-day tour through Paris, Rome, and Barcelona. Includes flights, hotels, and guided tours.",
    features: ["4-star accommodations", "Breakfast included", "Guided city tours", "Airport transfers"]
  },
  {
    title: "Asian Explorer",
    price: 1599,
    desc: "10-day journey through Tokyo, Seoul, and Bangkok. Includes flights, hotels, and excursions.",
    features: ["Luxury hotels", "Daily breakfast", "Cultural experiences", "Local guides"]
  },
  {
    title: "Dubai Luxury Escape",
    price: 999,
    desc: "5-day luxury trip to Dubai with desert safari, Burj Khalifa, and premium hotels.",
    features: ["5-star hotel", "Desert Safari", "Burj Khalifa tickets", "Airport pickup"]
  },
  {
    title: "Maldives Retreat",
    price: 2499,
    desc: "7-day relaxing trip to Maldives with beach resorts and water sports.",
    features: ["Beach villa", "All meals included", "Snorkeling", "Private transfers"]
  },
  {
    title: "American Discovery",
    price: 1999,
    desc: "10-day road trip across New York, LA, and Las Vegas. Flights & Hotels included.",
    features: ["3-star hotels", "Car rental", "City tours", "Theme park tickets"]
  },
  {
    title: "African Safari",
    price: 2200,
    desc: "7-day safari in Kenya with game drives and luxury lodges.",
    features: ["Luxury lodges", "Wildlife tours", "All meals", "Transfers included"]
  }
];
// Function to render a destination card
function renderCard(dest) {
  return `
    <div class="destination-card bg-white rounded-2xl overflow-hidden shadow-lg">
      <div class="relative overflow-hidden">
        <img src="${dest.image}" srcset="${dest.image}&w=400&q=70&fm=webp 400w,${dest.image}&w=800&q=80&fm=webp 800w,
          ${dest.image}&w=1200&q=80&fm=webp 1200w" sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px,1200px" alt="${dest.title}"
         class="w-full h-48 object-cover transform hover:scale-110 transition duration-700">
        <div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
          <i class="fas fa-star mr-1"></i> ${dest.rating}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 dark:text-gray-600">${dest.title}</h3>
        <p class="text-gray-700 mb-4">${dest.desc}</p>
        <div class="flex justify-between items-center">
          <span class="text-primary font-bold">${dest.price}</span>
          <button class="text-sm bg-blue-100 text-primary hover:bg-blue-200 px-4 py-2 rounded-full transition">
            Explore <i class="fas fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Show only first 3 initially
container.innerHTML = destinations.slice(0, 3).map(renderCard).join("");

// On button click show all
destinationBtn.addEventListener("click", () => {
  container.innerHTML = destinations.map(renderCard).join("");
  destinationBtn.style.display = "none";
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear previous errors
  errorMsgs.forEach(err => err.textContent = '');

  const destination = e.target.elements['destination'].value.trim();
  const date = e.target.elements['date'].value.trim();
  const budget = e.target.elements['budget'].value.trim();

  let isValid = true;

  // ✅ Validate Destination
  if (!destination) {
    errorMsgs[0].textContent = '❌ Please enter a destination';
    isValid = false;
  } else if (destination.length < 3) {
    errorMsgs[0].textContent = '❌ Must be at least 3 characters';
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(destination)) {
    errorMsgs[0].textContent = '❌ Only letters and spaces allowed';
    isValid = false;
  }
  console.log(destination)
  // ✅ Validate Date
  if (!date) {
    errorMsgs[1].textContent = '❌ Please select a travel date';
    isValid = false;
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // current date without time
    const travelDate = new Date(date);
    console.log(travelDate);

    if (travelDate < today) {
      errorMsgs[1].textContent = '❌ Date cannot be in the past';
      isValid = false;
    }
  }

  // ✅ Validate Budget
  if (!budget) {
    errorMsgs[2].textContent = '❌ Please enter your budget';
    isValid = false;
  } else if (isNaN(budget)) {
    errorMsgs[2].textContent = '❌ Budget must be a number';
    isValid = false;
  } else if (budget <= 0) {
    errorMsgs[2].textContent = '❌ Must be greater than 0';
    isValid = false;
  } else if (budget < 100 || budget > 50000) {
    errorMsgs[2].textContent = '❌ Must be between $100 and $50,000';
    isValid = false;
  }
  console.log(budget)

  // ✅ If all validations pass
  if (isValid) {
    showPopup(destination, date, budget);
  }
});

function showPopup(destination, date, budget) {
  document.getElementById('popupMessage').textContent =
    `Searching for trips to ${destination} on ${date} with a budget of $${budget}`;
  document.getElementById('successPopup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('successPopup').classList.add('hidden');
  searchForm.reset(); // ✅ form reset after popup close
  errorMsgs.forEach(err => err.textContent = ''); // ✅ errors clear
}


//  Function to render a destination card
function renderPackageCard(pkg, index) {
  const bg = bgColors[index % bgColors.length];
  return `<div class="package-card bg-gradient-to-br from-blue-50 to-indigo-50  rounded-2xl overflow-hidden shadow-xl">
  <div class="p-6">
      <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">${pkg.title}</h3>
          <span class="text-2xl font-bold text-primary">${pkg.price}</span>
      </div>
      <p class="text-gray-700 mb-6">${pkg.desc}</p>
      <ul class="my-6 space-y-3">
          <li class="flex items-center text-gray-600">
              <i class="fas fa-check-circle text-green-500 mr-3"></i> ${pkg.features[0]}
          </li>
          <li class="flex items-center text-gray-600">
              <i class="fas fa-check-circle text-green-500 mr-3"></i> ${pkg.features[1]}
          </li>
          <li class="flex items-center text-gray-600">
              <i class="fas fa-check-circle text-green-500 mr-3"></i> ${pkg.features[2]}
          </li>
          <li class="flex items-center text-gray-600">
              <i class="fas fa-check-circle text-green-500 mr-3"></i> ${pkg.features[3]}
          </li>
      </ul>
      <button class="w-full btn bg-primary py-4 rounded-xl mt-4 shadow-lg text-white font-bold">Book Now</button>
  </div>
</div>`;
}
// Show only first 3 initially
packageContainer.innerHTML = packages.slice(0, 3).map(renderPackageCard).join("");
// On button click show all
packageBtn.addEventListener('click', () => {
  packageContainer.innerHTML = packages.map(renderPackageCard).join("");
  packageBtn.style.display = "none";
});

// Testimonials slider
let index = 0;
const slides = slider.children.length;

function showSlide(i) {
  index = i;
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Active dot change
  dots.forEach((dot, idx) => {
    dot.classList.remove("bg-gray-400");
    dot.classList.add("bg-gray-300");
    if (idx === index) {
      dot.classList.remove("bg-gray-300");
      dot.classList.add("bg-gray-400");
    }
  });
}

// Auto slide
setInterval(() => {
  index = (index + 1) % slides;
  showSlide(index);
}, 4000);

// Dot click functionality
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.index));
  });
});


// light/dark mode toggle
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
// Toggle on button click
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const icon = darkModeToggle.querySelector("i");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
