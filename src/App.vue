<template>
  <div id="app" class="wrapper">
    <sys-header></sys-header>
    <left-menu></left-menu>
  </div>
</template>

<script>
import sysHeader from './components/sysHeader.vue'
import leftMenu from './components/leftMenu.vue'
import api from './api.js'
import { mapActions } from 'vuex'

export default {
    components: {
        sysHeader,
        leftMenu,
    },
    created() {
       this.getStuList()
    //相当于this.$store.dispatch('getStuList')
    },
    methods: {
        ...mapActions([
            'getStuList'
        ])
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
    color: #b3bcc5;
}
html, body, .wrapper {
    height: 100%;
    background-color: #eee;
}
.wrapper .header {
    height: 70px;
    line-height: 70px;
    background-color: #354457;
}
.header .logo {
    width: 220px;
    height: 70px;
    margin-left: 20px;
}
.header .logo img {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;

}
.left-menu {
    width: 200px;
    position: absolute;
    top: 70px;
    background-color: #4d5e70;
    height: calc(100% - 70px);
}
dl dt, dl dd {
    height: 40px;
    line-height: 40px;
}
dl dt {
    padding-left: 8px;
    font-weight: bold;
}
dl dd {
    padding-left: 30px;
    cursor: pointer;
}
dl dd.active {
    background-color: #ddd;
    color: #354457;
}

.right-content {
    position: absolute;
    left: 200px;
    top: 70px;
    width: calc(100% - 200px);
    height: calc(100% - 70px);  
}
.right-content .content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
/* .right-content .student-list {
    display: none;
} */
.right-content .student-list .search {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    background-color: #eee;
}
.search label {
    font-size: 16px;
    color: #646987;
    font-weight: bold;
}
.search input {
    width: 200px;
    height: 30px;
    outline: none;
    border: none;
    font-size: 16px;
}
.search .search-submit {
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    display: inline-block;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    color: #ffffff;
    background-color: #354457;
}
table {
    width: 100%;
    font-size: 14px;
    color: #354457;
    min-width: 800px;
}
table thead {
    background-color: #e3e8ee;
}
table th, table td {
    text-align: center;
    padding: 10px;
    min-width: 100px;
}
table th {
    color: #646987;
}
table tbody {
    background-color: #fff;
}
table tbody .btn {   
    padding: 3px 10px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
}
table td {
    color: #646987;
}



table tbody .edit {
    background-color: #5cb85c;
}
table .btn.edit:hover {
    background-color: #398439;
    border-color: #255625;
}
table tbody .del {
    background-color: #d9534f;
}
table .btn.del:hover {
    background-color: #c9302c;
}
#turn-page {
    float: right;
    margin: 20px;
}
#turn-page li {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ddd;
    color: #b3bcc5;
    font-size: 14px;
    cursor: pointer;
}
#turn-page li.cur-page {
    background-color: #428bca;
    border: 1px solid #428bca;
    color: #fff;
}
.model {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* display: none; */
}
.model .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
}

.model .model-content {
    width: 500px;
    height: 450px;
    background-color: #fff;
    position: absolute;
    padding: 10px;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -225px;
}
.model h3 {
    font-size: 16px;
    color: #b3bcc5;
}
.model form {
    width: 400px;
    margin: 50px auto;
}
form div {
    margin: 10px;
    }
form label {
    display: inline-block;
    width: 80px;
    font-size: 16px;
    text-align: right;
    
}
 form label, form input, form span {
    font-size: 16px;
    color: #354457;
}
form span {
    margin-right: 10px;
}
form .btn {
    padding: 5px 30px;
}
.add-student form {
    width: 400px;
    margin: 50px auto;
}

.right-content .add-student {
    /* display: none; */
}
</style>
