const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//directory checking
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//file checking
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

//avoid callback hell
// rl.question('name? ', (name) => {
//     rl.question('phone number? ', (phoneNumber) => {
//         const contact = {name , phoneNumber};
        
//         //read contacts.json 
//         const file = fs.readFileSync('./data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);
//         contacts.push(contact);

//         //write contacts.json
//         fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
//         console.log('terima kasih')
//         rl.close();
//     })
// });

const question = (q) => {
  return new Promise((resolve, reject) => {
    rl.question(q, (qParam) => {
      resolve(qParam);
    });
  });
};


//save contact to contacts.json
const saveContact = (name, email) => {
    const contact = {name , email};
        
    //read contacts.json 
    const file = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);

    //write contacts.json
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
    console.log('terima kasih')
    rl.close();
}

module.exports = {question, saveContact}