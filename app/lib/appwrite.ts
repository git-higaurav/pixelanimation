// lib/appwrite.ts
import { Client, Account } from 'appwrite';

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6807aeef000a45a7243c")

export const account = new Account(client);
export default client;
