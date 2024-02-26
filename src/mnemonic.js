import { writeFileSync } from 'fs';
import { Mnemonic } from "@multiversx/sdk-wallet";

const generate = (filePath) => {
  const phrase = Mnemonic.generate();

  if ( filePath ) {
    writeFileSync(filePath, phrase.toString());
    return;
  }

  console.log(phrase.toString());
};

export default generate;
