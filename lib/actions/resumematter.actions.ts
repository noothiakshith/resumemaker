// Example using Node.js with Express framework
// Assume db connection and schema are set up in a separate file (not shown here)

import { db } from "@/utils";
import { resumeMatter } from "@/utils/schema";

export async function createMatter(data:any) {
  try {
    const result = await db.insert(resumeMatter).values({
      firstName: data.firstName,
      lastName: data.lastName,
      jobTitle: data.jobTitle,
      address: data.address,
      phone: data.phone,
      email: data.email,
    });

    return result;
  } catch (error) {
    console.error("Error creating matter:", error);
    throw error;
  }
}
