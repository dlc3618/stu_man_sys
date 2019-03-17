<template>
  <div class="search">
    <label class for="search-word">关键字搜索：</label>
    <input type="text" id="search-word" v-model="keyWord">
    <button class="search-submit" id="search-submit" @click="search">搜索</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
        keyWord: '',
        oldKeyword:''
    };
  },
  methods: {
    search() {
      
        this.setKeyword(this.keyWord)
        if (this.keyWord == '') {
            this.getStuList()
            //  console.log(this.keyWord)
        } else if(this.keyWord !== this.oldKeyword ) {
            this.searchStu()
        } else{
          console.log('重复')
        }
        // console.log(this.keyWord)
        // console.log(this.oldKeyword)
        // console.log(this.keyWord == this.oldKeyword)
        this.oldKeyword = this.keyWord
        // console.log(this.oldKeyword)
        
    },
    ...mapActions(['searchStu', 'getStuList']),
    ...mapMutations(['setKeyword'])
  },
};
</script>

<style scoped>
</style>