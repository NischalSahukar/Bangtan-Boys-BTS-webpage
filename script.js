function checkPassword() {
    // Set of valid passwords
    const validPasswords = ["00:00(Zero O'Clock)", "21st Century Girl", "2!3!", "Airplane Pt.2", "Arirang", "All Night","Anpanmam", 
    "Answer:Love Myself", "Attack on Bangtan", "Bad Decisions", "Best Of Me", "Black Swan", "Blood Sweat & Tears", "Blue & Grey", 
    "Boy in Luv", "Boyz with Fun", "Boy with Luv", "A Brand New Day", "Butter", "Butterfly", "Coffee", "Come Back Home", "Crystal Snow", 
    "Danger", "Dionysus", "DNA", "Don't Leave Me", "Dope", "Dream Glow", "Dynamite", "Epilogue: Young Forever", "Fake Love", 
    "Film Out", "Fire", "Fly to My Room", "For You", "For Youth", "Go Go", "Heartbeat", "Home", "House of Cards", "I Need U", "Idol", 
    "Inner Child", "Interlude: Wings", "Intro: 2 Cool 4 Skool", "Intro: O!RUL8 2?", "Interlude", "I Like it", "Jump","Just One Day", 
    "Life Goes On", "Lights", "Like", "Look Here", "Louder than bombs", "Love Maze", "Ma City", "Magic Shop", "Make It Right","Mic Drop", 
    "Mikrokosmos", "My Universe", "No More Dream", "Not Today", "N.O", "ON", "Outro: wings", "Paradise", "Permission to Dance", 
    "Pied Piper", "Run", "Run BTS", "Save Me", "Silver Spoon", "So What", "Spine Breaker", "Spring Day", "Stay","Stay Gold", 
    "Take Two", "Telepathy", "The Planet", "Tomorrow", "War of Harmone", "Waste It on Me", "We Are Bulletproof Pt.2", "Whalien 52",
    "Yet to Come", "You Are Here", "Your eyes tell" ];

    // Get the entered password from the input field
    const enteredPassword = document.getElementById("passwordInput").value;

    // Check if the entered password is in the set of valid passwords
    if (validPasswords.includes(enteredPassword)) {
        // Password is correct, redirect to the next page
        window.location.href = "bts.html";
    } else {
        // Password is incorrect, display an error message
        alert("Incorrect password. Please try again.");
    }
}
