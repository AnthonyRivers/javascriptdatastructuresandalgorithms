/**
 * isPrime.js
 *
 * Test a number to determine
 * if it's prime by iterating from
 * 2 to n, checking whether modulus
 * division (remainder) is equal to zero.
 * 
 * Time complexity: O(n)
 *
 * The time complexity of this algorithm
 * is linear because it checks all
 * the numbers from 0 to n.
 */

function isPrime(n) {
	if(n <= 1) {
		return false;
	}

	//check from 2 to n-1
	for(var i = 2; i < n; i++){
		if(n % i == 0) {
			return false;
		}
	}
	
	return true;
}
