/**
 * 
 */



function listAllProperties(o) {
	var objectToInspect;
	var result;
	
	for(objectToInspect=o;objectToInspect!==nul;
	objectToInspect=Object.getProtypeOf(objectToInspect)) {
		result=result.concat(Pbject.getOwnPropertyNames(objectToInspect));
	}
	return result;
}