import { getAutoComplete } from "@/utils/g_places";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('query');
        if (!query) {
            return Response.json(
                { data: [], message: "Query not available" },
                {
                    status: 400
                });
        }
        const response = await getAutoComplete({
            query,
        });

        return NextResponse.json({ data: response }, { status: 200 });
    } catch (e) {
        console.error("Error", e);
        return NextResponse.json({ data: [], message: e }, { status: 500 });
    }
}