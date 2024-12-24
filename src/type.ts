export interface ActionResponse<T> {
    data: T | null,
    error: {
        message: string,
        status: number
    } | null
}

export interface Place {
    name: string
    id: string
    formattedAddress: string
    location: Location
    rating: number
    regularOpeningHours: RegularOpeningHours
    adrFormatAddress: string
    userRatingCount: number
    displayName: DisplayName
    primaryTypeDisplayName: PrimaryTypeDisplayName
    currentOpeningHours: CurrentOpeningHours
    primaryType: string
}

export interface Location {
    latitude: number
    longitude: number
}

export interface RegularOpeningHours {
    openNow: boolean
    periods: Period[]
    weekdayDescriptions: string[]
}

export interface Period {
    open: Open
    close: Close
}

export interface Open {
    day: number
    hour: number
    minute: number
}

export interface Close {
    day: number
    hour: number
    minute: number
}

export interface DisplayName {
    text: string
    languageCode: string
}

export interface PrimaryTypeDisplayName {
    text: string
    languageCode: string
}

export interface CurrentOpeningHours {
    openNow: boolean
    periods: Period2[]
    weekdayDescriptions: string[]
}

export interface Period2 {
    open: Open2
    close: Close2
}

export interface Open2 {
    day: number
    hour: number
    minute: number
    date: Date
}

export interface Date {
    year: number
    month: number
    day: number
}

export interface Close2 {
    day: number
    hour: number
    minute: number
    date: Date2
}

export interface Date2 {
    year: number
    month: number
    day: number
}