import { db } from "@/utils";
import {resumeTable} from "@/utils/schema";

export async function createResume(data:any){
    try{
        const result = await db.insert(resumeTable).values(data).execute();
        return result;
    }
    catch(err){
        console.log(err);
    }
}