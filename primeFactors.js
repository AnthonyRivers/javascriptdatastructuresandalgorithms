/**
 * primeFactors.js
 *
 * Time Complexity: O(sqrt(n))
 *
 *
 */
function primeFactors(n){
	var arr = [];

	//print the number of 2s that dive n
	while (n % 2 == 0) {
		console.log(2);
		arr.push(2);
		n = n / 2;
	}

    // n must be odd at this point. so we can skip one element
    // (Note i = i + 2)
    for(var i = 3; i * i <= n; i = i + 2) {
        // while i divides n, print i and divide n
        while(n % i == 0){
            console.log(i);
	    arr.push(i);
            n = n / i;
        }
    }

    // this condition is to handle the case when n is a prime number
    // greater than 2
    if(n > 2){
        console.log(n);
	arr.push(n);
    }

    return arr;
}


