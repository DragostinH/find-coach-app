<script>
export default {
    props:['skill'],

    data(){
        return{
            selectedSkill: 'Paladin',
            cssClass: ''
        }
    },

    methods:{

    }
}
</script>


<template>
    <span>
        <slot></slot>
    </span>
</template>