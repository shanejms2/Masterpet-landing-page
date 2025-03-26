import { getDistance } from "@/utils/g_places";
import { createAdminClient } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        console.log("Called Distance API");
        const searchParams = request.nextUrl.searchParams;
        const origin = searchParams.get('origin');
        const destination = searchParams.get('destination');
        if (!origin || !destination) {
            return NextResponse.json({ message: "Missing origin or destination" }, { status: 400 });
        }
        const supabase = createAdminClient();
        const storedInfo = await supabase
            .from('distance_records')
            .select('*')
            .contains('source:jsonb', JSON.stringify({ lat: parseFloat(origin.split(",")[0]), lng: parseFloat(origin.split(",")[1]) }))
            .contains('destination:jsonb', JSON.stringify({ lat: parseFloat(destination.split(",")[0]), lng: parseFloat(destination.split(",")[1]) }))
            .gte('updated_at', new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString());

        if (storedInfo.error) {
            console.error(storedInfo.error.message);
        }

        if (storedInfo.data && storedInfo.data.length > 0) {
            console.log("Found stored info");
            return NextResponse.json({ data: storedInfo.data[0]?.address_info, message: "Success" });
        }

        const distanceInfo = await getDistance({ origin: { lat: parseFloat(origin.split(",")[0]), lng: parseFloat(origin.split(",")[1]) }, destination: { lat: parseFloat(destination.split(",")[0]), lng: parseFloat(destination.split(",")[1]) } });
        const updateInfo = await supabase.from('distance_records').insert([
            {
                source: { lat: parseFloat(origin.split(",")[0]), lng: parseFloat(origin.split(",")[1]) },
                destination: { lat: parseFloat(destination.split(",")[0]), lng: parseFloat(destination.split(",")[1]) },
                address_info: distanceInfo,
                updated_at: new Date().toISOString(),
            },
        ]);
        if (updateInfo.error)
            console.error(updateInfo?.error.message);

        return NextResponse.json({ data: distanceInfo, message: "Success" });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ data: [], message: e }, { status: 500 });
    }
}