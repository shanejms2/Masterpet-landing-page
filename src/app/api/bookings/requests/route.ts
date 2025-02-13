import { createAdminClient } from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const requestData = await req.json();
        const { userInfo, address, pricingInfo, packageInfo, addOns, preferredDates, petInfo, serviceType } = requestData;
        ///return when required fields are missing
        if (!userInfo || !address || !pricingInfo || !packageInfo || !addOns || !preferredDates || !petInfo) {
            return new NextResponse(JSON.stringify({ "message": "Missing required fields" }), { status: 400 });
        }
        const supabase = await createAdminClient();
        const { data, error } = await supabase.from('booking_requests').select("*").match({
            "user": userInfo.id,
            "status": "pending"
        });
        ///Return when there is an error
        if (error) {
            return new NextResponse(JSON.stringify({ "error": error?.message }), { status: 500 });
        }
        ///Return if there is pending booking request
        if (data?.length !== 0) {
            return new NextResponse(JSON.stringify({
                "code": "booking_exists",
                "message": "You already have a booking request. Please wait while we review it"
            }), { status: 400 });
        }

        const { data: reqData, error: reqError } = await supabase.from('booking_requests').insert({
            "user": userInfo.id,
            "user_info": userInfo,
            "address": address.id,
            "address_info": address,
            "type": serviceType,
            "package": packageInfo.id,
            "package_info": {
                ...packageInfo,
                "pricing": pricingInfo,
                "add_ons": addOns
            },
            "pet": petInfo.id,
            "pet_info": petInfo,
            "status": "pending",
            "preferred_dates": preferredDates,
        }).select("*");

        if (reqError) {
            return new NextResponse(JSON.stringify({ "error": reqError?.message }), { status: 500 });
        }

        return new NextResponse(JSON.stringify({ "message": "Request raised successfully", data: reqData }), { status: 200 });

    } catch (error) {
        return new NextResponse(JSON.stringify({ "error": error }), { status: 500 });
    }
}