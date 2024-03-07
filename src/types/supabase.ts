export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      domains: {
        Row: {
          created_at: string
          icon: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          about_me: string | null
          created_at: string
          email: string | null
          github: string | null
          id: number
          inro: string | null
          linkedin: string | null
          name: string | null
          profile_picture: string | null
        }
        Insert: {
          about_me?: string | null
          created_at?: string
          email?: string | null
          github?: string | null
          id?: number
          inro?: string | null
          linkedin?: string | null
          name?: string | null
          profile_picture?: string | null
        }
        Update: {
          about_me?: string | null
          created_at?: string
          email?: string | null
          github?: string | null
          id?: number
          inro?: string | null
          linkedin?: string | null
          name?: string | null
          profile_picture?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          aproach: string | null
          banner_url: string | null
          created_at: string
          domains: string[] | null
          github: string | null
          id: number
          images: string[] | null
          long_description: string | null
          non_technical_contributions: string[] | null
          personal: boolean | null
          short_description: string | null
          techical_contributions: string[] | null
          title: string | null
          tools_technologies: string[] | null
        }
        Insert: {
          aproach?: string | null
          banner_url?: string | null
          created_at?: string
          domains?: string[] | null
          github?: string | null
          id?: number
          images?: string[] | null
          long_description?: string | null
          non_technical_contributions?: string[] | null
          personal?: boolean | null
          short_description?: string | null
          techical_contributions?: string[] | null
          title?: string | null
          tools_technologies?: string[] | null
        }
        Update: {
          aproach?: string | null
          banner_url?: string | null
          created_at?: string
          domains?: string[] | null
          github?: string | null
          id?: number
          images?: string[] | null
          long_description?: string | null
          non_technical_contributions?: string[] | null
          personal?: boolean | null
          short_description?: string | null
          techical_contributions?: string[] | null
          title?: string | null
          tools_technologies?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
