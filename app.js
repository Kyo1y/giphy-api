const APIKEY = "NMgyVwMvMbfpwVmBCcTm3p514iCVkpWV";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=2&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    fetch(url)
      .then(response => response.json())
      .then((content) => {
        // data, pagination, meta
        console.log(content.data)
        console.log("META", content.meta)
        let container = document.createElement("div");
        let img1 = document.createElement("img");
        img1.src = content.data[0].images.downsized.url;
        img1.alt = content.data[0].title;
        let img2 = document.createElement("img");
        img2.src = content.data[1].images.downsized.url;
        img2.alt = content.data[1].title;
        let desc1 = document.createElement("h3");
        let desc2 = document.createElement("h3");
        desc1.textContent = content.data[0].title;
        desc2.textContent = content.data[1].title;
        container.appendChild(img1);
        container.appendChild(img2);
        container.appendChild(desc1);
        container.appendChild(desc2);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", container)
      })
      .catch(err => {
        console.error(err)
      })
  })
}
