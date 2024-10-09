import { Client } from "appwrite";
import { Databases } from "node-appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fd757200140d617b64");

export const databases = new Databases(client);