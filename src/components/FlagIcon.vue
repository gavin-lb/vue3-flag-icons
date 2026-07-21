<script setup lang="ts">
import type { CountryCode } from '@/types'
import { getCountryName } from '@/utils'

const props = defineProps<{
  code: CountryCode
  size?: string | number
  square?: boolean
  circle?: boolean
  title?: string | ((country: string) => string)
}>()

const country: string = getCountryName(props.code)

const computedTitle: string =
  props.title instanceof Function ? props.title(country) : props.title || country
</script>

<template>
  <span
    class="fi"
    :class="[square || circle ? 'fis' : '', `fi-${code.toLowerCase()}`, circle ? 'round' : '']"
    :style="size ? `font-size:${size}px` : undefined"
    :title="computedTitle"
    :aria-label="computedTitle"
    role="img"
  />
</template>

<style scoped>
@import 'flag-icons/css/flag-icons.min.css';

.round {
  border-radius: 50%;
}
</style>
