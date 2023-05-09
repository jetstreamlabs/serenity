import { ref, onMounted } from 'vue'

export function useClientOnly() {
  const isClient = ref(false)

  onMounted(() => {
    if (typeof window !== 'undefined') {
      isClient.value = true
    }
  })

  return {
    isClient
  }
}
