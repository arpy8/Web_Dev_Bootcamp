    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var name1 = document.getElementById("name").value;
        var name2 = document.getElementById("gfName").value;

        if (name1 === "" || name2 === "") {
            alert("Please enter both names.");
        } else {
            calculateLovePercentage(name1, name2);
        }
    });

    function calculateLovePercentage(name1, name2) {
        if (name1 === "" || name2 === "") {
            alert("Please enter both names.");
        } else {
            var lovePercentage = Math.floor(Math.random() * 100);
            var result = "Your love percentage is: " + lovePercentage + "%, very strong."
            alert((lovePercentage>90)?result:result.replace("very strong","not strong"));
        }
    }