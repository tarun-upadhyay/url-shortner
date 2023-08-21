import { connect } from "@/database/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import JSONAPIErrorReporter from "@/validator/ErrorReporter";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    vine.errorReporter = () => new JSONAPIErrorReporter();
    const validator = vine.compile(registerSchema);
    const output = await validator.validate(body);

    try {
      const user = await User.create(output);
      return NextResponse.json(
        {
          user: { name: user.name, email: user.email },
          msg: "Succesfully signed up",
        },
        { status: 200 }
      );
    } catch (error: any) {
      if (error.code === 11000)
        return NextResponse.json(
          { msg: "You already had registerd", error },
          { status: 400 }
        );
    }

    return NextResponse.json(output, { status: 200 });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(error.messages, { status: 400 });
    }
  }
}
