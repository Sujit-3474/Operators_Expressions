1. Add two Numbers

const AddTwoNumbers = (a,b) => {
    return a+b;
};


2. Find if the conditions are obeyed or not?

const Is_Valid = (a,b) => {
    if((a<10) && (a>b))
    return true;
    else
    return false;
  };

3. Check the conditons

const Check = (A, B) => 
{
   if((A%10==0) && (B%10==0))
      return true
    
  else if((A%10!=0) && (B%10!=0))
      return false
    
   else if((A%10==0) || (B%10==0))
    return true;
};


4. Find the first digit of a 4 digit number

const First_Digit = (n) => {
   
    let d=parseInt(n/(1000))
    return d;
  };
  

5.Find the last digit of a 4 digit number

const Last_Digit = (n) => {
    let rem = (n - 10*parseInt(n/10));
return rem;
};

 

6. Find the remainder

const Find_the_remainder = (a,b) => {
    let rem = (b - a*parseInt(b/a));
return rem;
};


7. Multiply Two Numbers

const Multiply_two_number = (a,b) => {
    return a*b;
};


8.Marks Calculators

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
  
 return ((A+B+C)/3);
};
