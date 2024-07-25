import faker from 'faker';
import seedrandom from 'seedrandom';

// Configure Faker with the seed
const configureFaker = (seed) => {
  const numericSeed = Number(seed);
  if (isNaN(numericSeed)) {
    throw new Error('Seed must be a numeric value');
  }
  seedrandom(numericSeed.toString(), { global: true });
  faker.seed(numericSeed);
};

// Generate random data
const generateRandomData = (region, seed, errorCount, existingData = []) => {
  configureFaker(seed);

  // Locale map by region
  const locales = {
    'US': 'en_US',
    'PL': 'pl',
    'GE': 'en' 
  };

  // Assign locale
  const locale = locales[region] || 'en_US';
  faker.locale = locale;

  const data = [];
  const existingIds = new Set(existingData.map(item => item.id));
  const batchSize = 20; 

  // Generate data in batches to avoid excessive data creation at once
  while (data.length < batchSize) {
    let record;
    do {
      record = {
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}`,
        phone: faker.phone.phoneNumber(),
      };

      // Apply random errors to record fields
      for (let j = 0; j < errorCount; j++) {
        const fields = Object.keys(record);
        const randomField = fields[Math.floor(Math.random() * fields.length)];
        record[randomField] = 'ERROR';
      }
    } while (existingIds.has(record.id));

    existingIds.add(record.id);
    data.push(record);
  }

  return data;
};

export default generateRandomData;
