var number = '';
var number2 = '';
var operationSign = '';

function display(value){
    document.getElementById('result').innerHTML = value;
}

function cache(num) {
    number = number + num;
    display(number);
}

function operation(sign){
    if(sign == '=') {
        if(number2 != '') {
            sign = '';
            console.log(number2 + " " + operationSign + " " + number);

            switch (operationSign) {
                case 'x':
                    document.getElementById('historic').innerHTML += `${number2} ${operationSign} ${number} = `
                    number = (parseFloat(number)*parseFloat(number2));
                    display(number);
                    console.log(number);
                    document.getElementById('historic').innerHTML += `${number}<br>`
                    number2 = '';
                    break;
                case '+':
                    document.getElementById('historic').innerHTML += `${number2} ${operationSign} ${number} = `
                    number = (parseFloat(number)+parseFloat(number2));
                    display(number);
                    console.log(number);
                    document.getElementById('historic').innerHTML += `${number}<br>`
                    number2 = '';
                        break;
                case '/':
                    document.getElementById('historic').innerHTML += `${number2} ${operationSign} ${number} = `
                    number = (parseFloat(number2)/parseFloat(number));
                    display(number);
                    console.log(number);
                    document.getElementById('historic').innerHTML += `${number}<br>`
                    number2 = '';
                    break;
                case '-':
                    document.getElementById('historic').innerHTML += `${number2} ${operationSign} ${number} = `
                    number = (parseFloat(number2)-parseFloat(number));
                    display(number);
                    console.log(number);
                    document.getElementById('historic').innerHTML += `${number}<br>`
                    number2 = '';
                    break;            
                default:
                    console.log('ERROR');
                    break;
            }
        } else return(console.log("Missing the second value." ));
    } else {
        switch(sign){
            case 'x':
                number2 = number;
                number = '';
                document.getElementById('result').innerHTML = number;
                operationSign = sign;
                break;
            case '+':
                number2 = number;
                number = '';
                document.getElementById('result').innerHTML = number;
                operationSign = sign;
                break;
            case '/':
                number2 = number;
                number = '';
                document.getElementById('result').innerHTML = number;
                operationSign = sign;
                break;
            case '-':
                number2 = number;
                number = '';
                document.getElementById('result').innerHTML = number;
                operationSign = sign;    
                break;        
        }
    }
}