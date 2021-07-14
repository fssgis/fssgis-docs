# 基础使用

```vue
<script lang="ts" setup>
import { onMounted } from 'vue'
import FssgMap from 'path_to_fssgis/fssg.map.esri/fssg-map';
import Basemap from 'path_to_fssgis/fssg.map.esri/plugins/basemap';

const fssgMap = new FssgMap('esri-container')
  .use(new Basemap())

onMounted(() => fssgMap.mount())
</script>

<template>
  <div id="esri-container"></div>
</template>

<style scoped>
#esri-container { height: 500px; width: 100%; }
</style>
```

<BaseUse />

