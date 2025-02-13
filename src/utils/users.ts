import { createAdminClient } from "./supabase";

export const isAdmin = async (user: string) => {
    const supabase = await createAdminClient();
    const { data, error } = await supabase.from('roles').select("*").eq('user_id', user).ilike('role', '%ADMIN%').single();
    if (error || !data) {
        return false;
    }

    return true;
};