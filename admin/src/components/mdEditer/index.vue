<template>
  <div style="width: 100%">
    <MdEditor v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import { MdEditor, MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = "# 12781728";
</script>

<style scoped></style>
