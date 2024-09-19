let services = [{
  id: 1,
  icon: `<div class="card-icon" style="background-color: #13c4a1">
                  <ion-icon name="chatbox"></ion-icon>
                </div>`,
  title: `<h3 class="h3">
                  <a href="#" class="card-title">SEO Optimization</a>
                </h3>`,
  desc: ` <p class="card-text">
                  SEO optimization improves your website's visibility on search engines, driving organic traffic through keyword targeting, content.
                </p>`

},
{
  id: 2,
  icon: ` <div class="card-icon" style="background-color: #6610f2">
                  <ion-icon name="desktop"></ion-icon>
                </div>`,
  title: `<h3 class="h3">
                  <a href="#" class="card-title">Digital Marketing</a>
                </h3>`,
  desc: `<p class="card-text">
                  Digital marketing uses online channels like SEO, social media, and email to promote brands, drive engagement, and increase sales.
                </p>`
},
{
  id: 3,
  icon: `<div class="card-icon" style="background-color: #ffb700">
                  <ion-icon name="bulb"></ion-icon>
                </div>`,
  title: `<h3 class="h3">
                  <a href="#" class="card-title">Market Research</a>
                </h3>`,
  desc: `<p class="card-text">
                  Our market research services provide insights into customer behavior, industry trends, and competitors to inform strategic decisions.
                </p>`
},
{
  id: 4,
  icon: `<div class="card-icon" style="background-color: #fc3549">
                  <ion-icon name="phone-portrait"></ion-icon>
                </div>`,
  title: ` <h3 class="h3">
                  <a href="#" class="card-title">Keyword Targeting</a>
                </h3>`,
  desc: `<p class="card-text">
                 Keyword targeting helps optimize your content to reach the right audience, increasing visibility, engagement, and search engine rankings effectively.
                </p>`
},
{
  id: 5,
  icon: ` <div class="card-icon" style="background-color: #00d280">
                  <ion-icon name="archive"></ion-icon>
                </div>`,
  title: `<h3 class="h3">
                  <a href="#" class="card-title">Email Marketing</a>
                </h3>`,
  desc: `<p class="card-text">
                  Harness the power of email marketing with targeted campaigns that boost engagement, drive conversions, and build lasting customer relationships.
                </p>`
},
{
  id: 6,
  icon: `<div class="card-icon" style="background-color: #ff612f">
                  <ion-icon name="build"></ion-icon>
                </div>`,
  title: `<h3 class="h3">
                  <a href="#" class="card-title">Marketing & Reporting</a>
                </h3>`,
  desc: ` <p class="card-text">
                 We provide comprehensive marketing strategies and detailed reporting, ensuring you stay informed on campaign performance and ROI for optimal results.
                </p>`
}]

let projects = [{
  id: 1,
  imgsrc: `./assets/images/project-1.jpg`,
  imgalt: "Designing a better cinema experience",
  subtitle: "SEO Optimization",
  title: "Designing a better cinema experience"
},
{
  id: 2,
  imgsrc: `./assets/images/project-2.jpg`,
  imgalt: `Building design process within teams`,
  subtitle: `Digital Marketing`,
  title: `Building design process within teams`
},
{
  id: 3,
  imgsrc: `./assets/images/project-3.jpg`,
  imgalt: `How intercom brings play into their design process`,
  subtitle: `Keyword Targeting`,
  title: `How intercom brings play into their design process`
},
{
  id: 4,
  imgsrc: `./assets/images/project-4.jpg`,
  imgalt: `Stuck with to-do list, I created a new app for`,
  subtitle: `Email Marketing`,
  title: `Stuck with to-do list, I created a new app for`
},
{
  id: 5,
  imgsrc: `./assets/images/project-5.jpg`,
  imgalt: `Examples of different types of sprints`,
  subtitle: `Marketing & Reporting`,
  title: `Examples of different types of sprints`
},
{
  id: 6,
  imgsrc: `./assets/images/project-6.jpg`,
  imgalt: `Redesigning the New York times app`,
  subtitle: `Development`,
  title: `Redesigning the New York times app`
}]


let contacts = [{
  id: 1,
  iconName: `mail-outline`,
  title: ` Mail Here`,
  connect: `<a href="mailto:sachinprajapatijaipur@gmail.com" class="card-link">info@digim.com</a>
                  <a href="mailto:sachinprajapatijaipur@gmail.com" class="card-link">info@digim.com</a>`
}, {
  id: 2,
  iconName: `map-outline`,
  title: `Visit Here`,
  connect: `<address class="card-address">
                    27 Harmara, Jaipur,<br>
                    RJ-302013, India
                  </address>`
}, {
  id: 3,
  iconName: `headset-outline`,
  title: `Call Here`,
  connect: `<a href="tel:+1234567890" class="card-link">+123 456 7890</a>
                 <a href="tel:+2414524526" class="card-link">+241 452 4526</a>`
}]



contacts.map((item, index) => {
  let contactsContainer = document.querySelector('.contact-list');

  let contact = `  <li class="contact-item">
              <div class="contact-card">

                <div class="card-icon">
                  <ion-icon name="${item.iconName}" aria-hidden="true"></ion-icon>
                </div>

                <div class="card-content">

                  <h3 class="h3 card-title">${item.title}</h3>

                  ${item.connect}

                </div>

              </div>
            </li>`;
  contactsContainer.innerHTML += contact;
})

projects.map((item, index) => {
  let projectsContainer = document.querySelector('.projectsContainer');

  let project = ` <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="width: 510; height: 700;">
                  <img src="${item.imgsrc}" width="510" height="700" loading="lazy"
                    alt="${item.imgalt}" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">${item.subtitle}</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">${item.title}</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>`;
  projectsContainer.innerHTML += project;
})

services.map((item, index) => {
  let servicesContainer = document.querySelector('.servicesContainer');

  let service = ` <li>
              <div class="service-card">

                ${item.icon}

               ${item.title}

               ${item.desc}

              </div>
            </li>`;
  servicesContainer.innerHTML += service;
})



function handleForm(event) {
  event.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;

  let response = document.querySelector('.response');
  if (name && email && phone && subject && message) {
    response.style.display = 'block';
    response.innerHTML = `<h1>Form Submitted Successfully!!!</h1>`;
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';
    setTimeout(() => {
      response.style.display = 'none';
    }, 5000);
  }
  else {
    response.style.display = 'block';
    response.innerHTML = "<h1>Please fill out all the fields.</h1>";
    response.style.color = 'red';
  }
}









const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});