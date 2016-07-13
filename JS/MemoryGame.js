/**
 * Created by itc_user on 6/30/2016.
 */
var firstCard = null;
var count = 0;
var pause = false;

var imagesFlow = ["./images/Groucho-Marx-001.jpg","./images/Jew-Jitsu.jpg","./images/Jewerine.jpg","./images/jewish-rock.jpg","./images/jokejewish.jpg","./images/Yanouka.jpg"];


var createBoard = function(){
    var boardFrame = document.getElementById('bestBoardFrame');
    boardFrame.className = "BoardFrame col-lg-8";
    for (var i = 0 ; i<3 ; i++){
        var columnCube = document.createElement('div');
        columnCube.className = "ColumnCube";
        boardFrame.appendChild(columnCube);
        for(var j=0 ; j<4 ; j++){
            var card = document.createElement('div');
            card.className = "card";
            card.setAttribute("data-img", imagesFlow[4*i+j]);
            columnCube.appendChild(card);
            card.addEventListener('click',changeCard);

        }
    }
};

window.onload = function(){
    var gamePart = document.getElementById('main-part');
    var boardFrame = document.getElementById('bestBoardFrame');
    gamePart.appendChild(boardFrame);
    var imagesFlowLength = imagesFlow.length;
    for(var i=0;i<imagesFlowLength;i++){ //doubling the array of cards to create pairs
        imagesFlow.push(imagesFlow[i]);
    }
    for (var j = imagesFlow.length -1; j >= 0; j--){ //randomizing the cards
        var k = Math.floor(Math.random()*(j+1));
        var temp = imagesFlow[j];
        imagesFlow[j] = imagesFlow[k];
        imagesFlow[k] = temp;
    }
    createBoard();

};



var showCard = function(card){
    card.style.backgroundImage = "url(" + card.getAttribute("data-img")+")";
};

var changeCard = function(clickEvent){
    var clickedCard = clickEvent.target;
    if (pause === false){
        showCard(clickedCard);
    }

    if(firstCard === null){
        firstCard = clickedCard;
    }else{
       if (firstCard.getAttribute("data-img") === clickedCard.getAttribute("data-img")){
           count = count +2;
           firstCard = null;
           if (count === 12){

               var overlay = document.createElement('div');
               overlay.className = "overlay";
               overlay.innerHTML = "<p>You won</p> <button id='replay'>Play Again</button>";
               var boardFrame = document.getElementById("bestBoardFrame");
               boardFrame.appendChild(overlay);
               document.getElementById('replay').onclick = function(){
                   location.reload();
               };

           }

       }else{
           pause=true;
           setTimeout(function(){
               clickedCard.style.backgroundImage = "url(./images/HarryPotterBackGame.JPG)";
               firstCard.style.backgroundImage = "url(./images/HarryPotterBackGame.JPG)";
               firstCard = null;
               pause=false;
           },1000);

       }


    }
};

var allCards = document.getElementsByClassName("card");
for (var i=0;i<allCards.length;i++){
    allCards[i].addEventListener('click',changeCard);

}



