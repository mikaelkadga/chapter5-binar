// const { saveContact, question } = require("./contact");

// const main = async () => {
//   const name = await question('name? ');
//   const email = await question('email? ');

//   saveContact(name, email)
// }

// main();


const yargs = require("yargs");
const { saveContact, listContact, detailContact, deleteContact } = require("./contact");

yargs.command({
  command: 'add', 
  describe: 'add new contact',
  builder: {
    name: {
      describe: 'name',
      demandOption: true, 
      type: 'string'
    },
    email: {
      describe: 'email',
      demandOption: false, 
      type: 'string'
    },
    phoneNumber: {
      describe: 'phoneNumber',
      demandOption: true, 
      type: 'string'
    }
  },
  handler(argv) {
  saveContact(argv.name, argv.email, argv.phoneNumber)
  }
})
.demandCommand();

yargs.command({
  command: 'list', 
  describe: 'list all contact',
  handler() {
    listContact()
  }
});

yargs.command({
  command: 'detail', 
  describe: 'contact detail',
  builder: {
    name: {
      describe: 'name',
      demandOption: true, 
      type: 'string' 
    } 
  },
  handler(argv) {
    detailContact(argv.name);
  }
});

yargs.command({
  command: 'delete', 
  describe: 'delete contact',
  builder: {
    name: {
      describe: 'name',
      demandOption: true, 
      type: 'string' 
    } 
  },
  handler(argv) {
    deleteContact(argv.name);
  }
});

yargs.parse();
