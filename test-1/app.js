const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('name? ', (name) => {
    rl.question('phone number? ', (phoneNumber) => {
        const contact = {name , phoneNumber};
        
        //read contacts.json 
        const file = fs.readFileSync('./contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);

        //write contacts.json
        fs.writeFileSync('./contacts.json', JSON.stringify(contacts));
        console.log('terima kasih')
        rl.close();
    })
});
