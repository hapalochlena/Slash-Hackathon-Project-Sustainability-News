// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

var url = `https://newsapi.org/v2/everything?q=Apple&from=2022-09-24&sortBy=popularity&apiKey=e83d248269f94afcbf00c06769852814`;

fetch(url)
.then(response => response.json())
.then(json => {
  build(json.articles)
})

function build(data){
  data.forEach(item => {
    var box = document.querySelector(".row1-container");

    var div = document.createElement("div");
    div.className += "box box-down cyan"

    var header = document.createElement("h2");
    var img = document.createElement("img");
    var paragraph = document.createElement("p");
    paragraph.innerText = item.description
    img.setAttribute("src", item.urlToImage);
    box.appendChild(paragraph)
    header.innerText = item.title
    div.appendChild(header)
    div.appendChild(img)
    div.appendChild(paragraph)

    box.appendChild(div)
  })
}
