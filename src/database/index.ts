import { getConnectionOptions, createConnection } from 'typeorm';

interface Options {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as Options;
  newOptions.host = 'localhost';
  createConnection({
    ...options,
  });
});
