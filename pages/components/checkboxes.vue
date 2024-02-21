<!-- <script setup>
 import {ref,onMounted} from 'vue';
 const checkbox = ref(null);

 onMounted(()=>{
   checkbox.checked=true;
   console.log(checkbox)
 })
</script> -->

<template>
  <Demonstration title="Checkbox">
    <template #output>
      <Center>
        <input type="checkbox" checked class="checkbox" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" checked class="checkbox" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With label and form-control">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-primary" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-primary" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input
              type="checkbox"
              checked
              class="checkbox checkbox-secondary"
            />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-secondary" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-accent" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-accent" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-success" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-success" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-warning" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-warning" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-info" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-info" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error color">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mx-3">Remember me</span>
            <input type="checkbox" checked class="checkbox checkbox-error" />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mx-3">Remember me</span>
          <input type="checkbox" checked class="checkbox checkbox-error" />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col w-full justify-center items-center">
          <input type="checkbox" checked class="checkbox checkbox-xs my-3" />
          <input type="checkbox" checked class="checkbox checkbox-sm my-3" />
          <input type="checkbox" checked class="checkbox checkbox-md my-3" />
          <input type="checkbox" checked class="checkbox checkbox-lg my-3" />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" checked class="checkbox checkbox-xs" />
      <input type="checkbox" checked class="checkbox checkbox-sm" />
      <input type="checkbox" checked class="checkbox checkbox-md" />
      <input type="checkbox" checked class="checkbox checkbox-lg" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled">
    <template #output>
      <Center>
        <input type="checkbox" class="checkbox" disabled />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="checkbox" disabled />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled and checked">
    <template #output>
      <Center>
        <input type="checkbox" class="checkbox" disabled checked />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="checkbox" disabled checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Indeterminate">
    <template #output>
      <Center>
        <input
          type="checkbox"
          ref="checkbox"
          value="hello"
          class="checkbox"
          id="my-checkbox"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="checkbox"
        ref="checkbox"
        value="hello"
        class="checkbox"
        id="my-checkbox"
      />

      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Checkbox with custom colors">
    <template #output>
      <Center>
        <input
          type="checkbox"
          checked
          class="checkbox mx-3 border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
        />
        <input
          type="checkbox"
          checked
          class="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="checkbox"
        checked="checked"
        class="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
      />
      <input
        type="checkbox"
        checked="checked"
        class="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
      />

      ` }}
    </template>
  </Demonstration>
</template>
