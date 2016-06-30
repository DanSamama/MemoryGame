/**
 * Created by itc_user on 6/30/2016.
 */
var firstCard = null;
var noMoreCardsToFlip = false;

var showCard = function(card){
    card.style.backgroundImage = "url(" + card.getAttribute("data-img")+")";
};

var changeCard = function(clickEvent){
    var clickedCard = clickEvent.target;
    showCard(clickedCard);
    if(firstCard == null){
        firstCard = clickedCard;
    }else{
       if (firstCard.getAttribute("data-img") == clickedCard.getAttribute("data-img")){
           firstCard = null;

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



