// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button Clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.background = '#ffd700';
});

document.addEventListener('keydown', (e) => {
  document.getElementById('keyInfo').textContent = `You pressed: ${e.key}`;
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('Secret unlocked! 🔓');
});

// Interactive Elements
document.getElementById('changeColorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
});

const images = [
  'https://via.placeholder.com/300/ff0000',
  'https://via.placeholder.com/300/00ff00',
  'https://via.placeholder.com/300/0000ff',
];
let imgIndex = 0;

document.getElementById('nextImg').addEventListener('click', () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById('galleryImg').src = images[imgIndex];
});

document.querySelectorAll('.tabBtn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabContent').forEach((tab) =>
      tab.classList.add('hidden')
    );
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
  });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const feedback = document.getElementById('formFeedback');

  if (!email.includes('@')) {
    feedback.textContent = 'Please enter a valid email.';
    return;
  }

  if (pass.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully!';
});
