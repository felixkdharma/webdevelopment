// Fungsi untuk menampilkan pop-up
function showPopup() {
  document.getElementById("popup").style.display = "flex";

  $("input[name='username']").attr("required", true);
  $("textarea[name='posts']").attr("required", true);

}

// Fungsi untuk menutup pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
  $("input[name='username']").attr("required", false);
  $("textarea[name='posts']").attr("required", false);
}

function autoResize(textarea) {
  textarea.style.height = "auto";               // Reset dulu
  textarea.style.height = textarea.scrollHeight + "px"; // Sesuaikan dengan konten
}