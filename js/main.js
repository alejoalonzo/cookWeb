$(document).ready(function () {
  //slider---------------------------------------------------------------------------------------------------------------------------
  //Requiere libreria bxSlider
  $(".slider").bxSlider({
    auto: true,
    speed: 500,
  });

  //posts------------------------------------------------------------------------------------------------------------------------------
  var posts = [
    {
      image: './media/img1.jpg" alt="',
      time: "03:45",
      tag: "SafeFood",
      title: "Serving safe food it's not an option, it's an obligation.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis quas culpa inventore aspernatur autem labore, reprehenderit ducimus odio maiores doloribus eveniet repellendus?",
      side: "",
    },
    {
      image: "./media/img3.jpg",
      time: "45 Minutes",
      tag: "Healthy",
      title: "5 Ingredients / Quick & Easy. Food Series 1.",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis quas culpa inventore",
      side: "",
    },
    {
      image: "./media/img4.jpg",
      time: "5 Minutes",
      tag: "Italian Food",
      title: "How to create Spaggetti in 5 minutes.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis quas culpa inventoret repellendus aspernatur autem labore, reprehenderit?",
      side: "",
    },
    {
      image: "./media/img5.jpg",
      time: "30 Minutes",
      tag: "Vegetable",
      title: "People who love to eat are always the best people.",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis quas culpa inventore.",
      side: "",
    },
    {
      image: './media/img1.jpg" alt="',
      time: "03:45",
      tag: "SafeFood",
      title: "Serving safe food it's not an option, it's an obligation.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis quas culpa inventore aspernatur autem labore, reprehenderit ducimus odio maiores doloribus eveniet repellendus?",
      side: "",
    },
  ];
  //console.log(posts);

  //recorrer el json
  posts.forEach((item, index) => {
    var post = `
        <div id="articles">
            <div class="imgArticle">
                <div id="imgArticle1" id="img1">
                    <img src="${item.image}">
                </div>
            </div>
            <div class="textArticle" id="textArticle1">
                <div class="titleAndTextArticle">
                    <div class="iconArticle">
                        <i class="fas fa-video"> ${item.time}</i>
                        <i class="fas fa-tag"> ${item.tag}</i>
                    </div>
                    <h3 class="articleTextH3">${item.title}</h3>
                    <span class="texarticleLorem">
                        ${item.content}
                    </span>
                </div>
            </div>
            
            
        </div>
    `;
    //console.log(post);

    //añadir el json al html( asi los añade todo de golpe)
    $("#articleContent").append(post);
  });

  //Selector de tema--------------------------------------------------------------------------------------
  $("#themeNight").click(function () {
    $("#theme").attr("href", "css/darkStyle.css");
  });
  $("#themeDay").click(function () {
    $("#theme").attr("href", "");
  });

  //Back to top-----------------------------------------------------------------------------------------
  $("#backToTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });

  //Accordion----------------------------------------------------------------------------------------------
  //Requiere libreria jquery ui
  $(function () {
    $(".accordion").accordion({
      header: "h3",
      collapsible: true,
      active: false,
    });
  });

  //Reloj----------------------------------------------------------------------------------------------
  //Requiere libreria moment.js
  setInterval(function () {
    var reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
  }, 1000);
});
