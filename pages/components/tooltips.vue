<template>
  <Demonstration title="Tooltip">
    <template #output>
      <Center>
        <div class="tooltip" data-tip="hello">
          <button class="btn">Hover me</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Force open">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open" data-tip="hello">
          <button class="btn">Force open</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open" data-tip="hello">
        <button class="btn">Force open</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Top">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
          <button class="btn">Top</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
        <button class="btn">Top</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Bottom">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
          <button class="btn">Bottom</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
        <button class="btn">Bottom</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Left">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
          <button class="btn">Left</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
        <button class="btn">Left</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Right">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
          <button class="btn">Right</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
        <button class="btn">Right</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-primary" data-tip="primary">
          <button class="btn btn-primary">primary</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-primary" data-tip="primary">
        <button class="btn btn-primary">primary</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary color">
    <template #output>
      <Center>
        <div
          class="tooltip tooltip-open tooltip-secondary"
          data-tip="secondary"
        >
          <button class="btn btn-secondary">secondary</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-secondary" data-tip="secondary">
        <button class="btn btn-secondary">secondary</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-accent" data-tip="accent">
          <button class="btn btn-accent">accent</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-accent" data-tip="accent">
        <button class="btn btn-accent">accent</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-info" data-tip="info">
          <button class="btn btn-info">info</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-info" data-tip="info">
        <button class="btn btn-info">info</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-success" data-tip="success">
          <button class="btn btn-success">success</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-success" data-tip="success">
        <button class="btn btn-success">success</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-warning" data-tip="warning">
          <button class="btn btn-warning">warning</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-warning" data-tip="warning">
        <button class="btn btn-warning">warning</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error color">
    <template #output>
      <Center>
        <div class="tooltip tooltip-open tooltip-error" data-tip="error">
          <button class="btn btn-error">error</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tooltip tooltip-open tooltip-error" data-tip="error">
        <button class="btn btn-error">error</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Responsive tooltip. only show for large screen">
    <template #output>
      <Center>
        <div class="lg:tooltip" data-tip="hello">
          <button class="btn">Hover me</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="lg:tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
