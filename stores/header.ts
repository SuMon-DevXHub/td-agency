import { defineStore } from 'pinia'

export const useHeaderStore = defineStore("header", () => {
  // state
  const isMobileMenuRef = ref<boolean>(false)
  const isShowModalRef = ref<boolean>(false)

  const isMobileMenu = computed(() => isMobileMenuRef.value)
  const isShowModal = computed(() => isShowModalRef.value)

  // actions
  const setMobileMenu = (payload: boolean) => {
    isMobileMenuRef.value = payload
  }
  const setIsShowModal = (payload: boolean) => {
    isShowModalRef.value = payload
  }
  return {
    isMobileMenu,
    setMobileMenu,
    isShowModal,
    setIsShowModal,
  }
})