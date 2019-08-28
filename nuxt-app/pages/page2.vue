<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <!-- bails=false -> test against all rules  -->
        <ValidationProvider
          rules="required|min:3"
          v-slot="{ errors }"
          :bails="false"
        >
          <v-text-field
            v-model="text"
            label="text"
            hint="At least 3 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
            <ul>
              <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
            </ul>
        </ValidationProvider>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  }
}
</script>