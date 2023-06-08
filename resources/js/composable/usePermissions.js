import { usePage } from '@inertiajs/vue3'

export function usePermissions() {
  const hasRole = name => usePage().props.user.roles.includes(name)
  const hasPermission = name => usePage().props.user.permissions.includes(name)

  return {
    hasRole,
    hasPermission
  }
}
