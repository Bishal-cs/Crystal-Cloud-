// js/main.js

// 1. Mobile menu toggle
const hamburger       = document.getElementById('hamburger');
const hamburgerIcon   = document.getElementById('hamburger-icon');
const navLinks        = document.getElementById('nav-links');
const ctaButtons      = document.querySelector('.cta-buttons');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  ctaButtons.classList.toggle('active');
  if (hamburgerIcon) {
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-times');
  }
});

// 2. Hosting data with links and backgrounds
const hostingData = {
  minecraft: {
    tag:   "Minecraft Hosting",
    title: "Minecraft Crystal.Cloud",
    desc:  "Crystal Cloud offers high-performance Minecraft hosting for smooth, reliable gameplay.",
    price: "$1.00",
    bg:    "url('assets/minecraft-bg.png')",
    link:  "Hosting/minecraft_hosting.html"
  },
  vps: {
    tag:   "VPS Hosting",
    title: "VPS Hosting by Crystal.Cloud",
    desc:  "Crystal Cloud provides high-performance, quality VPS hosting in multiple global locations.",
    price: "$6.00",
    bg:    "url('assets/vps-bg.jpg')",
    link:  "Hosting/vps_hosting.html"
  },
  discord: {
    tag:   "Discord Bot Hosting",
    title: "Discord Hosting by Crystal.Cloud",
    desc:  "Host powerful Discord bots with 24/7 uptime and zero lag.",
    price: "$0.99",
    bg:    "url('assets/discord-bg.jpg')",
    link:  "Hosting/discord_hosting.html"
  },
  web: {
    tag:   "Web Hosting",
    title: "Web Hosting by Crystal.Cloud",
    desc:  "Launch fast, secure websites with one-click WordPress installs and 99.99% uptime.",
    price: "$1.49",
    bg:    "url('assets/web-bg.jpg')",
    link:  "Hosting/web_hosting.html"
  }
};

// 3. Hero content and switch buttons
const hostingButtons = document.querySelectorAll('.switch-btn');
const heroContent    = document.querySelector('.hero-content');
const getStartedLink = document.getElementById('get-started');

hostingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    const data = hostingData[type];

    // if already active, do nothing
    if (btn.classList.contains('active')) return;

    // highlight the new active button
    hostingButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // animate current content out
    heroContent.classList.add('animate-out');

    setTimeout(() => {
      // update hero text and background
      document.getElementById('hero-tag').textContent   = data.tag;
      document.getElementById('hero-title').innerHTML  =
        data.title.replace('Crystal.Cloud', '<span class="highlight">Crystal.Cloud</span>');
      document.getElementById('hero-desc').textContent  = data.desc;
      document.getElementById('hero-price').innerHTML   =
        `Servers start at <span class="highlight price">${data.price}</span> per month`;
      document.getElementById('hero-section').style.backgroundImage = data.bg;

      // update the Get Started link
      if (getStartedLink) {
        getStartedLink.href = data.link;
      }

      // animate new content in
      heroContent.classList.remove('animate-out');
      heroContent.classList.add('animate-in');
      setTimeout(() => {
        heroContent.classList.remove('animate-in');
      }, 300);

    }, 300);
  });
});