<template>
  <nb-container>
    <view>
      <flat-list
        :style="{ height: '100%' }"
        :data="feed"
        :keyExtractor="post => String(post.id)"
        :viewabilityConfig="{ itemVisiblePercentThreshold: 50 }"
        :render-item="item => handleFeedRendering(item)"
        :onEndReachedTreshold="0.1"
        :initialNumToRender="perPage"
        :onEndReached="loadPage"
        :onRefresh="refreshList"
        :refreshing="refreshing"
      />
    </view>
    <nb-spinner v-if="loading" color="#000" class="loading" />
  </nb-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Settings from '../../../settings';
import FeedItem from '../../components/feedItem.vue';
export default {
  mounted() {
    this.loadPage();
  },
  data() {
    return {
      loading: false,
      refreshing: false,
      currentPage: 1,
      totalPages: 1,
      feed: [],
      shouldRefresh: false,
      perPage: 5,
    };
  },
  methods: {
    handleFeedRendering(feed) {
      return <FeedItem item={feed.item} />;
    },
    async loadPage() {
      if (this.currentPage > this.totalPages) return;
      this.loading = true;
      fetch(
        `${Settings.baseUrl}?_expand=author&_limit=${this.perPage}&_page=${this.currentPage}`,
      ).then(async response => {
        let responseJson = await response.json();
        let totalItems = response.headers.get('X-Total-Count');
        this.loading = false;
        if (responseJson && responseJson.length) {
          this.feed = this.shouldRefresh
            ? responseJson
            : [...this.feed, ...responseJson];
          this.currentPage += 1;
          this.shouldRefresh = false;
          this.totalPages = Math.floor(totalItems / this.perPage);
        }
      });
    },
    async refreshList() {
      this.refreshing = true;
      this.currentPage = 1;
      this.shouldRefresh = true;
      await this.loadPage(true);
      this.refreshing = false;
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
