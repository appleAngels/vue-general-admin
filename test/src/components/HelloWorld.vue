<template>
  <div class="hello">
    <h1 :style="{ opacity }">{{ msg }}</h1>
    <input v-model="keyWord" type="text" placeholder="please input" />
    <!-- <button>ensure</button> -->
    <Button type="primary"> Primary </Button>
    <ul>
      <li v-for="p in filPersons" :key="p.id">{{ p.name }}-{{ p.age }}</li>
    </ul>
    <DatePicker></DatePicker>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      keyWord: '',
      opacity: 1,
      persons: [
        { id: '001', name: 'zhang', age: 18 },
        { id: '002', name: 'wang', age: 20 },
        { id: '003', name: 'li', age: 24 }
      ]
    };
  },
  methods: {
    changeOpacity() {
      setInterval(() => {
        this.opacity -= 0.01;
        if (this.opacity < 0) this.opacity = 1;
      }, 16);
    }
  },
  watch: {},
  computed: {
    filPersons() {
      const arr = this.persons.filter((item) => {
        return item.name.indexOf(this.keyWord) !== -1;
      });

      return arr;
    }
  },
  mounted() {
    // this.changeOpacity();
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
