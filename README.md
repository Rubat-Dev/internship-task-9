🌍 ExploreNow - Travel Website

ExploreNow is a modern, responsive travel website built with HTML, Tailwind CSS, and Vanilla JavaScript.
It helps users discover destinations, view travel packages, and read testimonials in an elegant design.

🚀 Features

Responsive Navbar with desktop & mobile menu

Hero Section with search form (destination, date, budget)

Popular Destinations (dynamic cards rendered from JS data)

Travel Packages (dynamic cards with gradient backgrounds)

Testimonials Slider with auto-slide & dot indicators

Newsletter Section for email subscriptions

Footer Section with quick links, contact info, and social media

🛠️ Tech Stack

Frontend: HTML5, Tailwind CSS, Font Awesome, Google Fonts

JavaScript: Vanilla JS for interactivity (dynamic cards, mobile menu, slider, form validation)

Styling: Tailwind config (custom colors, animations, fonts) + custom CSS



📂 Project Structure
explorenow/
│── index.html        # Main HTML file  
│── style.css         # Custom CSS for extra styles & animations  
│── script.js         # JavaScript for dynamic rendering & interactivity  
│── README.md         # Project documentation  


🎒 Packages

Gradient background cards with feature lists.

💬 Testimonials Slider

Auto-slide + clickable dot indicators.

🖥️ How It Works

Destinations & Packages:
Data arrays in script.js → dynamically rendered into cards → "View All" button loads all.

Search Form:
Validates inputs (destination + date required, budget optional) and shows an alert.

Mobile Menu:
Toggles open/close with smooth animation + icon change (fa-bars ↔ fa-times).

Testimonials Slider:

Auto-slides every 4 seconds

Dot indicators for manual navigation

Smooth transition effect

🎨 Customization

Update colors in tailwind.config inside <script> in index.html.

Change background gradients in bgColors array in script.js.

Add more destinations/packages by updating arrays.

📜 License

This project is licensed under the MIT License.

✨ Designed with ❤️ using Tailwind CSS + JS