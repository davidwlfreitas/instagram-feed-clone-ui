<template>
  <view v-if="item">
    <view class="header-avatar">
      <Image
        :source="{ uri: item.author.avatar }"
        :style="{ aspectRatio: item.aspectRatio }"
        class="author-avatar"
      />
      <nb-text class="author-name">
        {{ item.author.name }}
      </nb-text>
    </view>

    <view class="post-image">
      <Image
        :source="{ uri: item.image }"
        :style="{ aspectRatio: item.aspectRatio, width: '100%' }"
      />
    </view>

    <view class="post-description" v-if="item.description">
      <nb-text class="author-name">
        {{ item.author.name }}
      </nb-text>
      <nb-text class="description">
        {{ item.description }}
      </nb-text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="css">
.header-avatar {
    padding: 15px;
    flex-direction: row;
    align-items: center;
}
.author-avatar {
  width: 32;
  height: 32;
  border-radius: 16;
  margin-right: 10;
}
.author-name {
    color: #333;
    font-weight: bold;
}
.post-description {
    padding: 15px;
    line-height: 18px;
    flex-direction: row;
}
.description {
    padding-left: 7px;
}
</style>
