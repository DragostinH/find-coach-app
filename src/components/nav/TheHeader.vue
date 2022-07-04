<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
    
}
</script>

<template>
    <header class="bg-primary-900 text-secondary-500 grid items-center justify-center gap-4">
        <p class="text-center">Find a coach APP</p>
        <div class="routerlinks-container flex gap-4">
            <router-link to="/coaches">
                <base-button>
                    Coaches List
                </base-button>
            </router-link>
            <router-link to="/requests">
                <base-button>
                    Requests List
                </base-button>
            </router-link>
        </div>
    </header>
</template>