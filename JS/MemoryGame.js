/**
 * Created by itc_user on 6/30/2016.
 */
var firstCard = null;
var count = 0;

var imagesFlow = ["./images/Groucho-Marx-001.jpg","./images/Jew-Jitsu.jpg","./images/Jewerine.jpg","./images/jewish-rock.jpg","./images/jokejewish.jpg","./images/Yanouka.jpg","./images/Groucho-Marx-001.jpg","./images/Jew-Jitsu.jpg","./images/Jewerine.jpg","./images/jewish-rock.jpg","./images/jokejewish.jpg","./images/Yanouka.jpg"];


var createBoard = function(){
    var boardFrame = document.getElementById('bestBoardFrame');
    for (var i = 0 ; i<3 ; i++){
        var columnCube = document.createElement('div');
        columnCube.className = "ColumnCube";
        boardFrame.appendChild(columnCube);
        for(var j=0 ; j<4 ; j++){
            var card = document.createElement('div');
            card.className = "card";
            card.setAttribute("data-img", imagesFlow[4*i+j]);
            // var first=document.getElementsByClassName("card")[i];
            // var hilly = document.createAttribute("dataImg");
            // hilly.value ="./images/Groucho-Marx-001.jpg";
            // // first.setAttributeNode(hilly);
            // hilly.value = imagesFlow[i];
            columnCube.appendChild(card);
            card.addEventListener('click',changeCard);
        }
    }
}




window.onload = function(){
    var boardFrame = document.createElement('div');
    boardFrame.id = "bestBoardFrame";
    document.body.appendChild(boardFrame);
    createBoard();

};



var showCard = function(card){
    card.style.backgroundImage = "url(" + card.getAttribute("data-img")+")";
};

var changeCard = function(clickEvent){
    var clickedCard = clickEvent.target;
    showCard(clickedCard);
    if(firstCard == null){
        firstCard = clickedCard;
    }else{
       if (firstCard.getAttribute("data-img") === clickedCard.getAttribute("data-img")){
           count = count +2;
           firstCard = null;
           if (count === 12){
               alert("You have won");
           }

       }else{
           setTimeout(function(){
               clickedCard.style.backgroundImage = "url(./images/HarryPotterBackGame.JPG)";
               firstCard.style.backgroundImage = "url(./images/HarryPotterBackGame.JPG)";
               firstCard = null;
           },1000);
       }


    }
};

var allCards = document.getElementsByClassName("card");
for (var i=0;i<allCards.length;i++){
    allCards[i].addEventListener('click',changeCard);

}



