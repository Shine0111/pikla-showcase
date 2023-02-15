const featureList = document.querySelectorAll("#features-list li");
const featureExplanation = document.querySelector("#feature-explanation");

featureList.forEach((feature) => {
  feature.addEventListener("click", () => {
    const featureType = feature.dataset.feature;
    const explanation = getExplanation(featureType);
    featureExplanation.innerHTML = explanation;
    featureExplanation.style.display = "block";
  });
});

function getExplanation(featureType) {
  switch (featureType) {
    case "booking":
      return "Our booking process is simple and easy to use. Just enter your pickup and drop-off locations, select a ride option, and your ride will be on its way.";
    case "tracking":
      return "With real-time tracking, you can see exactly where your driver is and when they will arrive. You can also share your location with friends and family so they know you are safe.";
    case "payments":
      return "We offer cashless payment options to make your ride more convenient. You can securely save your payment information and never have to worry about carrying cash or exchanging currency.";
    case "support":
      return "Our customer support team is available 24/7 to assist you with any questions or issues you may have. You can contact us via phone, email, or through the app.";
    default:
      return "";
  }
}

// get all feature list items
const featureItems = document.querySelectorAll('#features-list li');

// add click event listener to each feature item
featureItems.forEach(item => {
  item.addEventListener('click', () => {
    // remove 'active' class from all feature items
    featureItems.forEach(item => {
      item.classList.remove('active');
    });

    // add 'active' class to the clicked feature item
    item.classList.add('active');

    // show the explanation text for the clicked feature
    const featureExplanation = document.querySelector('#feature-explanation');
    featureExplanation.textContent = featureExplanations[item.dataset.feature];
  });
});

function toggleNav() {
  var nav = document.getElementById("nav-menu");
  nav.classList.toggle("open");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
