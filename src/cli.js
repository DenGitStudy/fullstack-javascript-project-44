import readlineSync from 'readline-sync';

const AskPlayerName = () => {
const PlayerName = readlineSync.question('May I have your name? ');
console.log('Hello,', PlayerName);
}

export default AskPlayerName;
