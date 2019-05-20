function addProduct(id,imgPr,discProduct,pirce,rating,secondDisc) {
let newdiv="<div  id=\"p"+id+"\" class=\"product\">"+
  "<div class=\"main\">"+
    "<img class=\"imgProd\" src=\"img/"+imgPr+".jpg\" alt=\"картинка товара\">"+
    "<div class=\"description\">"+
 discProduct+
    "</div>"+
  "  <div class=\"price\">"+
"$"+pirce+
  "  </div>"+
  "<div class=\"btnAdd\">"+
"Add to Cart"+
    "</div>"+
  "  <img class=\"rating\" src=\"img/"+rating+"w.jpg\" alt=\"\">"+

  "</div>"+
"  <div class=\"second\">"+
  secondDisc+
"  </div>"+
"</div>";
  $("#catal").append(newdiv);
}
var products=[
  {},
  {imgPr:"product1",discProduct:"Футболка Барселона",price:15.01,rating:5,secondDisc:"хорошая футболка"},
  {imgPr:"product2",discProduct:"Футболка Барселона",price:16.55,rating:4,secondDisc:"просто футболка"},
  {imgPr:"product1",discProduct:"Футболка Барселона",price:17.83,rating:0,secondDisc:"красная футболка"},
  {imgPr:"product2",discProduct:"Футболка Барселона",price:19.31,rating:2,secondDisc:"синия футболка"},
  {imgPr:"product1",discProduct:"Футболка Барселона",price:15.89,rating:1,secondDisc:"плохая футболка"},
  {imgPr:"product2",discProduct:"Футболка Барселона",price:18.58,rating:5,secondDisc:"популярная футболка"},
  {imgPr:"product1",discProduct:"Футболка Барселона",price:15.53,rating:3,secondDisc:"футболка из хлопка"},
  {imgPr:"product2",discProduct:"Футболка Барселона",price:15.48,rating:4,secondDisc:"футболка большого размера"},
  {imgPr:"product1",discProduct:"Футболка Барселона",price:15.56,rating:5,secondDisc:"просто футболка"}
];
for(let i=1;i<products.length;i++){
  addProduct(i,products[i].imgPr,products[i].discProduct,products[i].price,products[i].rating,products[i].secondDisc);

  var catal=document.getElementById("p"+i);
  catal.addEventListener("mouseenter", function (e) {
    var elem=e.target.lastChild ;
    elem.style.display='block';
    elem.style.zIndex='10';
    var img=e.target.firstChild.lastChild;
    var oldSrc=img.src;
    oldSrc=oldSrc.replace('w','y');
    img.src=oldSrc;
  });

  catal.addEventListener("mouseleave", function (e) {
    var elem=e.target.lastChild ;
    elem.style.display='none';
    elem.style.zIndex='-1';
    var img=e.target.firstChild.lastChild;
    var oldSrc=img.src;
  oldSrc=  oldSrc.replace('y','w');
    img.src=oldSrc;
  });
}
