import fs from 'fs';

const getObjectManifest = () => {
  try {
    return JSON.parse(
      fs.readFileSync(__dirname + '/../public/build/manifest.json').toString()
    );
  } catch (error) {
    console.log(error);
  }
};

const getManifest = (template: string) => {
  return getObjectManifest()[template];
};

export default getManifest;
