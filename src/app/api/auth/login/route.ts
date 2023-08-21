import { connect } from "@/database/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema, registerSchema } from "@/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import JSONAPIErrorReporter from "@/validator/ErrorReporter";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validator = vine.compile(loginSchema);
    validator.errorReporter = () => new JSONAPIErrorReporter();
    const { email, password } = body;

    if (!email || !password)
      return NextResponse.json(
        {
          errors: {
            email: "Please Enter your email id.",
            password: "Please enter your password",
          },
        },
        { status: 400 }
      );

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return NextResponse.json(
        {
          msg: "Invalid Credentials",
          errors: {
            email: "No User found in our system with above email.",
          },
        },
        { status: 404 }
      );

    const isPasswordCorrect: boolean = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          msg: "Invalid Credentials",
          errors: {
            password: "Please check your credentials.",
          },
        },
        { status: 404 }
      );
    }
    // const token:string = user.createJWT();
    return NextResponse.json(
      { msg: "Sigin Succed", user: { email: user.email, name: user.name } },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json({ error }, { status: 400 });
    }
  }
}
