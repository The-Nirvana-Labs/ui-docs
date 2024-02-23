<template>
  <Demonstration title="Mockup code with line prefix">
    <template #output>
      <Center>
        <div class="mockup-code">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Multi line">
    <template #output>
      <Center>
        <div class="mockup-code">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
          <pre
            data-prefix=">"
            class="text-warning"
          ><code>installing...</code></pre>
          <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Highlighted line">
    <template #output>
      <Center>
        <div class="mockup-code">
          <pre data-prefix="1"><code>npm i daisyui</code></pre>
          <pre data-prefix="2"><code>installing...</code></pre>
          <pre
            data-prefix="3"
            class="bg-warning text-warning-content"
          ><code>Error!</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code">
        <pre data-prefix="1"><code>npm i daisyui</code></pre>
        <pre data-prefix="2"><code>installing...</code></pre>
        <pre
          data-prefix="3"
          class="bg-warning text-warning-content"
        ><code>Error!</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Long line will scroll">
    <template #output>
      <Center>
        <div class="mockup-code">
          <pre
            data-prefix="~"
          ><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code">
        <pre
          data-prefix="~"
        ><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Without prefix">
    <template #output>
      <Center>
        <div class="mockup-code">
          <pre><code>without prefix</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code">
        <pre><code>without prefix</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With color">
    <template #output>
      <Center>
        <div class="mockup-code bg-primary text-primary-content">
          <pre><code>can be any color!</code></pre>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="mockup-code bg-primary text-primary-content">
        <pre><code>can be any color!</code></pre>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
