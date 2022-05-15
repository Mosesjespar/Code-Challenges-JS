/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

*/
function calculateYears(principal, interest, tax, desired) {
    var years = 0;
        while (principal < desired){
            principal += principal * interest * (1 - tax);
            year +=1;
         }
        return years;
    }