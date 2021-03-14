
const colors = ['red', 'green', 'blue', 'orange', 'violet'],
p = document.getElementById('p');
let i = 0;
p.onclick = () => p.style.color = colors[++i % colors.length];

