&#x20;FWD Assignment 4



&#x20;Name - Pushpansh Sharabh (SAU/FET/DBM(CSE)/2025/048)



All solutions are implemented using:

prompt() for input

alert() for output

Plain JavaScript (no libraries)





Flow of every question --





&#x20;Question 1 – Digit Gatekeeper

\- Loop from L to R

\- Check:

&#x20; - divisible by K

&#x20; - no digit 0

&#x20; - sum of digits is prime

\- Count valid numbers



Time Complexity: O(N × logN)







&#x20;Question 2 – Roll-Seed Lock

\- Perform 3 transformations:

&#x20; - even → n/2 + seed

&#x20; - odd → n\*3 - seed

\- Check:

&#x20; - number is 3-digit

&#x20; - middle digit equals seed



Time Complexity: O(1)







&#x20;Question 3 – Mirror Corridor

\- Try values of X from 0 to 100000

\- Check:

&#x20; - N + X is palindrome

&#x20; - divisible by K

\- Return smallest valid X



Time Complexity: O(100000 × d)







&#x20;Question 4 – Fare Calculator

\- Apply rules step-by-step:

&#x20; - base + distance

&#x20; - late penalty

&#x20; - distance bonus

&#x20; - seed adjustment

&#x20; - round to nearest multiple of 5



Time Complexity: O(1)







&#x20; Question 5 – Skipping Numbers

\- Add numbers from 1 upwards

\- Skip multiples of (seed + 2)

\- Stop when sum ≥ N



Time Complexity: O(m)







&#x20;Question 6 – Contest Score Judge

\- Compute score: 3a + b - 2c

\- Apply rules:

&#x20; - no negative

&#x20; - penalty if attempts > 50

\- Determine PASS / FAIL



Time Complexity: O(1)





