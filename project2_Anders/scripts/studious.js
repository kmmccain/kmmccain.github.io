/*  Case Study Project 02 
    Estimate page for calculating the cost of a student art piece
    

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