function validateEmptyValues(){
	var txtEmail =document.getElementsByTagName('txtEmail')
	var txtUn =document.getElementsByTagName('txtUn')
	var txtPassword =document.getElementsByTagName('txtPassword') 

	var appendError=""
	if (txtEmail == "") {
		appendError ="email";
	}
	if(txtUn =="")
	{
if (txtPassword =="") {
	if (appendError != "") {
		appendError= appendError+" and";

	}
	appendError=appendError+" password";

}
if (appendError!= "") {
	appendError= appendError+" can not be empty ";
	alret(appendError);
	return false;

}
else
{
	return true
	}
}
}
