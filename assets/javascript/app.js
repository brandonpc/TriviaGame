//  ....A lot of things went wrong this week, and it's stemmed from me
//      falling further and further behind. So I have this Pseudocode that
//      I'd like to finish when I get the chance, but if I'm to not fall 
//      permanantly behind, I need to start the next assignment and look over
//      this last weeks' material. 

$(document).ready(function () {

            // FIRST: we need the data to work with (Q's and A's

            var questionArray = [q1, q2, q3, q4, q5];
            //      q1 {question= (question), answer array [ans 1, ans 2, ...], id which index is correct}
            //          continue w/ all q's. 
            var q1 = {
                question: "In which game is Link the Hero of Time?",
                possAnswers: ["Wind Waker", "Ocarina of Time", "Twilight Princess", "A Link to the Past"],
                correctAnswer = possAnswers[1],
            };
            var q2 = {
                question: "Which Game has the first reincarnation of Link and Zelda?",
                possAnswers: ["Ocarina of Time", "The Legend of Zelda", "A Link Between Worlds", "Skyward Sword"],
                correctAnswer = possAnswers[3],
            };
            var q3 = {
                question: "Who is the Patron Goddess of Courage?",
                possAnswers: ["Din", "Nayru", "Farore"],
                correctAnswer = possAnswers[2],
            };
            var q4 = {
                question: "What race in the series eats rocks?",
                possAnswers: ["Zora", "Hylians", "Gerudo", "Gorons", "Rito"],
                correctAnswer = possAnswers[3],
            };
            var q5 = {
                question: "Who is Zelda?",
                possAnswers: ["the Main Character", "the Princess"],
                correctAnswer = possAnswers[1],
            };

            // SECOND: we need to create the display via functions
            //      function to print cards 
            function createCards() {
                for (var i = 0; i < questionArray.length; i++) {
                    // (loop through data to create & append to DOM)
                    // create a div, add class, and other nec attributes
                    var
                    // each card: grab q, loop through and print answers

                    // answers need to have clickable bullet / box / etc
                    //      LOOKUP: buttons/bullets (something to select)

                }

            });
        //  THIRD: Create an on-click function for each answer        
        //      when each answer is clicked, the answer is stored into
        //      an empty array.

        // FOURTH: a timer will need to be created that, should it hit zero, 
        // will initiate the same function as "submit"

        // LAST: create an event for when timer hits 0 or "submit"
        //   is clicked (on-click event) to call the grading function
        //      
        //      Grading function: compare user's answers to correct answers 
        //          (one way to do this would be to create 
        //          an array of all the right answers and compare the two)
        //          if the answers match numbersRight++, 
        //          if not, wrongasnwers++.

        // NOTE: a function will be needed to clear the screen
        //       and display the score, etc.