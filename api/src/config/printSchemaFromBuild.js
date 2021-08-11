import { printSchema } from 'graphql';
import fs from 'fs';

const printSchemaFromBuild = schema => {
  fs.writeFile('../../schema.graphql', printSchema(schema), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('Schema generated');
  });
};

export default printSchemaFromBuild;