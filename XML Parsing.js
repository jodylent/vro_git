/*
INPUTS:

xmlString -- string -- created from a SQL:ActiveRecord
	e.g.: xmlString = resultRecords[0].xmlContent

OUTPUTS:

taskDisplayName -- string -- the name of the Scriptable Task from the workflow being backed up
taskScriptText -- string -- the contents of the Scriptable Task as a giant text string

*/

var document = XMLManager.fromString(xmlString);

//System.log("DOCUMENT IS :  \n\n"+document)

var workflowItemElementList = document.getElementsByTagName("workflow-item") ;

for (var i = 0 ; i < workflowItemElementList.length ; i++) {
	var workflowItemElement
	workflowItemElement = workflowItemElementList.item(i) ;
	if (workflowItemElement.getAttribute("type") == "task") {
		
		workflowChildElementList = workflowItemElement.getChildNodes()
		for (j=0;j<workflowChildElementList.length;j++){
			currentNode = workflowChildElementList.item(j);
			currentName = currentNode.nodeName;
			
			if (currentName=="display-name"){
				taskDisplayName = currentNode.textContent;

			} else if (currentName=="script"){
				taskScriptText = currentNode.textContent;	

			}
		}

	System.log("CURRENT TASK NAME : "+taskDisplayName);
	System.log("CONTENT IS : \n\n" + taskScriptText + "\n");
	
	}
}
