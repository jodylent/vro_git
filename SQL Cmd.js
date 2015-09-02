/*
VARIABLES EXPECTED AS INPUTS;

workflowId -- string -- ID of the workflow to backup
dbName -- string -- Name of the target vRO server's SQL DB

*/

var query = "SELECT xmlContent FROM ["+dbName+"].[dbo].[VMO_WorkflowContent] WHERE workflowId LIKE '"+workflowId+"'"

System.log("DB QUERY IS: " + query);
