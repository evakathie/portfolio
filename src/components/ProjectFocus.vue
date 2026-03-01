<template>
  <div class="project-focus">
    <div
      class="project-focus-batch"
      v-for="focusItem in focus"
      :key="focusItem"
    >
      {{ focusItem }}
    </div>

    <div
      class="project-focus-batch project-domain"
      v-for="domainItem in domain"
      :key="domainItem"
    >
      {{ domainItem }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectFocus',

  props: {
    focus: {
      type: Array,
      default: () => [],
    },
    domain: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.project-focus {
  display: flex;
  flex-wrap: wrap;
  margin: 2px 0px 6px 0px;

  .project-focus-batch {
    background: color(color);
    color: color(white);
    border-radius: 16px;

    display: flex;
    align-items: center;
    text-align: center;

    font-weight: normal;
    font-size: 12px;
    text-transform: uppercase;

    padding: 6px 12px;
    margin: 4px 6px 0px 0px;
  }

  .project-domain {
    background: color(color_light);
  }
}
</style>