// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//directory checking
// const dirPath = './data';
// if(!fs.existsSync(dirPath)) {
//   fs.mkdirSync(dirPath);
// }

//file checking
// const dataPath = './data/contacts.json';
// if(!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, '[]', 'utf-8')
// }

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

// const question = (q) => {
//   return new Promise((resolve, reject) => {
//     rl.question(q, (qParam) => {
//       resolve(qParam);
//     });
//   });
// };


const fs = require('fs');
const validator = require('validator');

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


//load contact
const loadContact = () => {
  const file = fs.readFileSync('./data/contacts.json', 'utf-8');
  const contacts = JSON.parse(file);
  return contacts;
}


//save contact to contacts.json
const saveContact = (name, email, phoneNumber) => {
    const contact = {name , email, phoneNumber};
        
    //read contacts.json 
    const contacts = loadContact();
    

    //duplicate checking
    const duplicate = contacts.find(contact => contact.name == name);
    if(duplicate) {
      console.log('name has already taken');
      return false;
    }

    //email checking
    if (email) {
      if(!validator.isEmail(email)) {
        console.log('email is not valid');
      return false;
      }
    }

    //phoneNumber checking
    if(!validator.isMobilePhone(phoneNumber, 'id-ID')) {
      console.log('phone number is not valid');
    return false;
    }
    

    //write contacts.json
    contacts.push(contact);
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
    console.log('thanks');
    // rl.close();
    //we don't need readline anymore
}

const listContact = () => {
  const contacts = loadContact();
  console.log('Contact List');
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.name} - ${contact.phoneNumber}`)
  })
}

const detailContact = (name) => {
  const contacts = loadContact();

  const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

  if(!contact) {
    console.log(`name ${name} is not found!`);
    return false;
  }

  console.log('Contact Detail')
  console.log(`name: ${contact.name}`);
  console.log(`phone number: ${contact.phoneNumber}`);
  if(contact.email) {
    console.log(`email: ${contact.email}`);
  }
}

const deleteContact = (name) => {
  const contacts = loadContact();

  const newContacts = contacts.filter(contact => contact.name.toLowerCase() !== name.toLowerCase())

  if(contacts.length === newContacts.length) {
    console.log(`name ${name} is not found!`);
    return false;
  }

  fs.writeFileSync('./data/contacts.json', JSON.stringify(newContacts));
  console.log(`${name}, has been deleted`);

}

module.exports = {saveContact, listContact, detailContact, deleteContact}