var currentSingleImage = "";
var currentSingleTitle = "TAKE ME TO YOUR LEADER";
var CurrentSingleVideoURL = "mobile/gatheringpace.aspx";


function ShowBuyPanel(oImg, event) {
    if (oImg.src.indexOf("WebsiteLandingTakeMeToYourLeaderStickers") < 0 || $("#BuyPanel").css('display') != 'none') {
        return;
    }

    //alert(window.innerHeight)
    var topPosition = (event.clientY - window.innerHeight < 300) ? 160 : event.clientY;

    

    var distanceLeftToRight = $(window).width() - (event.clientX);


    if (distanceLeftToRight > ($('#BuyPanel').width() + 20))
        var leftPosition = event.clientX;
    else
        var leftPosition = event.clientX - ($('#BuyPanel').width() - 70);


    $("#BuyPanel").show("slow");
    $("#BuyPanel").offset({ top: topPosition, left: leftPosition });
    $("#BuyPanel").size({ width: 400, height: 516 });



    var distanceLeftToBottom = $(window).height() - event.clientY;

    if (distanceLeftToBottom >= 516) {
        $("#singleImage").show();
        $("#buyHeader").css({ 'margin-top': '-1.5px' })
        $("#BuyPanel").css({ 'min-height': '516px' })
    }
    else {
        $("#singleImage").hide();
        $("#buyHeader").css({ 'margin-top': '69px' })
        $("#BuyPanel").css({ 'min-height': '222px' })
    }


}


function NotAvailableForDownloadYet(RetailerName) {
    alert("Ooops! \n\"" + RetailerName + "\" hasn't completed their process of making the song \"" + currentSingleTitle + "\" available for download. Please check other retailers in the list.")
}


function HideBuyPanel() {
    $("#BuyPanel").fadeOut();
    //$(".content").css({ opacity: 1 });
}


function GotToVideoPage() {
    var fileName = "http://retain.name/";
    window.open(fileName + CurrentSingleVideoURL);
}

