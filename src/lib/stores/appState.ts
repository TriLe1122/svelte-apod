import { writable } from "svelte/store";


 export const appState = writable({

  image: '',
  title: '',


   apodData: {
     url: ''}

})

