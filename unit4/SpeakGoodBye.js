(function (window) {
    const speakWord = "Good Bye";

    window.byeSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    }
})(window);