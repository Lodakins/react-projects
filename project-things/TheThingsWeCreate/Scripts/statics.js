function fireEvent(element, event) {
    if (document.createEventObject) {
        // dispatch for IE
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt)
    }
    else {
        // dispatch for firefox + others
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
}

function scrollPlayer(pos)
{
    //alert(document.getElementById("playerPlaylist").scrollTop);
    document.getElementById("playerPlaylist").scrollTop = 0;
    document.getElementById("playerPlaylist").scrollTop += (pos -10);
}

function validateEmail(email) {
    if (email.toLowerCase() == "Enter Your Email") {
        return false;
    }
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
        return true;
    }
    else {
        return false;
    }
}


function SendEmailTo(displayName, ContactName, ContactEmail, ContactSubject, ContactMessage) {
    alert(displayName);
    try
    {
        //$.ajax({
        //    url: "http://lawdshouse.com/mobile/aspapi/sendEmail.aspx?displayName=" + displayName,
        //    type: "POST"
        //}).then(function (data) {
        //    //alert(data);
        //    if (data.status == 'OK') {
        //        return true;
        //    }
        //    else {
        //        alert("An Error occured sending the email. Please try again later. \nError Details are as follows: " + data)
        //        return false;
        //    }

        //});

        $.post("http://lawdshouse.com/mobile/aspapi/sendEmail.aspx?displayName=" + displayName,
            {
                inputContactEmail: ContactEmail,
                inputContactMessage: ContactMessage,
                inputContactName: ContactName,
                inputContactSubject: ContactSubject
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            },
            'json');
    }
    catch(e)
    {
        alert(e.message);
    }
}