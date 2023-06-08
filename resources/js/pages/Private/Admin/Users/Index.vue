<script setup>
defineProps(['users'])
const _ = inject('_')
</script>
<template>
  <Head :title="__('Users')" />
  <AdminLayout>
    <TableCard>
      <template #title>
        {{ __('Users') }}
      </template>
      <template #button>
        <z-button color="fuchsia" size="sm">
          {{ __('Create User') }}
        </z-button>
      </template>
      <template #table>
        <Table class="font-ui" :resource="users" preventScroll="table-top">
          <template #cell(actions)="{ item: user }">
            <TableActionButtons>
              <TableButton
                link
                state
                :uri="route('admin.users.edit', { id: user.id })"
                color="primary"
                class="group-left">
                <IconOutlinePencilAlt class="h-4 w-4 text-white" />
              </TableButton>
              <TableButton
                color="error"
                class="group-right"
                @click.native="confirmUserDeletion(user)">
                <IconOutlineTrash class="h-4 w-4 text-white" />
              </TableButton>
            </TableActionButtons>
          </template>
        </Table>
      </template>
    </TableCard>
  </AdminLayout>
</template>
