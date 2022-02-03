// String Methods and Properties

// Properties
    // .length
        // returns number of characters in a string
            const myString = 'donkey';
            console.log(myString.length)
                // the return is 6 because there are 6 characters in the word donkey


// Methods
    // charAt()
        // returns character of the position/index we provide
            console.log(myString.charAt(0))
                // returns the charcter 'd' because we are asking for the 0 position/index
            console.log(myString.charAt(3))
                // returns the charcter 'k' because we are asking for the 3 position/index

    // indexOf()
        // returns the index of the character or group of characters we're looking for, and it tells us the position/index of the FIRST occurance within the string
            console.log(myString.indexOf('onk'))
                 // returns 1 because the 'o' in 'onk' starts at the 1 index
            console.log(myString.indexOf('ey'))
                // returns 4 because the 'e' in 'ey' starts at the 4 index
                // capitilization matters when deciding what and where to ask
    // lastIndexOf()
        // instead of the first occurance, it provides the Last occurance
    
    // slice()
        // accepts starting and ending parameters
            console.log(myString.slice(1,4))
                // returns 'onk' because it begins with index 1, which is 'o' and ends at index 4, which is 'e'. slice() does not show the last requested index
        
            console.log(myString.slice(3))
                // returns 'key' because we started at index 3
                // if the ending parameter is not provided, the slice method returns the characters from the start position to the end of the string
        // if the ending position parameter is less than or equal to the start position parameter, nothing will be returned
            console.log(myString.slice(2,1))
        // if the ending position parameter is one index higher than the start of the parameter, only the index of the start parameter will be returned. Because the slice methid will not return the character of the ending parameter
            console.log(myString.slice(2,3))
                // returns only the 'n'

    // toUpperCase()
        // does not require a parameter but still needs the parenthesis
        // returns the string in all Uppercase
            console.log(myString.toUpperCase())
                // returns DONKEY
    // toLowerCase()
        // turns string to all lower case
            console.log(myString.toLowerCase())
                // returns donkey

    // includes()
        // returns boolean data - true or false
        // if the character or group of charcters we provide are not inside the string it returns false
            console.log(myString.includes('ryu'))
                // returns false, because 'ryu' is not in my string 
            console.log(myString.includes('key'))
                // returns true, because 'key' is inside my string

    // split()
        // the split() method splits the string wherever the character we provide occurs, and returns the multiple string into an array
            console.log(myString.split('k'))
                // returns ['don' 'ey']
                // it took the 'k' out and split the string in half then put it into an array
        // using empty quotes returns every character as a seperate string in the array
            console.log(myString.split(''))
                // returns ['d', 'o', 'n', 'k', 'e', 'y']
                // there is no space between those quotes
        // if we change the string to a list of comma-separated values, wherever a comma occurs, each value is represented as its own string
            console.log('donkey, goat, dog'.split(','))
                // returns ['donkey', ' goat', ' dog']
        // if we have a sentence as a string, and we split wherever there is a space, each word becomes a string in the resulting array
            console.log('where are you'.split(' '))
                // returns ['where', 'are', 'you']