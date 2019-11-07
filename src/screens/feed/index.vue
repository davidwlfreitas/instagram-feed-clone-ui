<template>
  <nb-container>
    <view>
      <flat-list
        :style="{ height: '100%' }"
        :data="feed"
        :keyExtractor="post => String(post.id)"
        :render-item="item => handleFeedRendering(item)"
        onEndReachedTreshold="0.1"
        initialNumToRender="10"
        :onEndReached="loadPage.bind(this)"
      />
    </view>
    <nb-spinner v-if="loading" color="#000" class="loading" />
  </nb-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import React from 'react';
import FeedItem from '../../components/feedItem.vue';
import store from '../../store';
export default {
  mounted() {
    this.loadPage();
  },
  data() {
    return {
      loading: false,
      lastPage: 0,
    };
  },
  computed: {
    feed() {
      return store.state.feed;
    },
    currentPage() {
      return store.state.page;
    },
  },
  methods: {
    handleFeedRendering(feed) {
      return <FeedItem item={feed.item} />;
    },
    loadPage() {
      this.loading = true;
      if (this.currentPage > this.lastPage) {
        this.lastPage = this.currentPage;
        fetch(
          `http://localhost:3000/feed?_expand=author&limit=5&_page=${this.currentPage}`,
        )
          .then(response => response.json())
          .then(responseJson => {
            this.loading = false;
            if (responseJson && responseJson.length) {
              store.dispatch('SET_FEED', {
                feed: [...this.feed, ...responseJson],
              });
              store.dispatch('SET_PAGE', { page: this.currentPage + 1 });
            }
          });
      }
    },
  },
};
</script>

<style lang="css">
.loading {
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
