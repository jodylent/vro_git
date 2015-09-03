/*
VARIABLES EXPECTED AS INPUTS;

workflowId -- string -- ID of the workflow to backup
objectName -- string -- Name of the object within the flow to version control, or 'ALL'

xmlString = resultRecords[0].xmlContent

*/

var document = XMLManager.fromString(xmlString);

//System.log("DOCUMENT IS :  \n\n"+document)

var workflowItemElementList = document.getElementsByTagName("workflow-item") ;

for (var i = 0 ; i < workflowItemElementList.length ; i++) {
	var workflowItemElement
	workflowItemElement = workflowItemElementList.item(i) ;
	if (workflowItemElement.getAttribute("type") == "task") {

		var nameElement = workflowItemElement.getElementsByTagName("display-name")
		var nameString = nameElement.textContent
		System.log("FOUND SCRIPTABLE TASK NAMED :  " + name) ;

//		System.log("FOUND SCRIPT FOR "+name +" : \n\n" + scriptText)
	}
}
