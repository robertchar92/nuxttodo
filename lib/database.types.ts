export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          id: number
          user_id: string
          name: string
          description: string
          status: string
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: number
          user_id: string
          name: string
          description: string
          status: string
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: number
          user_id?: string
          name?: string
          description?: string
          status?: string
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      todo_lists: {
        Row: {
          user_id: string
          id: number
          task_id: number
          content: string
          is_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          id?: number
          task_id: number
          content: string
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          id?: number
          task_id?: number
          content?: string
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
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
  }
}

