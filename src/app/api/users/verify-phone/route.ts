import { createAdminClient } from "@/utils/supabase";
import { isAdmin } from "@/utils/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { phone } = await req.json();
        if (!phone) {
            return new NextResponse(JSON.stringify({ "message": "Phone not available" }), {
                status: 400
            });
        }

        const supabase = await createAdminClient();
        const { data, error } = await supabase.from('users').select("user_id").eq('phone', `91${phone}`).maybeSingle();

        if (error || !data) {
            return new NextResponse(JSON.stringify({ "message": "No account found", data, error }), {
                status: 404
            });
        }

        if (!(await isAdmin(data.user_id))) {
            return new NextResponse(JSON.stringify({ "message": "Unauthorized" }), {
                status: 401
            });
        }
        const phoneNumber = '+91' + phone;
        const { data: otpData, error: otpError } = await supabase.auth.signInWithOtp({
            phone: phoneNumber,
            options: {
                channel: "sms",
                shouldCreateUser: false
            }
        });

        if (otpError) {
            return new NextResponse(JSON.stringify({ "message": "Error", error: otpError.message }), {
                status: 500
            });
        }
        return new NextResponse(JSON.stringify({
            "message": "User verified successfully",
            data: otpData
        }), {
            status: 200
        });
    } catch (error) {
        console.error("Error in verifying phone", error);
        return new NextResponse(JSON.stringify({ "error": error }), {
            status: 500
        });
    }
}