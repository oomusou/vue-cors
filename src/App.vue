<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios'

let mounted = function() {
  axios.get('api/hello-world')
    .then(x => x.data)
    .then(x => this.message = x)
}

export default {
  name: 'app',
  data: () => ({
    message: ''
  }),
  mounted
}
</script>
