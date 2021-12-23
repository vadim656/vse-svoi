<template>
  <div class="">
    <span
      @click="areOptionsVisible = !areOptionsVisible"
      class="cursor-pointer "
      >{{ selected }}</span
    >
    <div
      class="flex flex-col absolute z-[99] top-[90px] left-0  w-full bg-white rounded-b-xl box-1 "
      v-if="areOptionsVisible"
    >
      <span
        class="cursor-pointer border-t px-4 py-2"
        v-for="option in options"
        @click="selectOption(option)"
        :key="option.value"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        { name: 'Ставрополь', value: 1 },
        { name: 'Крым', value: 2 },
        { name: 'Архыз', value: 3 },
        { name: 'Домбай', value: 4 },
        { name: 'Турция', value: 5 }
      ],
      areOptionsVisible: false,
      selected: 'Выбрать откуда:'
    }
  },
  methods: {
    selectOption (option) {
      this.selected = option.name
      this.areOptionsVisible = false
    }
  }
}
</script>

<style></style>
