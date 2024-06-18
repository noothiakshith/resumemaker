"use server"
import { db } from "@/utils";
import { resumeTable } from "@/utils/schema";

export async function createResume(data: any) {
  try {
    const result = await db.insert(resumeTable).values(data);
    return result;
  } catch (err) {
    console.error("Error creating resume:", err);
    throw err; // Rethrow the error to propagate it further if necessary
  }
}

export async function getResume(){
  try{
    const result = await db.select().from(resumeTable);
    return result;
  }
  catch(err){
    console.log("Error getting resume:", err);
  }
}