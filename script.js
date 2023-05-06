let currentHintNo;

        function compareAnswerOne() {
            // let answer = document.getElementById("answerOne").value;
            if(document.getElementById("answerOne").value.toLowerCase() === 'to infinity and beyond'){
                document.getElementById("resultOne").innerHTML = '9';
                document.getElementById("wrongAnswerOne").innerHTML = 'And even more than that!';
                checkCompletion();
            } else {
                if (document.getElementById("wrongAnswerOne").innerHTML != 'And even more than that!') {
                    document.getElementById("wrongAnswerOne").innerHTML = wrongAnswerReply();
                } 
            }
        }

        function compareAnswerTwo() {
            if(document.getElementById("answerTwo").value.toLowerCase() === '871362954'){
                document.getElementById("resultTwo").innerHTML = '5';
                document.getElementById("wrongAnswerTwo").innerHTML = 'A real sudoku sensai!';
                checkCompletion();
            } else {
                document.getElementById("wrongAnswerTwo").innerHTML = wrongAnswerReply();
            }
        }

        function compareAnswerThree() {
            if(document.getElementById("answerThree").value.toLowerCase() === 'bulbasaur' && document.getElementById("counter").innerHTML > 25){
                document.getElementById("resultThree").innerHTML = '1';
                document.getElementById("wrongAnswerThree").innerHTML = 'Bulba, bulbasaur!';
                checkCompletion();
            } else if (document.getElementById("answerThree").value.toLowerCase() === 'bulbasaur') {
                document.getElementById("wrongAnswerThree").innerHTML = 'Need to hatch the egg first!'
            } else {
                document.getElementById("wrongAnswerThree").innerHTML = wrongAnswerReply();
            }
        }

        function compareAnswerFour() {
            if(document.getElementById("answerFour").value.toLowerCase() === 'sweetie'){
                document.getElementById("resultFour").innerHTML = '3';
                document.getElementById("wrongAnswerFour").innerHTML = 'I knew you could crack it!';
                checkCompletion();
            } else {
                document.getElementById("wrongAnswerFour").innerHTML = wrongAnswerReply();
            }
        }

        function hint(hintNo){

            document.getElementById("hintYes").classList.add("hideButton");
            document.getElementById("hintNo").classList.add("hideButton");
            document.getElementById("hintConfirm").classList.remove("hideButton");

            switch (currentHintNo){
                case 1:
                    document.getElementById("hintTextBox").innerHTML = "Buzz Lightyear might have said it to his girlfriend";
                    break;
                case 2:
                    document.getElementById("hintTextBox").innerHTML = "Look at the numbers within the red square! You might need to solve it first";
                    break;
                case 3:
                    document.getElementById("hintTextBox").innerHTML = "Have you clicked the egg? Try to click again.. and again";
                    break;
                case 4:
                    document.getElementById("hintTextBox").innerHTML = 'Instead of looking at the sentences, focus on the letters. Do any standout?';
                    break;
            }

        }

        function eggTwitch(){
            let counter = document.getElementById("counter").innerHTML
            
            if (counter >= 10 && counter <= 20) {
                document.getElementById("eggStage0").src="./images/eggStage1.png";
            } else if (counter >20 && counter <= 30) {
                document.getElementById("eggStage0").src="./images/eggStage2.png";
            } else if (counter >30 && counter <= 40) {
                document.getElementById("eggStage0").src="./images/eggStage3.png";
            } else if (counter >40 && counter <= 50) {
                document.getElementById("eggStage0").src="./images/eggStage4.png";
            } else if (counter >50){
                document.getElementById("eggStage0").style.display ="none";
                document.getElementById("bulbasaur").style.display ="block";
            }

            if (document.getElementById("eggStage0").style.transform === "rotate(10deg)"){
                document.getElementById("eggStage0").style.transform = "rotate(350deg)";
                document.getElementById("counter").innerHTML++;
            } else if (document.getElementById("eggStage0").style.transform === "rotate(350deg)") {
                document.getElementById("eggStage0").style.transform = "rotate(10deg)";
                document.getElementById("counter").innerHTML++;
            } else {
                document.getElementById("eggStage0").style.transform = "rotate(10deg)";
                document.getElementById("counter").innerHTML++;
            }

        }

        function wrongAnswerReply(){
            let randomized = Math.floor(Math.random()*4);
            switch(randomized) {
                case 0:
                    return 'Not quite, but try again!';
                    break;
                case 1:
                    return 'You can do it!';
                    break;
                case 2:
                    return 'You missed, but keep shooting!';
                    break;
                default:
                    return 'Nope, that is not correct!';
            }
            
            return randomized;
        }

        function checkCompletion() {
            const answerOne = document.getElementById("resultOne").innerHTML;
            const answerTwo = document.getElementById("resultTwo").innerHTML;
            const answerThree = document.getElementById("resultThree").innerHTML;
            const answerFour = document.getElementById("resultFour").innerHTML;

            if (answerOne === '9' && answerTwo === '5' && answerThree === '1' && answerFour === '3') {
                document.getElementById("lockButton").style.display = "none";
                document.getElementById("unlockButton").style.display = "inline-block";
            }  
        }

        function openPopup(hintNo){

            document.getElementById("hintYes").classList.remove("hideButton");
            document.getElementById("hintNo").classList.remove("hideButton");
            document.getElementById("hintConfirm").classList.add("hideButton");

            currentHintNo = hintNo;
            console.log(currentHintNo);
            document.getElementById("popup").classList.add("open-popup");
        }

        function closePopup(){
            document.getElementById("popup").classList.remove("open-popup");
        }

        function confirmHint() {
            document.getElementById("popup").classList.remove("open-popup");
            document.getElementById("hintTextBox").innerHTML = "Are you sure you want a hint?";
        }

        function openFinal() {
            document.getElementById("finalPopup").classList.add("open-final");
        }

        function closeFinal() {
            document.getElementById("finalPopup").classList.remove("open-final");
        }