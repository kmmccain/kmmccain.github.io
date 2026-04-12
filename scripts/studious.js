/*  Case Study Project 03
    Advice/Review page
    

    Author: Kassidy Anders
    Date: 04/04/2026

    Filename: Studious.js
 */
// Wrap everything in DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", function() {

    // =========================
    // 1. ART COST CALCULATOR
    // =========================
const ADEN1_PRICE = 25;
const BUCH2_PRICE = 40;
const CHAR1_PRICE = 35;
const VAL1_PRICE = 30;

document.getElementById("aden1").addEventListener("change", calcTotal);
document.getElementById("buch2").addEventListener("change", calcTotal);
document.getElementById("char1").addEventListener("change", calcTotal);
document.getElementById("val1").addEventListener("change", calcTotal);

function calcTotal() {
   let cost = 0;

   let buyAden1 = document.getElementById("aden1").checked;
   let buyBuch2 = document.getElementById("buch2").checked;
   let buyChar1 = document.getElementById("char1").checked;
   let buyVal1 = document.getElementById("val1").checked;

   cost += buyAden1 ? ADEN1_PRICE : 0;
   cost += buyBuch2 ? BUCH2_PRICE : 0;
   cost += buyChar1 ? CHAR1_PRICE : 0;
   cost += buyVal1 ? VAL1_PRICE : 0;

   document.getElementById("artTotal").innerHTML = formatCurrency(cost);
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

    // =========================
    // 2. FORM SUBMISSION
    // =========================
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if(form && successMessage) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // stop actual submission
            successMessage.style.display = 'block';
            form.reset();
        });
    }

    // =========================
    // 3. IMAGE MODAL
    // =========================
    window.openModal = function(img) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImg");
        if(modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = img.src;
        }
    }

    window.closeModal = function() {
        const modal = document.getElementById("imageModal");
        if(modal) modal.style.display = "none";
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
