const pg = require('pg');

const client = new pg.Client('postgres://localhost/world_map');

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS data;
    DROP TABLE IF EXISTS continent;
    CREATE TABLE continent(
      id INTEGER PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      map VARCHAR(30) NOT NULL
    );
    CREATE TABLE data(
      id SERIAL PRIMARY KEY,
      fact TEXT NOT NULL,
      continent_id INTEGER REFERENCES continent(id)
    );
    INSERT INTO continent(id, name, map) VALUES(1, 'North America', '156,75,241,115');
    INSERT INTO continent(id, name, map) VALUES(2, 'South America', '230,195,324,230');
    INSERT INTO continent(id, name, map) VALUES(3, 'Africa', '409,157,488,179');
    INSERT INTO continent(id, name, map) VALUES(4, 'Europe', '420,65,507,88');
    INSERT INTO continent(id, name, map) VALUES(5, 'Australia and Oceania', '625,237,746,264');
    INSERT INTO continent(id, name, map) VALUES(6, 'Asia', '548,83,619,115');
    INSERT INTO continent(id, name, map) VALUES(7, 'Antarctica', '366,347,501,370');
    INSERT INTO data(fact, continent_id) VALUES('Asia is the largest continent in size. It has the biggest land area and the worlds biggest population. This means most people on our Earth live on the Asian continent.', 6);
    INSERT INTO data(fact, continent_id) VALUES('About 4.6 billion people live in Asia. The Asian continent has the most populous cities, which means there are the biggest cities in the world. Many million people live in the urban centres of the Asian continent, in cities such as in Delhi, Tokyo, Shanghai or Beijing.', 6);
    INSERT INTO data(fact, continent_id) VALUES('Asia houses some of the richest nations in the world. The tiny country Qatar on the Arabian peninsula is on of the richest nations in the world due to its income from oil exploration and the petroleum industry. Saudi-Arabia, the United Arab Emirates and Bahrain are also among richest countries in the world due to their oil reserves. ', 6);
    INSERT INTO data(fact, continent_id) VALUES('The most languages are spoken in Asia - over 2,300 languages! However, most of these languages are spoken only by small groups of people. 2,000 languages of the worlds 7,000 languages are spoken by less than 1,000 people! Chinese is the language with the most native speakers - with almost 1.4 billion people speaking it.  ', 6);
    INSERT INTO data(fact, continent_id) VALUES('Australia/Oceania is the smallest continent of the planet. Strictly speaking Oceania is a geographic region that includes Australasia, Polynesia, Micronesia and Melanesia. This means Australia, New Zealand, Vanuatu and the many islands to the north and east of Australia in the Pacific Ocean are this region and thus on this continent. Australia is the largest landmass in the region and thus often also referred to as a continent.', 5);
    INSERT INTO data(fact, continent_id) VALUES('About 43 million people live in Oceania. The most populous cities of the continent are Sydney, Melbourne, Brisbane and Perth - all these cities are in Australia.', 5);
    INSERT INTO data(fact, continent_id) VALUES('Africa is the continent with the most countries. There are 54 countries on the African continent. About 1.3 billion people live in Africa. The largest cities of the African continent are Lagos/Nigeria, Kinshasa/DR Congo and Cairo/Egypt.', 3);
    INSERT INTO data(fact, continent_id) VALUES('The oldest human fossils such as skeletons and skulls have been discovered in Africa, therefore the African continent is also referred to as the cradle of humankind. ', 3);
    INSERT INTO data(fact, continent_id) VALUES('From the 15th - 19th century Africa was colonised by several countries including Portugal, the Netherlands, Spain, France, Italy, Belgium, the United Kingdom and Germany. The only countries that escaped colonialisation in Africa are Ethiopia and Liberia.', 3);
    INSERT INTO data(fact, continent_id) VALUES('Africa also houses the longest river in the world, the Nile and the second highest waterfalls in the world, the Tugela Falls in South Africa.', 3);
    INSERT INTO data(fact, continent_id) VALUES('North America is a continent which is located entirely on the northern and western hemisphere. There are 23 countries in total on the North American continent. ', 1);
    INSERT INTO data(fact, continent_id) VALUES('The the worlds largest island Greenland is located on the North American continent. Greenland, however, belongs to Denmark, a country in Europe. Greenland is also known for the northernmost place in the world!', 1);
    INSERT INTO data(fact, continent_id) VALUES('About 580 million people live on the North American continent. North America is home to the largest Christian population in the world. Almost 80% of the people in Canada, the USA and Mexico consider themselves as Christians. ', 1);
    INSERT INTO data(fact, continent_id) VALUES('The Maya civilisation of Central America and Mexico is considered one of the oldest civilisations of this planet.', 1);
    INSERT INTO data(fact, continent_id) VALUES('North America has the largest number of people who speak English either as their first language (231 million people) or as their second language fluently. English, however, is spoken by people in more than 100 countries worldwide.', 1);
    INSERT INTO data(fact, continent_id) VALUES('Europe is considered to be the wealthiest and richest continent, however, there are poor regions especially in the eastern parts of the continent too! ', 4);
    INSERT INTO data(fact, continent_id) VALUES('Europe houses the two smallest countries in the world: Vatican City which is located inside Rome/Italy. Monaco which is bordered on three sides by France. ', 4);
    INSERT INTO data(fact, continent_id) VALUES('According to the United Nations, there are 44 countries in Europe. Five European countries are among the ten smallest countries in the world: San Marino, Liechtenstein, Vatican City, Monaco and the island country of Malta. The other five tiny countries of our planet are located on islands outside Europe. ', 4);
    INSERT INTO data(fact, continent_id) VALUES('South America is a continent of many natural superlatives: the longest mountain range - the Andes, the highest waterfalls - the Angel Falls, and the driest place on earth - the Atacama Desert in Chile. About 430 million people live in South America.', 2);
    INSERT INTO data(fact, continent_id) VALUES('Antarctica is the smallest continent by population numbers. This means the huge continent is only sparsely populated. On Antarctica there are only research stations for scientists and no permanent settlements. Antarctica is covered almost completely by ice. 90% of the planets ice is located on this continent, which also makes up 60% - 70% of the worlds freshwater supply. ', 7);
  `;
  await client.query(SQL);
};

module.exports = { syncAndSeed, client };
