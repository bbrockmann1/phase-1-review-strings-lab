// Write your code in this file!
const currentUser = 'Bob'
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
const excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = 'Welcome, ' + firstInitial + + restOfName + '!';