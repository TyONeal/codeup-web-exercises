console.log("Hello from external JavaScript!");

alert("Welcome to my website!");

userResponse = prompt("What is your favorite color?");
    console.log(userResponse);

    alert("That's great! " + userResponse + " is my favorite color, too!");




/* Movie Rental
You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?*/


let dailyRentalRateDollars;

let littleMermaidDaysRented;
let brotherBearDaysRented;
let herculesDaysRented;

let totalRentalCost;

totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;

let userResponse1 = prompt("How many days did you rent Little Mermaid?");
let userResponse2 = prompt("How many days did you rent Brother Bear?");
let userResponse3 = prompt("How many days did you rent Hercules?");

userResponse1 = parseInt(userResponse1);
userResponse2 = parseInt(userResponse2);
userResponse3 = parseInt(userResponse3);

alert("You owe " + ((userResponse1+userResponse2+userResponse3) * 3 )+ " dollars.");



/* Contractor
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/


let googleHourlyRateDollars = 400;
let amazonHourlyRateDollars = 380;
let facebookHourlyRateDollars = 350;

let googleHours;
let amazonHours;
let facebookHours;

let totalPayment;



totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

let userResponseGoogle = prompt("How many hours did you work at Google?");
let userResponseAmazon = prompt("How many hours did you work at Amazon?")
let userResponseFacebook = prompt("How many hours did you work at Facebook?");

userResponseGoogle = parseInt(userResponseGoogle);
userResponseAmazon = parseInt(userResponseAmazon);
userResponseFacebook = parseInt(userResponseFacebook);

alert("Your total earnings for the week is " + ((userResponseGoogle * googleHourlyRateDollars) + (userResponseAmazon * amazonHourlyRateDollars) + (userResponseFacebook * facebookHourlyRateDollars)));


/* Student Enrollment
A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule. */



let classIsNotFull; // boolean
let classScheduleDoesNotConflict; // boolean

let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

userEnrolledResponse = confirm("Is the class full?");
    if (userEnrolledResponse === false) {
        alert("Proceed to next question");
    } else {
        alert("Student may not enroll in course.");
    }
userConflictResponse= confirm("Are there any scheduling conflicts?");
    if (userConflictResponse === false) {
        alert("Student may enroll in the course.")
    } else {
        alert("Student may not enroll in the course.")
    }


/* Product Offer
A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
    Use the following code to follow the instructions below: */



let numberOfItems; // number
let offerIsValid; // boolean
let isPremiumMember; // boolean

let userBuyResponse;

let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

    userExpiredResponse = confirm("Is the item expired?");
            if  (userExpiredResponse === false) {
            alert("Thank you. Please answer the next question.");

                userBuyResponse = prompt("How many items are you buying?");

                userBuyResponse = parseInt(userBuyResponse);


                if (userBuyResponse >= 2) {
                    alert("The item is valid for discount!");
                } else {
                    alert("The item is not valid for discount.");
                }
            } else {
                alert("The item does not qualify for the discount.");

            }



