import { BrevoClient } from "@getbrevo/brevo";

const createContact = async (request) => {
  try {
    const { email } = await request.json();

    const client = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY,
    });

    await client.contacts.createContact({
      email,
      listIds: [2],
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

export default createContact;
