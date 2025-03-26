/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Place } from "../type";
import axios from "axios";
export const getPlaceDetailsByID = async (
    placeID: string
): Promise<Place | undefined> => {
    try {
        if (placeID === "") {
            return;
        }
        const url: string = `https://places.googleapis.com/v1/places/${placeID}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.MAP_J,
                "X-Goog-FieldMask":
                    "id,name,addressComponents,adrFormatAddress,displayName,formattedAddress,location,primaryType,primaryTypeDisplayName,userRatingCount,websiteUri,rating",
            },
        });
        if (response.status === 200) {
            return response.data as Place;
        }
    } catch (e) {
        console.error("Error in fetching place details", e);
    }
};


export const getAutoComplete = async ({
    query,
}: {
    query: string;
}) => {
    try {
        if (query === "") {
            return;
        }
        const url: string = "https://places.googleapis.com/v1/places:autocomplete";
        const body = {
            input: query,
            includeQueryPredictions: true,
            includedRegionCodes: ['in']
        };

        const response = await axios.post(url, JSON.stringify(body), {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.MAP_J,
                "X-Goog-FieldMask": "*"
            },
        });

        if (response.status === 200) {
            return response.data?.suggestions?.map((e: any) => {
                return {
                    id: e.placePrediction?.placeId,
                    formattedName: e.placePrediction?.text?.text,
                    name: e.placePrediction?.structuredFormat?.mainText?.text,
                    address: e.placePrediction?.structuredFormat?.secondaryText?.text,
                    from: "google",
                };
            });
        }
    } catch (e) {
        console.error("Error in autocomplete", e);
    }
    return [];
};


export const searchText = async ({
    query,
    region
}: {
    query: string;
    region?: string;
}): Promise<Place[]> => {
    try {
        if (query === "") {
            return [];
        }
        const url: string = "https://places.googleapis.com/v1/places:searchText";
        const body = {
            textQuery: query,
            pageSize: 20
        };
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.MAP_J,
                "X-Goog-FieldMask":
                    "places.id,places.name,places.adrFormatAddress,places.displayName,places.formattedAddress,places.location,places.primaryType,places.primaryTypeDisplayName,places.currentOpeningHours,places.userRatingCount,places.websiteUri,places.rating,places.addressComponents,nextPageToken",
            },
        });

        if (response.status === 200) {
            if (region) {
                const places = response.data["places"];
                const sortedPlaces = places.sort((a: any, b: any) => {
                    const aContainsRegion = containsRegion(a.addressComponents, region);
                    const bContainsRegion = containsRegion(b.addressComponents, region);

                    // Prioritize the object where the country matches the region
                    if (aContainsRegion && !bContainsRegion) {
                        return -1;
                    } else if (!aContainsRegion && bContainsRegion) {
                        return 1;
                    } else {
                        return 0; // Keep the original order if both or neither match
                    }
                });
                return sortedPlaces;
            }
            return response.data["places"];
        }
    } catch (e) {
        console.error("Error in searchText");
    }
    return [];
};

function containsRegion(addressComponents: any[], region: string) {
    return addressComponents.some(
        (component) =>
            component.types.includes("country") && component.shortText === region
    );
}

export const getDistance = async ({
    origin: { lat: originLat, lng: originLng },
    destination: { lat: destinationLat, lng: destinationLng },
}: {
    origin: { lat: number; lng: number };
    destination: { lat: number; lng: number };
}): Promise<{ distance: number, duration: number, originAddress: string, destinationAddress: string } | null> => {
    try {
        if (!originLat || !originLng || !destinationLat || !destinationLng) {
            return null;
        }
        const url: string = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${process.env.MAP_J}&origins=${originLat},${originLng}&destinations=${destinationLat},${destinationLng}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            if (response.data.rows.length === 0 || response.data.rows[0].elements.length === 0) {
                return null;
            }
            return {
                distance: response.data.rows[0].elements[0].distance.value,
                duration: response.data.rows[0].elements[0].duration.value,
                originAddress: response.data.origin_addresses[0],
                destinationAddress: response.data.destination_addresses[0],
            };
        }
    } catch (e) {
        console.error("Error in searchText");
    }
    return null;
};