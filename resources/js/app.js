require("./bootstrap");

import axios from "axios";
// window.Vue = require('vue');
import vue from "vue";

Vue.component("modal", {
    template: "#exampleModal",
});

const app = new Vue({
    el: "#app_vue",
    data: {
        items: [],
        hasError: true,
        e_name: "",
        e_age: "",
        e_id: "",
        e_profession: "",
        newItem: { name: "", age: "", profession: "" },
    },
    created() {
        this.getItems();
    },
    methods: {
        getItems: function getItems() {
            var _this = this;
            axios.get("/getItems").then(function (response) {
                _this.items = response.data;
            });
        },
        setVal(val_id, val_name, val_age, val_profession) {
            this.e_id = val_id;
            this.e_name = val_name;
            this.e_age = val_age;
            this.e_profession = val_profession;
        },
        createItem: function createItem() {
            var _this = this;
            var input = this.newItem;
            if (
                input["name"] == "" ||
                input["age"] == "" ||
                input["profession"] == ""
            ) {
                this.hasError = false;
            } else {
                this.hasError = true;
                axios.post("/storeItem", input).then(function (response) {
                    _this.newItem = { name: "", age: "", profession: "" };
                    _this.getItems();
                });
            }
        },
        deleteItem: function deleteItem(item) {
            var _this = this;
            axios.post("/deleteItem/" + item.id).then(function (response) {
                _this.getItems();
            });
        },
        editItem(){
            // var _this = this;
            var i_val_1 = document.getElementById('e_id');
            var n_val_1 = document.getElementById('e_name');
            var a_val_1 = document.getElementById('e_age');
            var p_val_1 = document.getElementById('e_profession');
   
             axios.post('/edititem/' + i_val_1.value, {val_1: n_val_1.value, val_2: a_val_1.value,val_3: p_val_1.value })
               .then(response => {
                 this.getItems();
               });
             this.hasDeleted = true;
           
     },
    },
});
