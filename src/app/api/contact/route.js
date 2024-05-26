// Import necessary dependencies and utilities
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Define the POST method for submitting contact information
export const POST = async (req) => {
  try {
    // Check authentication session
    const session = await getAuthSession();
    if (!session) {
      return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }, { status: 401 }));
    }

    // Parse request body to get contact information
    const body = await req.json();
    console.log(body)

    // Create contact in the database
    const contact = await prisma.contact.create({
      data: { ...body, email: session.user.email },
    });

    // Return success response with created contact
    return new NextResponse(JSON.stringify(contact, { status: 201 }));
  } catch (err) {
    // Handle errors
    console.error('Error creating contact:', err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }));
  }
};
