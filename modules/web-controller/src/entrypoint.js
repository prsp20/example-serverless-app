import { createUser } from './service/UserService';
import { coreFunction } from 'core';

export const handler = (event, context, callback) => {
  coreFunction();
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(createUser('Prakash'))
  });
};
