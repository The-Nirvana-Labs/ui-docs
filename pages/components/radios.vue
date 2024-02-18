<template>
  <Demonstration title="Radio">
    <template #output>
      <Center>
        <input type="radio" name="radio-1" class="radio mx-2" checked />
        <input type="radio" name="radio-1" class="radio" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-1" class="radio" checked />
      <input type="radio" name="radio-1" class="radio" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-2"
          class="radio radio-primary mx-2"
          checked
        />
        <input type="radio" name="radio-2" class="radio radio-primary" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-2" class="radio radio-primary" checked />
      <input type="radio" name="radio-2" class="radio radio-primary" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-3"
          class="radio radio-secondary mx-2"
          checked
        />
        <input type="radio" name="radio-3" class="radio radio-secondary" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="radio"
        name="radio-3"
        class="radio radio-secondary"
        checked
      />
      <input type="radio" name="radio-3" class="radio radio-secondary" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-4"
          class="radio radio-accent mx-2"
          checked
        />
        <input type="radio" name="radio-4" class="radio radio-acent" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-4" class="radio radio-accent" checked />
      <input type="radio" name="radio-4" class="radio radio-accent" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-5"
          class="radio radio-success mx-2"
          checked
        />
        <input type="radio" name="radio-5" class="radio radio-success" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-5" class="radio radio-success" checked />
      <input type="radio" name="radio-5" class="radio radio-success" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-6"
          class="radio radio-warning mx-2"
          checked
        />
        <input type="radio" name="radio-6" class="radio radio-warning" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-6" class="radio radio-warning" checked />
      <input type="radio" name="radio-6" class="radio radio-warning" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-7"
          class="radio radio-info mx-2"
          checked
        />
        <input type="radio" name="radio-7" class="radio radio-info" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-7" class="radio radio-info" checked />
      <input type="radio" name="radio-7" class="radio radio-info" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error color">
    <template #output>
      <Center>
        <input
          type="radio"
          name="radio-8"
          class="radio radio-error mx-2"
          checked
        />
        <input type="radio" name="radio-8" class="radio radio-error" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-8" class="radio radio-error" checked />
      <input type="radio" name="radio-8" class="radio radio-error" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled">
    <template #output>
      <Center>
        <input type="radio" name="radio-9" class="radio" disabled checked />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="radio" name="radio-9" class="radio" disabled checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With label and form-control and custom colors!">
    <template #output>
      <Center>
        <div class="flex flex-col w-[65%]">
            <div class="form-control my-3">
              <label class="label cursor-pointer">
                <span class="label-text">Red pill</span>
                <input
                  type="radio"
                  name="radio-10"
                  class="radio checked:bg-red-500"
                  checked
                />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Blue pill</span>
                <input
                  type="radio"
                  name="radio-10"
                  class="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Red pill</span>
          <input
            type="radio"
            name="radio-10"
            class="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            class="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
