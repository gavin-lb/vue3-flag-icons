import { readdir, writeFileSync } from 'fs'
import { parse } from 'node:path'

readdir('node_modules/flag-icons/flags/1x1', (err, files) => {
  if (!err) {
    const codes = files.map((file) => `'${parse(file).name}'`).join('\n  | ')
    const codeArray = files.map((file) => `'${parse(file).name}'`).join(',\n  ')
    writeFileSync(
      'src/types/CountryCode.ts',
      `export type CountryCode =\n  | ${codes}\n  | ${codes.toUpperCase()}\n\nexport const countryCodes = [\n  ${codeArray}\n] as const\n`
    )
  }
})
