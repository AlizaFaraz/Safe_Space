document.addEventListener("DOMContentLoaded", () => {
    const welcomePage = document.getElementById("welcomePage");
    const animationPage = document.getElementById("animationPage");
    const app = document.getElementById("app");
    const startButton = document.getElementById("startButton");
    const enterRoomsButton = document.getElementById("enterRoomsButton");
    const welcomeAudio = document.getElementById('welcome-audio');
    let index = 0;

    // Hide animation page initially
    animationPage.style.display = "none";

    // Typing animation? do that last 
    let typingInterval; // Variable to store the interval ID for the typing animation

    function startTypingAnimation() {
        const welcomeMessage = document.getElementById("welcomeMessage");
        const cursor = document.getElementById("cursor");
        let text = welcomeMessage.textContent.trim();
        welcomeMessage.textContent = "";

        function typeWriter() {
            if (text.length > 0) {
                welcomeMessage.textContent += text.charAt(0);
                text = text.substring(1);
            } else {
                clearInterval(typingInterval); // Stop the typing animation when text is fully typed
                cursor.style.display = "none"; // Hide cursor when typing is done
                // show animation page after typing is complete
                animationPage.style.display = "flex";
                      playWelcomeAudio();
            }
              function playWelcomeAudio() {
                welcomeAudio.play();
              }
        }

        typingInterval = setInterval(typeWriter, 100);
    }

    startButton.addEventListener("click", () => {
        welcomePage.style.display = "none";
        app.style.display = "flex";
        startTypingAnimation(); // Start typing animation when the "Start Now" button is clicked
    });

    enterRoomsButton.addEventListener("click", () => {
        document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
    });


      // Timer Functionality
      const timerElement = document.getElementById('timer');
      let seconds = 0, minutes = 0, hours = 0;

      function updateTimer() {
        seconds++;
        if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
            minutes = 0;
            hours++;
          }
        }

        timerElement.textContent = 
          (hours < 10 ? '0' + hours : hours) + ':' +
          (minutes < 10 ? '0' + minutes : minutes) + ':' +
          (seconds < 10 ? '0' + seconds : seconds);
      }

      setInterval(updateTimer, 1000);
});
