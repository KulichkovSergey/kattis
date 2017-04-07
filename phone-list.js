let line;
let dataString;

while (line = readline()){
    if (!dataString) {
        dataString = line;
    } else {
        dataString = dataString + ',' + line;
    }
}

let data = dataString.split(',');
let numOfTests = parseInt(data[0]);
let numPhoneNumbers = parseInt(data[1]);
let sliceAt = 2;
let isConsistent = 'YES';

let isPrefix = (a, b) => a.length < b.length && b.indexOf(a) === 0;

for (let i = 0; i < numOfTests; i++){
    let sortedList = data.slice(sliceAt, numPhoneNumbers + sliceAt).sort();
    
    for (let j = 0, length = sortedList.length - 1; j < length; j++) {
        isConsistent = 'YES';

        if (isPrefix(sortedList[j], sortedList[j + 1])){
            isConsistent = 'NO';
            break;
        }
    }
	
    print(isConsistent);

    sliceAt += numPhoneNumbers + 1;
    numPhoneNumbers =  parseInt(data[sliceAt - 1]);
}