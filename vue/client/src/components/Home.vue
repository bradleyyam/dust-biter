<template>
  <div>
    <div class="row">
    </div>
 
    <div class="col col-8 align-middle mt-5 offset-2">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submit(url)">
            <div class="form-group">
              <textarea type="url" class="form-control" v-model="url" style="height:150px" placeholder = "Enter your URL here..." />
            </div>
            <div class="for-group" v-show="shortUrl">
              <p>
                Short URL: :
                <a :href="shortUrl" class="text-primary">{{shortUrl}}</a>
              </p>
            </div>
            <div class="form-group">
              <button class="btn btn-info" type="submit">Squeeze URL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      url: "",
      shortUrl: "",
    };
  },
  methods: {
    submit: async function (url) {
      try {
        const api = "http://localhost:5000/url";
        const response = await axios.post(api, {
          url,
        });
        this.shortUrl = response.data.shortUrl;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>