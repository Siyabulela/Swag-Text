function rev_word(str){
    var reversed_word = '';
    for(i = lengthOf(str) - 1; i >= 0; i--){
        reversed_word += str[i];
    }
    return(reversed_word);
}

//console.log(rev_word("Hello"));

function lengthOf(str){
    var i = 0;
    while(str[i] != undefined){
        i++;
    }
    return(i);
}

// console.log(lengthOf('HelloWorld'));

function swag(str){
    var pretty_word = '';
    for(var i = 0; i < lengthOf(str); i++){
        if(str[i] == 'a' || str[i] == 'A'){
            pretty_word += '@';
        }
        else if(str[i] == 'l'){
            pretty_word += '1';
        }
        else if(str[i] == 's' || str[i] == 'S'){
            pretty_word += '$';
        }
        else if(str[i] == 'e'){
            pretty_word += '3';
        }
        else if(str[i] == 'o' || str[i] == 'O'){
            pretty_word += '0';
        }
        // else if(str[i] == 'B'){
        //     pretty_word += '8';
        // }
        else{
            pretty_word += str[i];
        }
    }
    return(pretty_word);
}

console.log(swag("hey im going to the mall today with my Babe Before coronavirus whatsApp guyS"));