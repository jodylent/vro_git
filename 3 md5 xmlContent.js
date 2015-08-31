/*
Written by Jody Lent, @jodylent

Inputs

flowId -- string -- workflow id's to be version controlled, e.g. 'eb2b0658-45ed-459a-acd4-1329be353d60'

*/

repoPath = '/path/to/repo/xmlFiles/'
newPath = '/tmp/xmlFiles/'  

oldHash = md5 "repoPath/flowId"
newHash = md5 "newPath/flowId"


boolCommitNew = false

if (oldHash != newHash){
	boolCommitNew = true
}