// import { User } from "@clerk/nextjs/server";

import { User } from "./types";

declare global {
    interface CustomJwtSessionClaims extends User {}
}