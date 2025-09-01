const ratingSection = document.querySelector(".ratingSection");
const ratingBtns = document.querySelectorAll(".ratingItems");
const submitBtn = document.querySelector(".submitButton");
const thanksSection = document.querySelector(".thanksSection");

let selectedRating = null;
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedRating = btn.textContent;
    ratingBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    ratingSection.style.display = "none";
    thanksSection.style.display = "block";
    const ratingItems = document.querySelectorAll(".ratingItems");

    const selectedContentDetail = document.querySelector(
      ".selectedContentDetail"
    );
    selectedContentDetail.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
