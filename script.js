$(document).ready(function(){
    var answerez =  1 + Math.floor(Math.random() * 10);
    var answermed =  1 + Math.floor(Math.random() * 50);
    var answerhard =  1 + Math.floor(Math.random() * 100);
    var counterez = 5;
    var countermed = 10;
    
    
    var losesong = new Audio();
    losesong.src = "toobad.mp3";
    var winsong = new Audio();
    winsong.src = "winsong.mp3";
    var suspense = new Audio();
    suspense.src = "suspense.mp3";
    var easymed = new Audio();
    easymed.src = "easymed.mp3";
    
    
    
    $("#easy").click (function(){
        easymed.play();
        $("img").css('visibility', 'visible');
        $("input").css('visibility', 'visible');
        $("#submit").css('visibility', 'visible');
        $("img").css('visibility', 'visible');
        $("#easy").css('visibility', 'hidden');
        $("#medium").css('visibility', 'hidden');
        $("#hard").css('visibility', 'hidden');
        $("h2").html ('Guess 1-10');
        
        
        $("#submit").click (function(){
    
        var given = $("input").val();
        
        
        
        if (given == answerez){
            easymed.pause();
            winsong.play();
         $("p").html ("YOU WIN!");    
         $("img").attr("src", "https://admin.mashable.com/wp-content/uploads/2013/07/crazy-dance.gif");
        }
        else if (given < answerez) {
            
                counterez = counterez-1; 
         $("h3").html (counterez + " tries left" );        
         $("p").html ("GO BIGGER.");
        }
        else if (given > answerez) {
            counterez = counterez-1; 
            $("h3").html (counterez + " tries left" ); 
            $("p").html ("GO SMALLER");
           
        }   
        if (counterez === 0) {
            easymed.pause();
         losesong.play();
         $("p").html ("YOU LOSE!!!!");   
         $("h3").html ("It was " + answerez);
         $("#submit").css('visibility', 'hidden');
          $("img").attr("src", "https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif");
        }
        
        
        
    });
        
    });
    
    $("#medium").click (function(){
        easymed.play();
        $("img").css('visibility', 'visible');
        $("input").css('visibility', 'visible');
        $("#submit").css('visibility', 'visible');
        $("img").css('visibility', 'visible');
        $("#easy").css('visibility', 'hidden');
        $("#medium").css('visibility', 'hidden');
        $("#hard").css('visibility', 'hidden');
        $("h2").html ('Guess 1-50!');
        
        
        
        $("#submit").click (function(){
    
        var given = $("input").val();
        
        
        if (given == answermed){
            easymed.pause();
            winsong.play();
         $("p").html ("YOU WIN!");    
         $("img").attr("src", "https://admin.mashable.com/wp-content/uploads/2013/07/crazy-dance.gif");
        }
        else if (given < answermed) {
            countermed = countermed-1;
            $("h3").html (countermed + " tries left" ); 
         $("p").html ("GO BIGGER");
        }
        else if (given > answermed) {
            countermed = countermed-1;
            $("h3").html (countermed + " tries left" ); 
            $("p").html ("GO SMALLER");
           
        }   
        if (countermed === 0) {
            easymed.pause();
            losesong.play();
         $("p").html ("YOU LOSE!!!!");   
         $("h3").html ("It was " + answermed );
         $("#submit").css('visibility', 'hidden');
          $("img").attr("src", "https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif");
        }
        
        
        
        
    });
        
    });
    
     $("#hard").click (function(){
        $("img").css('visibility', 'visible');
        $("input").css('visibility', 'visible');
        $("#submit").css('visibility', 'visible');
        $("img").css('visibility', 'visible');
        $("#easy").css('visibility', 'hidden');
        $("#medium").css('visibility', 'hidden');
        $("#hard").css('visibility', 'hidden');
        $("h2").html ('Guess 1-100!');
        suspense.play();
        
        
        $("#submit").click (function(){
    
        var given = $("input").val();
        
        
        if (given == answerhard){
            suspense.pause();
            winsong.play();
         $("p").html ("YOU WIN!");    
         $("img").attr("src", "https://admin.mashable.com/wp-content/uploads/2013/07/crazy-dance.gif");
        }
        else if (given < answerhard) {
            counterez = counterez-1;
            $("h3").html (counterez + " tries left" );
         $("p").html ("GO BIGGER");
        }
        else if (given > answerhard) {
            counterez = counterez-1;
            $("h3").html (counterez + " tries left" );
            $("p").html ("GO SMALLER");
           
        }   
        if (counterez === 0) {
            suspense.pause();
            losesong.play();
         $("p").html ("YOU LOSE!!!!");   
         $("h3").html ("It was " + answerhard );
         $("#submit").css('visibility', 'hidden');
         $("#again").css('visibility', 'visible');
          $("img").attr("src", "https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif");
        }
        
        
        
    });
        
    });
    
   
    
});