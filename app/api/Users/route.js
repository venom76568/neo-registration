// pages/api/users.js
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user"; // Make sure to import the User model
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    // Fetch all users from the database
    const users = await User.find({});

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error during fetching users:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
