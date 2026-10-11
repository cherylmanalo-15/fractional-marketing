const bookingUrl = window.SITE_CONFIG?.calendlyUrl;
if (bookingUrl && new URL(bookingUrl).hostname === "calendly.com") {
  document.querySelectorAll("[data-book]").forEach(link => {
    link.href = bookingUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", link.textContent.trim() + " (opens Calendly in a new tab)");
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
