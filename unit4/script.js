(function () {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (name of names) {
        if (name.charAt(0).toUpperCase() === 'J') {
            byeSpeaker.speak(name);
        } else {
            helloSpeaker.speak(name);
        }
    }
})();