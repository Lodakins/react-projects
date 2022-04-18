soundManager.setup({
    // where to find flash audio SWFs, as needed
    url: '/swf/',
    onready: function () {
        // SM2 is ready to play audio!
        // alert("Soundmanager ready!")
    },
    defaultOptions: {
        // set global default volume for all sound objects
        //volume: 50
    }
});
