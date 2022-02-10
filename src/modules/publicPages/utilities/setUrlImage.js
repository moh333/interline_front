export default {
   methods: {
      setUrlImage(img) {
         if (img.includes("http")) {
            return img;
         } else {
            return require(`@/assets/${img}`);
         }
      }
   }
}