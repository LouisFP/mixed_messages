// Inspirational Message Generator

const randInt = num => Math.floor(Math.random() * num);
console.log(randInt(12));

const strings = ['Believe in yourself!', 'Reach for the stars!',
                'Discipline is the key to success',
                'You must fight for your right, to PARTAYY!!'];
const numbers = [70,100,0,40,15,5,10];
const booleans = [true, false];

const mixedMessage = 'Important motivational quote of the day: ' + strings[randInt(strings.length)] +
 '. Your chance of success today is: ' + numbers[randInt(numbers.length)] + 
 '! Answer this question for yourself, \'I am giving 100% today, true or false?\' ' + 'Answer: ' + booleans[randInt(booleans.length)];  

console.log(mixedMessage);
