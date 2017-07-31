"use strict"

/* The function is to change the attribute of any element. it accept an array in
the following order- the element-object, the attribute of the element you
wish to change, the new attribute, and whether to remove the attribute 
if it is already present this accept "yes" or "no"*/

function changeAttribute(data_array) {
// data_array = [ele_object, att_to_change, new_att, remove_attr]
var ele_object = data_array[0];
var attr_to_change = data_array[1];
var new_attr = data_array[2];
var remove_attr = data_array[3];		// a string yes/no/change_attr_to if new_attr already exist

var ele_attr = ele_object.getAttribute(attr_to_change);
if (ele_attr === null || ele_attr !== new_attr) 	{
//set the attribute and the image become large
ele_object.setAttribute(attr_to_change, new_attr);
} else
 if (ele_attr === new_attr && remove_attr === "yes") {
//remove the attribute. the image become small
ele_object.removeAttribute(attr_to_change);
} 	
else if (ele_attr === new_attr && remove_attr === "no") {
//no action taken
}
else if(ele_attr === new_attr && (remove_attr !== "yes" || remove_attr !== "no" || remove_attr !== "undefined")){
var change_to = remove_attr;
ele_object.setAttribute(attr_to_change, remove_attr);
} 

}		//end changeAttribute


/*this function for adding eventlister  accept for elements 
element object, the type of event e.g "blur" a function to callback and the argument to
to pass to the function. the nature of the argument depend on the nature of 
waht the function expect. for example if the function accept an array function argument
will be an array
*/
function newEvent(element_object,  event_type, callback, func_argument){

if(element_object.addEventListener){
element_object.addEventListener(event_type, function(event) {

event.preventDefault();	
callback(func_argument);

},
false );
}	else if (element_object.attachEvent) {
element_object.attachEvent("on"+ event_type,
function(event){
event.preventDefault();	
callback(func_argument);
} );
}
}		//close the function block

function validEmail(email_ele){
var email_value = email_ele.value;
//inspect the element whether it is a valid email

}
var valid_email = document.getElementById("email-address");
newEvent(valid_email, "blur", validEmail, valid_email);
