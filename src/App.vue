<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios'

let mounted = function() {
  axios.get('http://localhost:3000/hello-world')
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
