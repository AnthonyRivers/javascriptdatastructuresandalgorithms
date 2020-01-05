/**
 * improvedIsPrime.js
 *
 * Time Complexity: O(sqrt(n))
 *
 * The improved prime function uses
 * the implementation of the notion 
 * that all prime numbers are of the
 * form 6k ± 1 and that the if the
 * square root of n is not prime then
 * n is not a prime number by mathematical
 * definition.
 *
 *
 */
function improvedIsPrime(n){

	if(n <= 1) return false;
	if(n <= 3) return true;

	// skip middle five numbers
	if(n % 2 ==0 || n % 3 == 0) return false;

	for(let i = 5; i * i <= n; i += 6){

		if(n % i == 0 || n % (i + 2) == 0){
			return false;
		}
			
	}

	return true;
}
