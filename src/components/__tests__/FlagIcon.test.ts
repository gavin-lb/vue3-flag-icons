import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FlagIcon from '../FlagIcon.vue'
import { getCountryName, isValidCountryCode, getAllCountryCodes } from '../../utils'

describe('FlagIcon', () => {
  it('renders a flag icon with default props', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us'
      }
    })
    expect(wrapper.classes()).toContain('fi')
    expect(wrapper.classes()).toContain('fi-us')
    expect(wrapper.attributes('title')).toBe('United States')
  })

  it('applies size prop', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us',
        size: 32
      }
    })
    expect(wrapper.attributes('style')).toContain('font-size: 32px')
  })

  it('applies square prop', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us',
        square: true
      }
    })
    expect(wrapper.classes()).toContain('fis')
  })

  it('applies circle prop', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us',
        circle: true
      }
    })
    expect(wrapper.classes()).toContain('fis')
    expect(wrapper.classes()).toContain('round')
  })

  it('uses custom title', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us',
        title: 'Custom Title'
      }
    })
    expect(wrapper.attributes('title')).toBe('Custom Title')
  })

  it('uses function title', () => {
    const wrapper = mount(FlagIcon, {
      props: {
        code: 'us',
        title: (country: string) => `Flag of ${country}`
      }
    })
    expect(wrapper.attributes('title')).toBe('Flag of United States')
  })
})

describe('Utils', () => {
  it('getCountryName returns correct name', () => {
    expect(getCountryName('us')).toBe('United States')
    expect(getCountryName('US')).toBe('United States')
    expect(getCountryName('invalid')).toBe('Unknown')
  })

  it('isValidCountryCode checks validity', () => {
    expect(isValidCountryCode('us')).toBe(true)
    expect(isValidCountryCode('US')).toBe(true)
    expect(isValidCountryCode('invalid')).toBe(false)
  })

  it('getAllCountryCodes returns array', () => {
    const codes = getAllCountryCodes()
    expect(Array.isArray(codes)).toBe(true)
    expect(codes).toContain('us')
    expect(codes.length).toBeGreaterThan(200)
  })
})