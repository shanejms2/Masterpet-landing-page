import { createAdminClient } from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createAdminClient();
        
        // Simple query to test connection
        const { data, error } = await supabase.from('users').select('count').single();
        
        if (error) {
            return NextResponse.json({ 
                success: false, 
                error: error.message 
            }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true, 
            message: "Supabase connection successful",
            data 
        });
    } catch (error) {
        return NextResponse.json({ 
            success: false, 
            error: "Failed to connect to Supabase" 
        }, { status: 500 });
    }
} 