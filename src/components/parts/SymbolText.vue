<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  tagName?: 'span' | 'div'
  position?: 'forward' | 'backward'
  verticalAlign?: 'top' | 'center' | 'bottom'
  spacingBetween?: number
}

const props = withDefaults(defineProps<Props>(), {
  tagName: 'div',
  position: 'forward',
  verticalAlign: 'center',
  spacingBetween: 4,
})

const styles = computed(() => ({
  '--symbol-text-spacing-between': `${props.spacingBetween}px`,
}))
</script>

<template>
  <component
    :is="tagName"
    class="symbolText"
    :class="{
      [`symbolText--${position}`]: true,
      [`symbolText--${verticalAlign}`]: true,
      'symbolText--phrasing': tagName === 'span',
    }"
    :style="styles"
  >
    <template v-if="position === 'forward'">
      <component :is="tagName" v-if="$slots.symbol" class="symbolText__item"
        ><slot name="symbol"
      /></component>
      <component :is="tagName" v-if="$slots.text" class="symbolText__item"
        ><slot name="text"
      /></component>
    </template>
    <template v-else>
      <component :is="tagName" v-if="$slots.text" class="symbolText__item"
        ><slot name="text"
      /></component>
      <component :is="tagName" v-if="$slots.symbol" class="symbolText__item"
        ><slot name="symbol"
      /></component>
    </template>
  </component>
</template>

<style lang="scss" scoped>
.symbolText {
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .symbolText__item {
    flex-grow: 1;
  }

  .symbolText__item + .symbolText__item {
    margin-left: var(--symbol-text-spacing-between);
  }

  &.symbolText--forward .symbolText__item:first-child,
  &.symbolText--backward .symbolText__item:last-child {
    flex-grow: 0;
    flex-shrink: 1;
  }

  &.symbolText--center {
    align-items: center;
  }

  &.symbolText--bottom {
    align-items: flex-end;
  }

  &.symbolText--phrasing {
    display: inline-flex;
  }
}
</style>
