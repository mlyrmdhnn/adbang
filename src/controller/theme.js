// const modeText = ref('Light')
// const themeBoolean = ref(true)
// const changeTheme = () => {
//   const html = document.querySelector('html')
//   html.classList.toggle('dark:bg-neutral-800')
//   if (modeText.value == 'Light') {
//     modeText.value = 'Dark'
//   } else if (modeText.value == 'Dark') {
//     modeText.value = 'Light'
//   }
//   themeBoolean.value = !themeBoolean.value
// }

import { ref } from 'vue'

let theme = ref('Light')
const themeBoolean = ref(true)
const changeTheme = () => {
  const html = document.querySelector('html')
  html.classList.toggle('dark:bg-neutral-800')
  theme.value = theme.value === 'Light' ? 'Dark' : 'Light'
  themeBoolean.value = !themeBoolean.value
}

export { theme, changeTheme, themeBoolean }
