import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Avatar from '../../app/components/Avatar.vue'

describe('Avatar', () => {
  it('renders the initial correctly', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'JD'
      }
    })
    expect(wrapper.text()).toContain('JD')
  })

  it('applies the primary background color class', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'JD',
        bgColor: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('bg-primary')
  })

  it('defaults to neutral background color class', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'JD'
      }
    })
    expect(wrapper.classes()).toContain('bg-neutral')
  })
})
