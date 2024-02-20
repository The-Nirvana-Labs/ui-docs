<template>
  <Demonstration title="Range">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input type="range" min="0" max="100" value="40" class="range" />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="range" min="0" max="100" value="40" class="range" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With steps and measure">
    <template #output>
      <Center>
        <div class="w-[60%] flex flex-col">
          <input
            type="range"
            min="0"
            max="100"
            value="25"
            class="range"
            step="25"
          />
          <div class="w-full flex justify-between text-xs px-2 my-1">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="25"
        class="range"
        step="25"
      />
      <div class="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-primary"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-primary"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-secondary"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-secondary"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-info"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-info"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-accent"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-accent"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-success"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-success"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-warning"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-warning"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error color">
    <template #output>
      <Center>
        <div class="w-[60%]">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-error"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-error"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="w-[60%] flex flex-col">
          <input
            type="range"
            min="0"
            max="100"
            value="40"
            class="range range-xs my-2"
          />
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="range range-sm my-2"
          />
          <input
            type="range"
            min="0"
            max="100"
            value="60"
            class="range range-md my-2"
          />
          <input
            type="range"
            min="0"
            max="100"
            value="70"
            class="range range-lg my-2"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="range" min="0" max="100" value="40" class="range range-xs" />
      <input type="range" min="0" max="100" value="50" class="range range-sm" />
      <input type="range" min="0" max="100" value="60" class="range range-md" />
      <input type="range" min="0" max="100" value="70" class="range range-lg" />
      ` }}
    </template>
  </Demonstration>
</template>
