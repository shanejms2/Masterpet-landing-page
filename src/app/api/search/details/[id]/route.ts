import { getPlaceDetailsByID } from "@/utils/g_places";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = (await params).id;
        if (!id) {
            return NextResponse.json({ data: [], message: "ID not available" }, { status: 400 });
        }
        const response = await getPlaceDetailsByID(id);

        return NextResponse.json({ data: response }, { status: 200 });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ data: [], message: e }, { status: 500 });
    }
}