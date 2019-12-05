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

let nav = document.querySelectorAll('nav a');
nav[0].text= siteContent.nav['nav-item-1'];
nav[1].text= siteContent.nav['nav-item-2'];
nav[2].text= siteContent.nav['nav-item-3'];
nav[3].text= siteContent.nav['nav-item-4'];
nav[4].text= siteContent.nav['nav-item-5'];
nav[5].text= siteContent.nav['nav-item-6'];

let nav1 = document.querySelector('nav')
let log = document.createElement('a')
log.innerText = "Log in"
nav1.append(log)
log.style.color= "green";

nav.forEach (element => { element.style.color = "green";})

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

let cta1 = document.querySelector('h1');
cta1.textContent = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.textContent = siteContent.cta.button;

const h4 = document.querySelectorAll('h4');
h4[0].textContent = "Features";
h4[1].textContent = "About";
h4[2].textContent = "Services";
h4[3].textContent = "Product";
h4[4].textContent = "Vision";
h4[5].textContent = "Contact";

let p = document.querySelectorAll('.text-content p');
p[0].innerHTML= siteContent['main-content']['features-content']
p[1].innerHTML= siteContent['main-content']['about-content']
p[2].innerHTML= siteContent['main-content']['services-content']
p[3].innerHTML= siteContent['main-content']['product-content']
p[4].innerHTML= siteContent['main-content']['vision-content']


let mid = document.getElementById("middle-img");
mid.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactp = document.querySelectorAll('.contact p');
contactp[0].innerHTML = siteContent.contact['address']
contactp[1].innerHTML = siteContent.contact['phone']
contactp[2].innerHTML = siteContent.contact['email']

let footerp = document.querySelector('footer p');
footerp.innerHTML = siteContent.footer['copyright']