/****** Script for SelectTopNRows command from SSMS  ******/
/*

We're selecting the xmlContent column from vCO_DB.dbo.VMO_WorkflowContent

The easiest way to do this is to filter on workflowId

*/

DECLARE @item_id varchar(36)
SET @item_id = 'eb2b0658-45ed-459a-acd4-1329be353d60'

SELECT [id]
      ,[workflowId]
      ,[xmlContent]
      ,[obfuscationOwner]
  FROM [ACIP_vCO].[dbo].[VMO_WorkflowContent]

  where workflowId like @item_id