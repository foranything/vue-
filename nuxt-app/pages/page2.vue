<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <!-- bails=false -> test against all rules  -->
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:3"
          :bails="false"
        >
          <v-text-field
            v-model="text"
            label="text"
            hint="At least 3 characters"
            counter
            @click:append="show1 = !show1"
          />
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="required|min:3">
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :type="show ? 'text' : 'password'"
            counter
            @click:append="show = !show"
          />
          <div>{{ errors[0] }}</div>
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
      password: '',
      icon: 'visibility',
      show: false
    }
  }
}
</script>
