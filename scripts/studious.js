/*  Case Study Project 06
    Map API
    

    Author: Kassidy Anders
    Date: 05/05/2026

    Filename: Studious.js
 */  

    // =========================
    // 1. SLIDESHOW GENERATOR
    // =========================

window.addEventListener("load", function () {
   createLightbox("lightbox1", galleries[0]);
   createLightbox("lightbox2", galleries[1]);
   createLightbox("lightbox3", galleries[2]);
});

function createLightbox(lightboxId, gallery) {

   let lightBox = document.getElementById(lightboxId);

   let imgFiles = gallery.images;
   let imgCaptions = gallery.captions;
   let imgCount = imgFiles.length;

   let currentImg = 1;

   // Create elements
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbImages = document.createElement("div");

   // Title
   lbTitle.id = "lbTitle";
   lbTitle.textContent = gallery.title;
   lightBox.appendChild(lbTitle);

   // Counter
   lbCounter.id = "lbCounter";
   lbCounter.textContent = currentImg + " / " + imgCount;
   lightBox.appendChild(lbCounter);

   // Images container
   lbImages.id = "lbImages";
   lightBox.appendChild(lbImages);

   // Add images
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }

   // Overlay function
   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.className = "lbOverlay";

      let figureBox = document.createElement("figure");

      let overlayImage = this.cloneNode(true);
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;

      figureBox.appendChild(overlayImage);
      figureBox.appendChild(overlayCaption);

      overlay.appendChild(figureBox);

      let closeBox = document.createElement("div");
      closeBox.className = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function () {
         document.body.removeChild(overlay);
      };

      overlay.appendChild(closeBox);

      document.body.appendChild(overlay);
   }
}
document.addEventListener("DOMContentLoaded", function() {

    // =========================
    // 2. ART COST CALCULATOR
    // =========================

    const ADEN1_PRICE = 25;
    const BUCH2_PRICE = 40;
    const CHAR1_PRICE = 35;
    const VAL1_PRICE = 30;
    const KAS1_PRICE = 30;
    const KAS3_PRICE = 40;

    const checkboxIds = [
        "aden1",
        "buch2",
        "char1",
        "val1",
        "kas1",
        "kas3"
    ];

    checkboxIds.forEach(id => {
        const checkbox = document.getElementById(id);

        if (checkbox) {
            checkbox.addEventListener("change", calcTotal);
        }
    });

    function calcTotal() {
        let cost = 0;

        if (document.getElementById("aden1")?.checked) cost += ADEN1_PRICE;
        if (document.getElementById("buch2")?.checked) cost += BUCH2_PRICE;
        if (document.getElementById("char1")?.checked) cost += CHAR1_PRICE;
        if (document.getElementById("val1")?.checked) cost += VAL1_PRICE;
        if (document.getElementById("kas1")?.checked) cost += KAS1_PRICE;
        if (document.getElementById("kas3")?.checked) cost += KAS3_PRICE;

        const totalElement = document.getElementById("artTotal");

        if (totalElement) {
            totalElement.innerHTML = formatCurrency(cost);
        }
    }

    function formatCurrency(value) {
        return "$" + value.toFixed(2);
    }

    // =========================
    // 3. CONTACT FORM
    // =========================

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form && successMessage) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            successMessage.style.display = 'block';

            form.reset();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 4000);
        });
    }

});

    // =========================
    // 4. REVIEW/ADVICE SECTION
    // =========================
let reviewers = ["DaisyDesigns", "SketchyStart", "LateNightDesigner", "PixelPioneer"];
let reviewType = ["", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["04/02/2026","03/14/2026", "02/28/2026", "01/19/2026"];
let reviews = [
   "Pay attention to the projects that don't feel like a chore. The stuff you enjoy doing is probably what you should be doing. I wish I had followed this advice sooner in my career.",
   "Ask for feedback often. Other people can usually spot your strengths and weaknesses better than you can. Don't be afraid to ask for feedback from your peers, professors, or even professionals in the field. It can be scary to hear criticism, but it's necessary for growth.",
   "Don't compare yourself to others. It's easy to get caught up in comparing yourself to other artists, but it's important to remember that everyone has their own unique journey. Focus on your own growth and progress, and don't worry about what others are doing.",
   "Don't be afraid to ask for help. I used to think that asking for help was a sign of weakness, but it's actually a sign of strength. It shows that you're willing to learn and grow.",
];

for (let i = 0; i < reviewers.length; i++) {
        let reviewCode = "";

            reviewCode += "<table>";

            reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
            reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
            reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
            reviewCode += "</table>";

      document.getElementsByTagName("article") [0].insertAdjacentHTML("beforeEnd", reviewCode);
}

    // =========================
    // 5. LEAVE ADVICE FORM
    // =========================

  const form = document.getElementById("adviceForm");
  const list = document.getElementById("adviceList");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const advice = document.getElementById("advice").value;

    const entry = document.createElement("div");
    entry.classList.add("entry");

    entry.innerHTML = `
      <div class="meta"><strong>${name}</strong> • ${date}</div>
      <div>${advice}</div>
    `;

    list.prepend(entry);

    form.reset();
  });

      // =========================
    // 6. ADD TO CART
    // =========================

    window.addEventListener("load", function() {
   let orderForm = document.forms.orderForm;
   let model = orderForm.elements.model;

   // Select Model selection list when form opens
   model.focus();
   
   // Add an event listener for every form element
   for (let i = 0; i < orderForm.elements.length; i++) {
      orderForm.elements[i].addEventListener("change", calcOrder);
   }
   
   // Calculate the cost of the order
   calcOrder();

   function calcOrder() {
      // Determine the selected model
      let mIndex = model.selectedIndex;
      let mValue = model.options[mIndex].value;

      // Determine the selected quantity
      let qIndex = orderForm.elements.qty.selectedIndex;
      let quantity = orderForm.elements.qty[qIndex].value;

      // Model cost = model cost times quantity
      let modelCost = mValue*quantity;
      orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"}); 
      
      // Retrieve the cost of the protection plan
      let planValue = document.querySelector('input[name="plan"]:checked').value;

      // Charge the plan to each item ordered
      let planCost = planValue * quantity;
      orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

      // Calculate the order subtotal
      let subtotal = modelCost + planCost;
      orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

      // Calculate the 5% sales tax
      let salesTax = subtotal * 0.05;
      orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

      // Calculate the total cost of the order
      let totalCost = subtotal + salesTax;
      orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
      
      orderForm.elements.modelName.value = model.options[mIndex].text;
      let selectedPlan = document.querySelector('input[name="plan"]:checked');
      orderForm.elements.planName.value =  selectedPlan.labels[0].textContent;
   }

});
