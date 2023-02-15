// vite动态绑定图片路径
export const getAssetURL = (image) => {
  // 参数一：相对路径
  // 参数而：当前路径的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};