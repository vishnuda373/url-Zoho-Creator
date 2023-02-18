// Download PDF
openUrl(zoho.appuri + "record-pdf/All_Customers/" + input.ID,"same window");

//Open a report of the same application form
openUrl("#Report:My_Contacts_Report", "same window");

//Open a form of the same application in a popup window
openUrl("#Form:Orders?zc_BgClr=#34ebd2","popup window","height=510px,width=420px");

//Open a form of a different application
openUrl("https://app.zohocreator.com/shawn24/customer-details#Form:Registration", "same window");

//Redirect to the previous URL loaded in the browser's history
openUrl("#Script:page.back","same window");

//Use iframe on a Zoho Creator page
<iframe name="frameName" width="1000" height="1000" frameborder="0" scrolling="yes"> </iframe>
//"On User Input" workflow
if (Product=="Creator")
  {
    openUrl("https://www.zoho.com/creator", "iframe", "frameName");
  }
else if (Product == "CRM")
  {
    openUrl("https://www.zoho.com/crm", "iframe", "frameName");
  }

//Print PDF
openUrl(zoho.appuri + "record-print/All_Customers/" + input.ID,"same window");
//Setup template in Record Templates

//Print Page 
openUrl("https://creatorapp.zoho.com/export/accountname/environment/development/formname/print/pagename/?Param=" + input.ID,"new window");
