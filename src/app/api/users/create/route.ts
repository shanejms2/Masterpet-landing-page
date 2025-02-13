import { createAdminClient } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { first_name, last_name, phone, dob, type, behaviour, source, meal_type } = await req.json();
        if (!first_name || !phone || !dob) {
            return new NextResponse(JSON.stringify({ "message": "Missing required fields" }), {
                status: 400
            });
        }

        const supabase = await createAdminClient();
        const { data: newUserData, error: newUserError } = await supabase.auth.admin.createUser({
            phone: phone,
            phone_confirm: true,
            user_metadata: {
                "full_name": first_name + " " + (last_name ?? "")
            }
        });
        if (newUserError) {
            return new NextResponse(JSON.stringify({ "message": "Unable to add user", error: newUserError.message }), {
                status: 500
            });
        }

        const { data, error } = await supabase.from('users').insert({
            user_id: newUserData.user.id,
            first_name,
            last_name,
            dob,
            phone,
            type,
            behaviour,
            referral_source: source,
            pet_meal_info: meal_type
        }).select("*");

        if (error || !data) {
            return new NextResponse(JSON.stringify({ "message": "Failed to update", data, error: error?.message }), {
                status: 500
            });
        }

        return new NextResponse(JSON.stringify({
            "message": "User fetched successfully", data: {
                id: data[0].user_id
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