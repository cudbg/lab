
var render = function (templateid, targetid, data) {
  var source   = $(templateid).html();
  var template = Handlebars.compile(source);
  var html    = template(data);
  $(targetid).html(html);
}

var renderGallery = function (templateid, targetid, data) {
  var source   = $(templateid).html();
  var template = Handlebars.compile(source);
  var html    = template(data);

  $(targetid).html(html);
  $(targetid).find(".image").each(function() {
    var el = $(this);
    var url = el.css("background-image");
    url = url.substr(5, url.length-7);

    var img = $("<img class='hidden'></img>")
      .attr("src", url)
      .load(function() {
        var w = img.width();
        var h = img.height();
        var ratio = 100.0 / h;
        h = 100;
        w = ratio * w;
        el.width(w).height(h);
        console.log([img.width(), img.height()]);
      });
    $("body").append(img);
  });
}




var shirts = [
  "magneto.png",
  "shredder.png",
  "skeletor.png",
  "bitsfactory.png",
  "robotassemble.png",  
  "2pacbiggie.png",
  "ahab.png",
  "bearninja.png",
  "dinospace.png",
  "penguin.png",
  "skynet.png",
  "hal.png"
];

var misc = [  
  "gexperiments.jpg",
  "cameraculture.png",
  "caveman.png",
  "turtle.png",

];

var posters = [
  "assassin.png",
  "sithhappens.png",
  "superheros.png"
]

var ultimate = [
  "grimbeaver.png",
  "grim2.png",
  "ghostface.png",
  "rambo.png",  
  "mixednuts.png",
  "mixedfront.png",
]

var layerpp = [
  "volley1.png",
  "volley4.png"
];

var rap = [
  "alleyez.png",
  "readytodie.png",
  "violentbydesign.png"
];

var kc = [
  "orange.gif",
  "satsuma.gif",
  "noochtella.png"
]

var wildthings = [
  "wildthings_sleep.png",
  "wildthings_cartoon.png"
]

var slamdunks = [
  "slamdunk.png",
  "slamdunk2.png",
  "slamdunk3.png",
  "slamdunk5.png",
]
