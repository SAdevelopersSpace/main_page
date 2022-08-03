const links = {
  block1: [
      { label: "Content 1 ", url: "Introduction_Pages/index.html"},
    
  ]
}

const ol = document.getElementById('block');   
links.forEach(link => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.setAttribute('href', link.url);
  a.innerText = link.label;
  li.appendChild(a);
  ol.appendChild(li);
});
