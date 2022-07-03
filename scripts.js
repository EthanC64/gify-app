const apiKey = "jxdc2phlx09qCagJF3ZT30uhvmmlRhnb";

const getGif = function (subjectName) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${subjectName}&limit=25&rating=g&lang=en`;
  fetch(url)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let template = "";
      for (let i = 0; i < data.data.length; i++) {
        template += `
        <div class="card" style="width: 18rem;">
            <img src=${data.data[i].images.original.url} alt="${data.data[i].title}" width="500" height="600">
        </div>
    `;
      }

      document.querySelector("#image-container").innerHTML = template;
    });
};

document
  .querySelector("#subject-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const subjectName = document.querySelector("#subject-input").value;
    getGif(subjectName);
  });
