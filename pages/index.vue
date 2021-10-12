<template>
  <div class="container">
    <p @click="test">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "nuxt-property-decorator";
import Core from "~/store/core";

@Component({
  async asyncData() {
    await Core.fetch();
  }
})
export default class IndexPage extends Vue {
  get name(): string {
    return Core.name;
  }

  @Emit()
  private test() {
    alert(`test -> ${Core.name}`);
  }
}
</script>
