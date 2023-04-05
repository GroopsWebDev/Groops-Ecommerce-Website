import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client";

export default function handlePrismaError(error) {
  if (error instanceof PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      return {
        status: 400,
        message: "Duplicate key error",
      };
    }
    if (error.code === "P2002") {
      return {
        status: 400,
        message: "Primary Key constraint failed.",
      };
    }

    return {
      status: 500,
      message: error.message,
    };
    // handle other known request errors
  } else if (error instanceof PrismaClientValidationError) {
    return {
      status: 400,
      message: "Validation Error.",
    };
  } else {
    console.error(error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
}
