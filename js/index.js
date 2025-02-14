// Features
{
  const featuresContainer = document.querySelector(
    "#features .container .d-grid"
  );
  const data = [
    {
      title: "repair",
      icon: `bi bi-house-door-fill`,
    },
    {
      title: "improve",
      icon: `bi bi-gear-fill`,
    },
    {
      title: "maintain",
      icon: `bi bi-0-circle-fill`,
    },
  ];
  data.forEach((value) => {
    featuresContainer.innerHTML += `<div class="shadow rounded col p-4 text-center">
        <h3 class="mb-3 text-uppercase">${value.title}</h3>
        <i class="${value.icon} fs-1"></i>
    </div>`;
  });
}
// Services
{
  const services = document.getElementById("services-content");
  const data = [
    {
      title: "Maintenance",
      desc: "when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal",
      icon: "bi bi-gear",
    },
    {
      title: "Electrical",
      desc: "when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal",
      icon: "bi bi-buildings-fill",
    },
    {
      title: "Plumbing",
      desc: "when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal",
      icon: "bi bi-camera-reels-fill",
    },
  ];
  data.forEach((data) => {
    services.innerHTML += `
    <div class="col text-center shadow p-5">
      <i class="${data.icon} fs-1"></i>
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
    </div>
  `;
  });
}
// Testimonials
{
  const row = document.querySelector(".testimonials #content");
  const data = [
    {
      image: "./images/use-1.jpg",
      title: "Use 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, similique illo ipsa modi voluptatem sint expedita repellendus, accusamus doloribus, excepturi perferendis repudiandae nam odit voluptates?",
      quote: "bi bi-quote",
    },
    {
      image: "./images/use-2.jpg",
      title: "Use 2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, similique illo ipsa modi voluptatem sint expedita repellendus, accusamus doloribus, excepturi perferendis repudiandae nam odit voluptates?",
    },
  ];
  data.forEach((data) => {
    row.innerHTML += `
      <div class="p-4 shadow">
        <div class="head row justify-content-between align-items-center">
          <div class="user col-6 d-flex align-items-center column-gap-4">
            <div class="image">
              <img class="img-fluid" alt="Image" src=${data.image} />
            </div>
            <div>
              <h4>${data.title}</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <i class="bi bi-quote fs-1 col-6" id="quotes"></i>
        </div>
        <div class="body mt-4">
          ${data.desc}
        </div>
      </div>
    `;
  });
}
// Contact
{
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let isValid = true;

      // Name Validation
      let name = document.getElementById("name").value.trim();
      let nameError = document.getElementById("nameError");
      if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      // Email Validation
      let email = document.getElementById("email").value.trim();
      let emailError = document.getElementById("emailError");
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      // Phone Validation
      let phone = document.getElementById("phone").value.trim();
      let phoneError = document.getElementById("phoneError");
      let phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }

      // Message Validation
      let message = document.getElementById("message").value.trim();
      let messageError = document.getElementById("messageError");
      if (message.length < 10) {
        messageError.textContent =
          "Message must be at least 10 characters long.";
        isValid = false;
      } else {
        messageError.textContent = "";
      }

      // If all fields are valid, submit the form
      if (isValid) {
        alert("Form submitted successfully!");
      }
    });
}
