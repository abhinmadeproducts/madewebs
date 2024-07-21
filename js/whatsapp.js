function sendToWhatsapp(){
	let number = "+917559907591";

	let name = document.getElementById('first_name').value;
	let message = document.getElementById('comments').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}