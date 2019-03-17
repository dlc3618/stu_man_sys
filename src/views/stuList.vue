<template>
    <div class="student-list content">
        <stu-search></stu-search>
        <stu-table></stu-table>
        <turn-page></turn-page>
        <model v-if="showModel"></model>
    </div>
</template>
<script>
import model from '../components/model'
import stuSearch from '../components/stuSearch'
import stuTable from '../components/stuTable'
import turnPage from '../components/turnPage'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    components: {
        model,
        stuSearch,
        stuTable,
        turnPage
    },
    computed: {
        ...mapState(['showModel'])
    }
}
</script>

<style scoped>

</style>