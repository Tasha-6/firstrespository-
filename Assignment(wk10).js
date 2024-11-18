// script.js
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  
  // Change text content
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";
  
  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");
  
  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Create floating circles
function createFloatingCircles() {
  const body = document.body;
  for (let i = 0; i < 50; i++) { // Adjust the number for more or fewer shapes
    const circle = document.createElement("div");
    circle.classList.add("floating-circle");
    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.animationDuration = `${5 + Math.random() * 10}s`;
    body.appendChild(circle);
  }
}
createFloatingCircles(); 

function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  const nameInput = document.getElementById("name-input").value;

  // Change text content with custom greeting
  welcomeText.innerText = nameInput
    ? `Welcome to JavaScript, ${nameInput}!`
    : "JavaScript is Dynamic and Fun!";

  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");

  // Change button color randomly
  button.style.backgroundColor = getRandomColor();
}
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
function createParticleEffect(e) {
  const button = e.target;
  const particles = 20; // Adjust number of particles if needed
  for (let i = 0; i < particles; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.style.left = `${e.clientX - button.offsetLeft}px`;
    particle.style.top = `${e.clientY - button.offsetTop}px`;
    button.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => particle.remove(), 800); // Slightly longer duration
  }
}

document.getElementById("change-text-btn").addEventListener("click", createParticleEffect);
