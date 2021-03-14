var link = document.getElementById("link"),
 counter = document.getElementById("counter"),
 count = 0;
link.onclick = function() {
 count++;
 counter.textContent = count;
};