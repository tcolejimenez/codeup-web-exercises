$(document).ready(function() {
    //alert( 'The DOM has finished loading!' );

    var fadeInInterval = 2000;
    var fadeOutInterval = 1000;
    var score = 0;
    var startButton =  $("#start");
    var pauseButton =  $("#pause");
    var gameOn = false;

    function randomMole () {
        var molePosition = "#" + (Math.floor(Math.random() * 9) + 1);
        var currentMole = $(molePosition);

        var scoreText = $("#score");

        if (gameOn) {
            //fades in mole
            currentMole.fadeIn("fast");

            //on mole - when click
            //    update score
            //    update score in html
            //    hides current mole once clicked

            //had to use .unbind('click').click(function(){
            //.one() or .click() caused multiple firing even though only bound once
            //changed back to score++

            currentMole.unbind('click').click(function(){
                score++;
                scoreText.text(score);
               currentMole.hide();
            });

            //fades out square after showing for interval
            //if mole not clicked
            window.setTimeout(function() {currentMole.fadeOut("fast");}, fadeOutInterval);

        }
    }





    //start button function - starts game
    //executes on click
    startButton.click(function() {
        //disable start button once clicked
        //will not work with startButton variable
        $("#start").attr("disabled", true);

        //enable pause button
        $("#pause").attr("disabled", false);

        //turns on button
        gameOn = true;

        //sets interval for appearing mole
        window.setInterval(randomMole, fadeInInterval);
    });

    //pause button function - pauses game
    //executes on click
    pauseButton.click(function() {

        //stops game execution
        gameOn = false;

        //enables start button
        $("#start").attr("disabled", false);

        //disables pause button again
        $("#pause").attr("disabled", true);


    });






});




//start button
//stop button
//levels
//navi bar