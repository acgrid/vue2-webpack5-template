<template>
  <div class="app-main-wrapper">
    <FontAwesomeIcon icon="user-plus" />
    <button class="btn" @click="handleIncrement">Click me</button>
    <p class="display">
      {{ count }}
    </p>
    <p class="display2">
      {{ inputValue }}
    </p>
    <input v-model="inputValue" type="text" />
    <ul class="list">
      <li class="item">1</li>
      <li class="item">2</li>
      <li class="item">3</li>
      <li class="item">4</li>
    </ul>
    <p>NODE_ENV: <b>{{ env }}</b></p>
    <MyView text="awsl" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import MyView from './view.vue'

@Component({
  components: { MyView }
})
export default class App extends Vue {
  public count = 0
  public inputValue = ''
  public obj: {
    name: string
    age: number
  } = {
    name: 'duanzhaoyang',
    age: 22,
  }

  public name = ''

  get env (): string {
    return process.env.NODE_ENV
  }

  handleIncrement(): void {
    this.count++
  }
}
</script>

<style scoped lang="scss">
.btn {
  border: none;
  outline: none;
  background-color: #1890ff;
}
.list {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
