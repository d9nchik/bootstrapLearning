(function (window) {
    const speakWord = "Hello";

    window.helloSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    }
})(window);
