var alphabet = "abcdefghijklmnopqrstuvwxyz"; //declares the string of the alphabet
var newalpha = ""; //the new alphabet will be the one decrypted after the shift of the cipher


function shift(n){ //This function declares shift which shift each letter of the alphabet by i amount. The loop ends when it reaches the length of the alphabet (so after repeating 26 times)
	for (let i = 0; i < alphabet.length; i++){ // this lines wraps the around the string of the alphabet
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset]; //the new alphabet
	}
}




function encode(message){ 
    let result = "";
    message = message.toLowerCase(); //makes the message lowercase 
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index]; //this encrypts the message
    }
    return result;
}


// https://www.thatsoftwaredude.com/content/11425/implementing-a-caesar-cipher-in-javascript