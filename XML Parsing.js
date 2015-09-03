/*
VARIABLES EXPECTED AS INPUTS;

workflowId -- string -- ID of the workflow to backup
objectName -- string -- Name of the object within the flow to version control, or 'ALL'

*/

var document = XMLManager.fromString(xmlString);

System.log("DOCUMENT IS :  \n\n"+document)

var nodeList = document.getElementsByTagName("workflow-item") ;

for (var i = 0 ; i < nodeList.length ; i++) {
	var node = nodeList.item(i) ;
	if (node.getAttribute("type") == "task") {
		var name = node.getAttribute("name") ;
		System.log("Found node with name:  " + name) ;
//		System.log(node.textContent) ;
		
		nodeChildren = null; nodeChildren = node.getChildNodes();
		scriptNode = null ; scriptNode = nodeChildren.getElementsByTagName("script");
		scriptText = null ; scriptText = scriptNode.textContent;
		System.log("FOUND SCRIPT \n\n" + scriptText)
	}
}
