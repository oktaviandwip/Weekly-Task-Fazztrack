const { createTable, saveData } = require("../src/models/users");
const hashing = require("../src/utils/hash");

module.exports = async () => {
  try {
    await createTable();
    const users = [
      {
        first_name: "Collete",
        last_name: "Scholler",
        username: "collettescholler",
        phone_number: "9475375897",
        email: "cscholler0@php.net",
        password: "iN2`*+rYD3m",
      },
      {
        first_name: "Sanford",
        last_name: "Chardin",
        username: "sanfordchardin",
        phone_number: "3469227573",
        email: "schardin1@techcrunch.com",
        password: "jI3P`0v!C",
      },
      {
        first_name: "Teresa",
        last_name: "Ruggen",
        username: "teresaruggen",
        phone_number: "2712882459",
        email: "truggen2@feedburner.com",
        password: "oO3KKJq)Xr.*<I",
      },
      {
        first_name: "Eziechiele",
        last_name: "Ricciardo",
        username: "eziechielericciardo",
        phone_number: "9135688036",
        email: "ericciardo3@twitter.com",
        password: "uG1D7nI/R",
      },
      {
        first_name: "Aigneis",
        last_name: "O'Fogarty",
        username: "aigneisofogarty",
        phone_number: "6495483866",
        email: "aofogarty4@house.gov",
        password: "yX2!e=Tq(Sqx",
      },
      {
        first_name: "Janine",
        last_name: "Greensmith",
        username: "janinegreensmith",
        phone_number: "5157473394",
        email: "jgreensmith5@springer.com",
        password: "iQ0<R%zlQv5C",
      },
      {
        first_name: "Philipa",
        last_name: "Bather",
        username: "philipabather",
        phone_number: "7896128652",
        email: "pbather6@eventbrite.com",
        password: "eX9HXVHr",
      },
      {
        first_name: "Norris",
        last_name: "Mara",
        username: "norrismara",
        phone_number: "2262612389",
        email: "nmara7@economist.com",
        password: "sK3Y1vx",
      },
      {
        first_name: "Etty",
        last_name: "Lampett",
        username: "ettylampett",
        phone_number: "8737835810",
        email: "elampett8@washington.edu",
        password: "jZ2f~P!XPf/|",
      },
      {
        first_name: "Alfie",
        last_name: "Alvarado",
        username: "alfiealvarado",
        phone_number: "7797245853",
        email: "aalvarado9@hostgator.com",
        password: "jD2N/*r8j`Ng",
      },
      {
        first_name: "Dulcea",
        last_name: "Pietri",
        username: "dulceapietri",
        phone_number: "9201012240",
        email: "dpietria@ted.com",
        password: "nL4p\frt&k",
      },
      {
        first_name: "Bertina",
        last_name: "Bugdale",
        username: "bertinabugdale",
        phone_number: "7512014243",
        email: "bbugdaleb@flavors.me",
        password: "hX3_Fso,6*5x",
      },
      {
        first_name: "Ferdinanda",
        last_name: "Toulmin",
        username: "ferdinandatoulmin",
        phone_number: "4416528690",
        email: "ftoulminc@loc.gov",
        password: "yH80s)Wx|WCuV",
      },
      {
        first_name: "Rooney",
        last_name: "Thormwell",
        username: "rooneythormwell",
        phone_number: "7389082287",
        email: "rthormwelld@myspace.com",
        password: "vH6@@4aU",
      },
      {
        first_name: "Brandice",
        last_name: "Dobsons",
        username: "brandicedobsons",
        phone_number: "9821170873",
        email: "bdobsonse@php.net",
        password: "uI8I=WGE0h3",
      },
      {
        first_name: "Lauretta",
        last_name: "Champain",
        username: "laurettachampain",
        phone_number: "5948278928",
        email: "lchampainf@yellowbook.com",
        password: 'pU6KdM8"?',
      },
      {
        first_name: "Deloris",
        last_name: "MacGaughey",
        username: "delorismacgaughey",
        phone_number: "7856953836",
        email: "dmacgaugheyg@hubpages.com",
        password: "aV8mj2+}",
      },
      {
        first_name: "Lotta",
        last_name: "Nott",
        username: "lottanott",
        phone_number: "1483669962",
        email: "lnotth@latimes.com",
        password: "pS9Jq2OB#l7",
      },
      {
        first_name: "Anderson",
        last_name: "Cubley",
        username: "andersoncubley",
        phone_number: "3347591633",
        email: "acubleyi@nymag.com",
        password: "cX8k,6zl7_0Ej",
      },
      {
        first_name: "Tamas",
        last_name: "De la Perrelle",
        username: "tamasdelaperrelle",
        phone_number: "2153707253",
        email: "tdelaperrellej@dedecms.com",
        password: "lA5B=K.lco%",
      },

      { email: "admin@gmail.com", password: "Jak_mania10", role: "admin" },

      { email: "putra@gmail.com", password: "Jak_mania10" },
    ];

    for await (const user of users) {
      user.password = await hashing(user.password);
      await saveData(user);
    }

    console.log(`${users.length} users created`);
  } catch (err) {
    throw err;
  }
};
