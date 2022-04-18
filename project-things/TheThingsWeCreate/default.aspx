<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">
    private void Page_Load(object sender, EventArgs e)
    {
        // Check whether the browser remains
        // connected to the server.
        if (Response.IsClientConnected)
        {
            // If still connected, redirect
            // to another page. 
            Response.Redirect(((Page)sender).ResolveUrl("index.html"), false);
        }
        else
        {
            // If the browser is not connected
            // stop all response processing.
            Response.End();
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
