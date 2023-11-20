$(document).on('keypress', function (event) {
    var play = false;
    var sequence_played = false;

    if (event.key == 'a') play = true;

    if (play) {
        var keyNote = ["green", "red", "yellow", "blue"];
        var sequence = [];
        var user_sequence = [];

        // Useful functions
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function playSound(id) {
            new Audio(`sounds/${id}.mp3`).play();
        }

        async function pressKey(id) {
            $("#" + id).addClass("pressed");
            await sleep(80);
            $("#" + id).removeClass("pressed");
        }

        function randomKey() {
            temp_key = keyNote[Math.floor(Math.random() * 4)];
            sequence.push(temp_key);
        }

        function nextLevel() {
            randomKey();
            var level = sequence.length;
            $("#level-title").html("Level " + level);
            playSequence();
        }

        async function playSequence() {
            for (i = 0; i < sequence.length; i++) {
                await sleep(1000);
                playSound(sequence[i]);
                await pressKey(sequence[i]);
            }
            sequence_played = true;
        }

        function restartGame() {
            $("#level-title").html("Level 1");
            sequence = []; // Clear the sequence array
            nextLevel();
        }

        async function gameOver() {
            playSound("wrong");
            $("body").addClass("game-over");
            await sleep(100);
            $("body").removeClass("game-over");

            $("#level-title").html("Game Over, Press Any Key to Restart");
            $(document).on('keypress', function () {
                restartGame();
            });
        }

        $(".btn").click(async function () {
            if (sequence_played) {
                var clickedColor = this.id;
                user_sequence.push(clickedColor);
                await pressKey(clickedColor);
                playSound(clickedColor);

                if (user_sequence[user_sequence.length - 1] !== sequence[user_sequence.length - 1]) {
                    gameOver();
                } else if (user_sequence.length === sequence.length) {
                    user_sequence = [];
                    nextLevel();
                }
            }
        });

        nextLevel();
    }
});