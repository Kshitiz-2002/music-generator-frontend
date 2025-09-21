"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "ff720f35-e783-4fd5-90e1-541f74a01b7b",
        "952b12d7-2774-4b44-82db-eeb211a6be73",
        "991ff213-f5dc-4e2b-afec-6d10f5411231",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}