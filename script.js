let ecoPoints = 0;
let reportCount = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let severity = document.getElementById("severity").value;
  let time = new Date().toLocaleString();
  let file = document.getElementById("media").files[0];

  // Update counters
  ecoPoints += 10;
  reportCount += 1;

  // Show location
  document.getElementById("location").innerHTML =
    "📍 Location Captured<br>" +
    "Latitude: " + latitude + "<br>" +
    "Longitude: " + longitude;

  // Action workflow
  document.getElementById("status").innerHTML =
    "✔ Report Received<br>" +
    "✔ Location Verified<br>" +
    "⏳ Cleanup Team Assigned (Prototype)<br><br>" +
    "⚠ Severity Level: " + severity + "<br>" +
    "🕒 Reported at: " + time;

  // Show uploaded evidence
  if (file) {
    document.getElementById("status").innerHTML +=
      "<br>📎 Evidence uploaded: " + file.name;
  }

  // Rewards system
  let rewardText =
    "🌱 Eco Reward Points Earned: " + ecoPoints +
    "<br>📊 Total Reports Submitted: " + reportCount;

  // Badge system
  if (ecoPoints >= 30) {
    rewardText += "<br>🏅 Badge Earned: Ocean Protector";
  }

  rewardText += "<br>💚 Thank you for helping protect marine life!";

  document.getElementById("reward").innerHTML = rewardText;

  alert("Waste reported successfully! Eco points awarded.");

  // Simulated cleanup completion message
  setTimeout(function () {
    alert(
      "✅ Cleanup drive completed!\n\n" +
      "Thank you for protecting marine life 🌊\n" +
      "Keep reporting to earn more Eco Points."
    );
  }, 5000);
}
