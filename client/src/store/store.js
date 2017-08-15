import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: [],
    signIn: [],
    dataArticles: [],
    dataArticleByAuthor: [],
    detailArticle: []
  }
})
