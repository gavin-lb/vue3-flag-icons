# vue3-flag-icons [![npm](https://img.shields.io/npm/v/vue3-flag-icons)](https://www.npmjs.com/package/vue3-flag-icons)

A TypeScript-compatible Vue3 component library for providing flag icons.

## Install

```
npm install vue3-flag-icons
```

## Usage

Firstly, you need to import the CSS. It is recommended that you do this at the app level, for example while creating and mounting your app:

> `main.ts`:

<pre>
import App from '@/App.vue'
import { createApp } from 'vue'
<b>import 'vue3-flag-icons/styles'</b>  // <-- importing the css

createApp(App).mount('#app')
</pre>

but you could also just import the CSS whenever you import the component.

To use the component, just import it and use it:

> `App.vue`:

```
<script setup lang="ts">
import FlagIcon from 'vue3-flag-icons'
</script>

<template>
  <FlagIcon code="gr" />
  <FlagIcon code="gb" :size="25" square />
  <FlagIcon code="us" size="32" circle />
  <FlagIcon code="fr" title="A flag icon" />
  <FlagIcon code="es" :title="(country) => `Country: ${country}`" />
</template>
```

<sub>(Note: the component is the default export so you can name it however you want. Here we have used `FlagIcon`, but you could just as easily use `Flag` or `CountryFlag` or whatever you want - just be consistent with your naming for code clarity.)</sup>

## Utilities

The library also provides utility functions:

- `getCountryName(code)`: Returns the English name of the country for the given code, or 'Unknown' if invalid.
- `isValidCountryCode(code)`: Checks if the provided code corresponds to a valid country flag.
- `getAllCountryCodes()`: Returns an array of all available country codes.

```typescript
import { getCountryName, isValidCountryCode, getAllCountryCodes } from 'vue3-flag-icons'

console.log(getCountryName('us')) // 'United States'
console.log(isValidCountryCode('us')) // true
console.log(getAllCountryCodes()) // ['ad', 'ae', ...]
```

## Nuxt 3 Usage

In Nuxt 3, add the CSS to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  css: ['vue3-flag-icons/styles']
})
```

Then, use the component in your pages or components:

```vue
<script setup lang="ts">
import FlagIcon from 'vue3-flag-icons'
</script>

<template>
  <FlagIcon code="us" />
</template>
```

The component is SSR-compatible.

## Props

The component takes the following props:

- `code: CountryCode`: the country code string, either lower or upper case, as available in the [`flag-icons`](https://github.com/lipis/flag-icons) package (a superset of the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes).
- `size?: string | number`: the size (height) in px for the flag, defaults to the current `font-size`.
- `square?: boolean`: if true the flag will be rendered as a 1x1 square, otherwise it will be rendered as a 4x3.
- `circle?: boolean`: if true the flag will be rendered as a circle.
- `title?: string | ((country: string) => string)`: the mouseover tooltip of the icon, defaults to the name of the country.

## Credits

- Inspired by [`vue-flag-icon`](https://github.com/vikkio88/vue-flag-icon/), a similar non-TypeScript-compatible Vue2 project.

- Uses the [`flag-icons`](https://github.com/lipis/flag-icons) package for all the flags.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.
