import * as uuid from 'uuid';


const makePlayers = (gender, tennis, pickleBall, num, arr) => {
    for (let i = 0; i < num; i++){
        const id = uuid.v4();
        arr.push({
            first: 'Aaaaaa', 
            last: 'Bbbbbb', 
            email: 'abc@gmail.com', 
            phone: '5555555555',
            gender,
            tennis,
            pickleBall, 
            id
        });
    }
}

var arr = [];


makePlayers('M', {doPlay: false}, {doPlay: true, skill: 'Beg'}, 10, arr);
makePlayers('M', {doPlay: false}, {doPlay: true, skill: 'Int'}, 10, arr);
makePlayers('M', {doPlay: false}, {doPlay: true, skill: 'Adv'}, 10, arr);

makePlayers('M', {doPlay: true, skill: 'Beg'}, {doPlay: false}, 10, arr);
makePlayers('M', {doPlay: true, skill: 'Int'}, {doPlay: false}, 10, arr);
makePlayers('M', {doPlay: true, skill: 'Adv'}, {doPlay: false}, 10, arr);

makePlayers('M', {doPlay: true, skill: 'Beg'}, {doPlay: true, skill: 'Beg'}, 10, arr);
makePlayers('M', {doPlay: true, skill: 'Int'}, {doPlay: true, skill: 'Int'}, 10, arr);
makePlayers('M', {doPlay: true, skill: 'Adv'}, {doPlay: true, skill: 'Adv'}, 10, arr);

makePlayers('W', {doPlay: false}, {doPlay: true, skill: 'Beg'}, 10, arr);
makePlayers('W', {doPlay: false}, {doPlay: true, skill: 'Int'}, 10, arr);
makePlayers('W', {doPlay: false}, {doPlay: true, skill: 'Adv'}, 10, arr);

makePlayers('W', {doPlay: true, skill: 'Beg'}, {doPlay: false}, 10, arr);
makePlayers('W', {doPlay: true, skill: 'Int'}, {doPlay: false}, 10, arr);
makePlayers('W', {doPlay: true, skill: 'Adv'}, {doPlay: false}, 10, arr);

makePlayers('W', {doPlay: true, skill: 'Beg'}, {doPlay: true, skill: 'Beg'}, 10, arr);
makePlayers('W', {doPlay: true, skill: 'Int'}, {doPlay: true, skill: 'Int'}, 10, arr);
makePlayers('W', {doPlay: true, skill: 'Adv'}, {doPlay: true, skill: 'Adv'}, 10, arr);




export default arr;