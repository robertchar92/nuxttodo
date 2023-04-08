alter table "public"."todo_lists" add column "user_id" uuid not null;

alter table "public"."todo_lists" add constraint "todo_lists_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."todo_lists" validate constraint "todo_lists_user_id_fkey";

create policy "Enable all access for users based on user_id"
on "public"."tasks"
as permissive
for all
to public
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));


create policy "select based on users based on user_id and not deleted"
on "public"."tasks"
as permissive
for select
to public
using (((auth.uid() = user_id) AND (deleted_at IS NULL)));



