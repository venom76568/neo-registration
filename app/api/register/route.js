import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user"; // Make sure to import the User model
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullName, className, schoolName, city, email, phoneNumber, whatsappNumber } = await request.json();

  try {
    await connectMongoDB();
    
    // Check if the email already exists in the database.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 });
    }

    // Create a new user and save it to the database.
    const newUser = new User({ fullName, className, schoolName, city, email, phoneNumber, whatsappNumber });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


