<template>
    <div id="card">
    <b-card :title="title"
            tag="article"
            class="mb-2">
        <p class="card-text">
        {{description}}
        </p>
        <b-button href="#" variant="primary">Link</b-button>
    </b-card>
    </div>
</template>

<script>
export default {
    name: 'Card',
  props: {
    title: String,
    description: String,
    URL: String,
    iconURL: String,
    col: 4,
    style: [
    {
      backgroundColor: String,
      color: String,
    }
  ]
  }
}
</script>

<style scoped>

#card {
    max-width: 400px;
}

</style>
