/*
VARIABLES EXPECTED AS INPUTS;

workflowId -- string -- ID of the workflow to backup
objectName -- string -- Name of the object within the flow to version control, or 'ALL'

*/

var document = XMLManager.fromString(xmlString);
var docNodelist = document.getChildNodes();
var mailmessage = docNodelist.item(0);
var maillist = mailmessage.getChildNodes();
var mails = maillist.length;
for (i = 0; i < mails; i++) {
    mail = maillist.item(i);
    var mailchilds = mail.getChildNodes();
    for (j = 0; j < mailchilds.length; j++) {
        var child = mailchilds.item(j);
        var childName = child.nodeName;
        var childText = child.textContent;
        System.log (childName+" : "+childText);
        var ChildAttribs=child.getAttributes();
        for (k = 0; k < ChildAttribs.length; k++) {
            var ChildAttrib = ChildAttribs.item(k);
            var ChildAttribName = ChildAttrib.nodeName;
            var ChildAttribValue = ChildAttrib.nodeValue;
            System.log("Attribute : "+ChildAttribName+" : "+ChildAttribValue);
        }
    }
}