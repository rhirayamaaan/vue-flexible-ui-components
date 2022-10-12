<script setup lang="ts">
import Button from './components/parts/Button.vue'

const onClick = (event: MouseEvent) => {
  console.log(event)
}
</script>

<template>
  <div>
    <Button tag-name="a" href="button" @click="onClick">テスト</Button>
  </div>
</template>
