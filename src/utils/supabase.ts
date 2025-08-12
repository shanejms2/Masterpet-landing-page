import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js';
export async function createAnonClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )
}

export function createAdminClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceRoleSecret = process.env.SUPABASE_SERVICE_ROLE_SECRET!;

    return createClient(supabaseUrl, serviceRoleSecret, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        },
    });
}

// Utility function to upload files with proper cache headers
export async function uploadFileWithCache(
    bucketName: string,
    filePath: string,
    file: Buffer | File,
    options: {
        contentType?: string;
        cacheControl?: string;
        upsert?: boolean;
    } = {}
) {
    const supabase = createAdminClient();
    
    const defaultCacheControl = 'public, max-age=31536000, immutable'; // 1 year cache
    
    const uploadOptions = {
        contentType: options.contentType,
        upsert: options.upsert ?? true,
        cacheControl: options.cacheControl ?? defaultCacheControl,
    };

    const { data, error } = await supabase
        .storage
        .from(bucketName)
        .upload(filePath, file, uploadOptions);

    if (error) {
        throw error;
    }

    return data;
}

// Function to update cache headers for existing files
export async function updateFileCacheHeaders(
    bucketName: string,
    filePath: string,
    cacheControl: string = 'public, max-age=31536000, immutable'
) {
    // Note: Supabase doesn't directly support updating cache headers via API
    // This would need to be done through Supabase Dashboard or CLI
    // For now, we'll return a message about manual configuration
    
    console.warn(`Cache headers for ${bucketName}/${filePath} need to be configured manually in Supabase Dashboard`);
    
    return {
        message: 'Cache headers need to be configured manually in Supabase Dashboard',
        recommendedCacheControl: cacheControl
    };
}