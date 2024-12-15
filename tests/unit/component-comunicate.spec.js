import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Parent-Child Communication', () => {
  it('updates Parent text when Child emits an event', async () => {
    const wrapper = mount(Parent);
    const childWrapper = wrapper.findComponent(Child);

    const inputText = 'Hello Parent!';
    await childWrapper.find('input').setValue(inputText);
    await childWrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain(inputText);
  });

  it('emits textSubmitted event from Child with text', async () => {
    const wrapper = mount(Child);

    const inputText = 'Test message';
    await wrapper.find('input').setValue(inputText);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('textSubmitted')).toBeTruthy();
    expect(wrapper.emitted('textSubmitted')[0]).toEqual([inputText]);
  });
});
