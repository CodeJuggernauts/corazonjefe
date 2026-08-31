import { BrevoClient } from "@getbrevo/brevo";

const createContact = async (email) => {
  const client = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  });
  await client.contacts.createContact({ email, listIds: [2] });
};

export default createContact;
