<script lang="ts">
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  defineComponent,
  HTMLAttributes,
  LabelHTMLAttributes,
  useAttrs,
} from 'vue'
import { ValueOf, PropsWithType } from '../../types'
import { toAttrsWithoutProps } from '../../utils/toAttrsWithoutProps'

const tagNames = {
  A: 'a',
  BUTTON: 'button',
  LABEL: 'label',
  SPAN: 'span',
} as const

type TagNamesType = ValueOf<typeof tagNames>

type BaseProps = {
  tagName: TagNamesType
  theme?: 'filled' | 'border'
  disabled?: boolean
  htmlType?: ButtonHTMLAttributes['type']
}

type ATagProps = PropsWithType<
  ButtonHTMLAttributes | LabelHTMLAttributes,
  never | undefined
> &
  AnchorHTMLAttributes &
  BaseProps & {
    tagName: typeof tagNames['A']
    htmlType?: never
  }

type ButtonTagProps = PropsWithType<
  AnchorHTMLAttributes | LabelHTMLAttributes,
  never | undefined
> &
  Omit<ButtonHTMLAttributes, 'disabled'> &
  BaseProps & {
    tagName: typeof tagNames['BUTTON']
    htmlType?: ButtonHTMLAttributes['type']
  }

type LabelTagProps = PropsWithType<
  AnchorHTMLAttributes | ButtonHTMLAttributes,
  never | undefined
> &
  LabelHTMLAttributes &
  BaseProps & {
    tagName: typeof tagNames['LABEL']
  }

type SpanTagProps = Omit<
  PropsWithType<
    AnchorHTMLAttributes | ButtonHTMLAttributes | LabelHTMLAttributes,
    never | undefined
  >,
  'onClick'
> &
  HTMLAttributes &
  BaseProps & {
    tagName: typeof tagNames['SPAN']
    htmlType?: never
  }

type Props<T extends TagNamesType> = T extends typeof tagNames['A']
  ? ATagProps
  : T extends typeof tagNames['BUTTON']
  ? ButtonTagProps
  : T extends typeof tagNames['LABEL']
  ? LabelTagProps
  : T extends typeof tagNames['SPAN']
  ? SpanTagProps
  : never

type DefineComponentType = new <T extends TagNamesType>(props: Props<T>) => {
  $props: Props<T>
  $emit: {}
}

export default defineComponent({
  inheritAttrs: false,
}) as DefineComponentType
</script>

<script lang="ts" setup>
interface LocalProps {
  tagName: BaseProps['tagName']
  theme?: BaseProps['theme']
  disabled?: BaseProps['disabled']
  htmlType?: BaseProps['htmlType']
}

const props = withDefaults(defineProps<LocalProps>(), {
  theme: 'filled',
  disabled: undefined,
  htmlType: 'button',
})

const attrs = useAttrs()

const customizedAttrs = toAttrsWithoutProps(attrs, props)
</script>

<template>
  <component
    :is="props.tagName"
    v-bind="customizedAttrs"
    :class="[
      'button',
      `button--${props.theme}`,
      props.tagName !== tagNames.BUTTON && props.disabled && 'button--disabled',
      attrs.class,
    ]"
    :disabled="props.tagName === tagNames.BUTTON ? props.disabled : undefined"
    :type="props.tagName === tagNames.BUTTON ? props.htmlType : undefined"
  >
    <span v-if="$slots.default" class="button__inner">
      <slot />
    </span>
  </component>
</template>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  .button__inner {
    flex-shrink: 1;
  }

  &.button--border {
    padding: 7px 15px;
    border: 1px solid #222;
    background-color: #fff;
    color: inherit;
  }

  &:hover {
    background-color: #000;

    &.button--border {
      background-color: #f0f0f0;
    }
  }

  &.button--disabled,
  &:disabled {
    border-color: #ccc;
    background-color: #ccc;
    color: #fff;
    cursor: default;

    &:hover {
      border-color: #ccc;
      background-color: #ccc;
      color: #fff;
    }
  }
}
</style>
