<%@ Page Language="C#" %>


<!DOCTYPE html>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                using (System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage())
                {
                    message.From = new System.Net.Mail.MailAddress(Request.Form["inputContactEmail"]);
                    message.To.Add(new System.Net.Mail.MailAddress("ladeokun@thethingswecreate.com"));
                    message.CC.Add(new System.Net.Mail.MailAddress("ladeokun@hotmail.co.uk"));
                    message.Subject = "Message (" + Request.Form["inputContactSubject"] + ") via website for " + Request.QueryString["displayName"];
                    message.Body = Request.Form["inputContactMessage"];

                    System.Net.Mail.SmtpClient client = new System.Net.Mail.SmtpClient();
                    //client.Timeout = 120;
                    client.Send(message);
                    Response.Write("{status: 'SUCCESS', data: 'Email Sent! Thank you for getting in touch'}");
                }
            }
            catch (Exception ex)
            {
                Response.Write("{status: 'ERROR', data: 'We appologize for the inconvenience but an error occured:\n<i>" + ex.Message + "</i>\nPlease click <a href=\"mailto:ladeokun@thethingswecreate.com\">here</a> to contact us using your email client instead. Thank you'}");
                //Response.Write(ex.Message);
            }

        }
    }

</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
</body>
</html>
