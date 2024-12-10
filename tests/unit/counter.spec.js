import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/counter';

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with a count of 0', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
  });

  it('increments the count', () => {
    const counterStore = useCounterStore();
    counterStore.increment();
    expect(counterStore.count).toBe(1);
  });

  it('decrements the count', () => {
    const counterStore = useCounterStore();
    counterStore.increment();
    counterStore.decrement();
    expect(counterStore.count).toBe(0);
  });
});
