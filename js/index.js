const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar
let navbar = document.querySelectorAll('a');
navbar.forEach((element, index)=>{
  element.textContent = siteContent['nav'][`nav-item-${index+1}`];
});


//photo
let hdImg = document.getElementById("cta-img");
hdImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])



//content
const hdTitle = document.querySelector('.cta-text h1');
hdTitle.textContent = siteContent['cta']['h1'] ;
hdTitle.style.fontSize = '6rem';

//button
const btn = document.getElementsByTagName('button');
btn.textContent = siteContent['cta']['button'];

//main content header
// var headerItems = ['features', 'about', 'services', 'product', 'vision'];
const textHeader = document.querySelectorAll('h4');
textHeader[0].textContent = siteContent["main-content"]['features-h4'];
textHeader[1].textContent = siteContent['main-content']['about-h4'];
textHeader[2].textContent = siteContent['main-content']['services-h4'];
textHeader[3].textContent = siteContent['main-content']['product-h4'];
textHeader[4].textContent = siteContent['main-content']['vision-h4'];
textHeader[5].textContent = siteContent['contact']['contact-h4'];




//main content text
const text = document.querySelectorAll('p');
text[0].textContent = siteContent['main-content']['features-content'];
text[1].textContent = siteContent['main-content']['about-content'];
text[2].textContent = siteContent['main-content']['services-content'];
text[3].textContent = siteContent['main-content']['product-content'];
text[4].textContent = siteContent['main-content']['vision-content'];

text[5].textContent = siteContent['contact']['address'];
text[6].textContent = siteContent['contact']['phone'];
text[7].textContent = siteContent['contact']['email'];

text[8].textContent = siteContent['footer']['copyright'];

//footer
const footerContent = document.querySelector('.footer p');
footerContent.textContent = siteContent['footer']['copyright'];







