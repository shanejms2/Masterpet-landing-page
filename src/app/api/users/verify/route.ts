import { createAdminClient } from "@/utils/supabase";
import { isAdmin } from "@/utils/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const user = searchParams.get('token');
        if (!user) {
            return new NextResponse(JSON.stringify({ "message": "Token not available" }), {
                status: 400
            });
        }

        const supabase = await createAdminClient();
        const { data, error } = await supabase.from('users').select("user_id").eq('user_id', user).single();

        if (error || !data) {
            return new NextResponse(JSON.stringify({ "message": "No account found", data, error }), {
                status: 404
            });
        }

        if (!(await isAdmin(user))) {
            return new NextResponse(JSON.stringify({ "message": "Unauthorized" }), {
                status: 401
            });
        }
        return new NextResponse(JSON.stringify({
            "message": "User fetched successfully", data: {
                id: data.user_id
            }
        }), {
            status: 200
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ "error": error }), {
            status: 500
        });
    }
}