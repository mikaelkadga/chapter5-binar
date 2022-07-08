const { saveContact, question } = require("./contact");

const main = async () => {
  const name = await question('name? ');
  const email = await question('email? ');

  saveContact(name, email)
}

main();
