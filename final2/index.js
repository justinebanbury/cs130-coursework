
const picksport = (elem) => {
  let sport = elem.id;
  let term = "NCAA Womens " + sport;
  sport = sport.replace(" ", "_");
  const id = "container_" + sport;
  if (elem.style.border == "") {
    elem.style.border="2px solid white";
    elem.style.opacity="60%";



    console.log(term);
    let url = `https://www.apitutor.org/youtube/simple/?q=${encodeURI(term)}&type=video`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const template = `
              <section id="${id}">

                <div class="jsvideobox" >
                  <div class="videos4">
                  <iframe src="${data[0].embed_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="videos4">
                  <iframe src="${data[1].embed_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="videos4">
                  <iframe src="${data[2].embed_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="videos4">
                  <iframe src="${data[3].embed_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>


                <div class="jstextbox">
                  <h3 class="default"> Watch</h3>
                  <h4 class="default"> Your favorite replays for NCAA Womens ${sport}</h4>
                </div>


                </section>`
            document.querySelector('.jstemplate').innerHTML += template;
          });

  } else {
    elem.style.border = "";
    elem.style.opacity= "100%";
    console.log(id);
    const section = document.querySelector(`#${id}`);
    if (section != null) {
      section.parentNode.removeChild(section);
    }
  }
};


  const classSwitcher = (ev) => {
    const myClass= document.querySelector("#schools").value.toLowerCase();
    console.log(myClass);
    const headers = document.querySelectorAll("h3, h4, h5, h6");
    console.log(headers);
    for (const header of headers) {
      header.className= myClass;
    }
    document.querySelector("#selectionbox").className= myClass;
  }
document.querySelector("#schools").onchange= classSwitcher;
