function toggleReadMore() {
  const moreText = document.getElementById("hero-more-text");
  const btn = document.getElementById("hero-read-more-btn");
  
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btn.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    btn.textContent = "Read More";
  }
}

function toggleFeaturesReadMore() {
  const moreText = document.getElementById("features-more-text");
  const btn = document.getElementById("features-read-more-btn");
  
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btn.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    btn.textContent = "Read More";
  }
}
