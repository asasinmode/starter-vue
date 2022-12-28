import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('index', () => {
  const clickedIndexes = $ref<number[]>([]);

  function handleLetterClick(index: number) {
    if (clickedIndexes.includes(index)) {
      clickedIndexes.splice(clickedIndexes.findIndex(num => num === index), 1);
    } else {
      clickedIndexes.push(index);
    }
  }

  return { clickedIndexes, handleLetterClick };
});
