import { timestamp } from "drizzle-orm/pg-core";
import { PgTable, pgTable, serial, text } from "drizzle-orm/pg-core";

export const $notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  imageUrl: text("imageUrl"),
  userId: text("user_id").notNull(),
  editorState: text("editor_state").notNull(),
});

export type NoteType = typeof $notes.$inferInsert;

//drizzle-orm is used is used to interact with the db
//drizzle-kit is used to inspect
