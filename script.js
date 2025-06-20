async function translate() {
  const input = document.getElementById('input').value;
  const res = await fetch('/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  });
  const result = await res.text();
  document.getElementById('output').textContent = result;
}

// document.getElementById('translate').addEventListener('click', translate);

// Make translate available globally
window.translate = translate;
