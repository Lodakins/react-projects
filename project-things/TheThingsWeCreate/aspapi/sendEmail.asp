<%
on error resume next

Set myMail=CreateObject("CDO.Message")
if( Err.Number <> 0 ) then
    Response.Write("1. " & Err.Description)
    'exit
end if


myMail.Subject="Sending email with CDO"
myMail.From="ladeokun@hotmail.co.uk"
myMail.To="ladeokun@elplays.com"
myMail.HTMLBody = "<h1>This is a message.</h1>"

myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver")="mail.elplays.com"
'myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverpickupdirectory")="c:\Inetpub\mailroot\pickup"
'Server port
myMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25
myMail.Configuration.Fields.Update

myMail.Send
if( Err.Number <> 0 ) then
    Response.Write("2. " & Err.Description)
else
    Response.write("Email Sent Successfully")
end if

set myMail=nothing
%>  