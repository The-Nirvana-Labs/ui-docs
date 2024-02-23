<template>
  <Demonstration title="Horizontal">
    <template #output>
      <Center>
        <ul class="steps">
          <li class="step step-primary">Register</li>
          <li class="step step-primary">Choose plan</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <ul class="steps">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Vertical">
    <template #output>
      <Center>
        <ul class="steps steps-vertical">
          <li class="step step-primary">Register</li>
          <li class="step step-primary">Choose plan</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <ul class="steps steps-vertical">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      ` }}
    </template>
  </Demonstration>

  <Demonstration
    title="Responsive (vertical on small screen, horizontal on large screen)"
  >
    <template #output>
      <Center>
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li class="step step-primary">Register</li>
          <li class="step step-primary">Choose plan</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With data-content">
    <template #output>
      <Center>
        <ul class="steps">
          <li data-content="?" class="step step-neutral">Step 1</li>
          <li data-content="!" class="step step-neutral">Step 2</li>
          <li data-content="✓" class="step step-neutral">Step 3</li>
          <li data-content="✕" class="step step-neutral">Step 4</li>
          <li data-content="★" class="step step-neutral">Step 5</li>
          <li data-content="" class="step step-neutral">Step 6</li>
          <li data-content="●" class="step step-neutral">Step 7</li>
        </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <ul class="steps">
        <li data-content="?" class="step step-neutral">Step 1</li>
        <li data-content="!" class="step step-neutral">Step 2</li>
        <li data-content="✓" class="step step-neutral">Step 3</li>
        <li data-content="✕" class="step step-neutral">Step 4</li>
        <li data-content="★" class="step step-neutral">Step 5</li>
        <li data-content="" class="step step-neutral">Step 6</li>
        <li data-content="●" class="step step-neutral">Step 7</li>
      </ul>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Custom colors">
    <template #output>
      <Center>
        <ul class="steps">
          <li class="step step-info">Fly to moon</li>
          <li class="step step-info">Shrink the moon</li>
          <li class="step step-info">Grab the moon</li>
          <li class="step step-error" data-content="?">Sit on toilet</li>
        </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <ul class="steps">
        <li class="step step-info">Fly to moon</li>
        <li class="step step-info">Shrink the moon</li>
        <li class="step step-info">Grab the moon</li>
        <li class="step step-error" data-content="?">Sit on toilet</li>
      </ul>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With scrollable wrapper">
    <template #output>
      <Center>
          <ul class="steps">
            <li class="step">start</li>
            <li class="step step-secondary">2</li>
            <li class="step step-secondary">3</li>
            <li class="step step-secondary">4</li>
            <li class="step">5</li>
            <li class="step step-accent">6</li>
            <li class="step step-accent">7</li>
            <li class="step">8</li>
            <li class="step step-error">9</li>
            <li class="step step-error">10</li>
            <li class="step">11</li>
            <li class="step">12</li>
            <li class="step step-warning">13</li>
            <li class="step step-warning">14</li>
            <li class="step">15</li>
            <li class="step step-neutral">16</li>
            <li class="step step-neutral">17</li>
            <li class="step step-neutral">18</li>
            <li class="step step-neutral">19</li>
            <li class="step step-neutral">20</li>
            <li class="step step-neutral">21</li>
            <li class="step step-neutral">22</li>
            <li class="step step-neutral">23</li>
            <li class="step step-neutral">end</li>
          </ul>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="overflow-x-auto">
        <ul class="steps">
          <li class="step">start</li>
          <li class="step step-secondary">2</li>
          <li class="step step-secondary">3</li>
          <li class="step step-secondary">4</li>
          <li class="step">5</li>
          <li class="step step-accent">6</li>
          <li class="step step-accent">7</li>
          <li class="step">8</li>
          <li class="step step-error">9</li>
          <li class="step step-error">10</li>
          <li class="step">11</li>
          <li class="step">12</li>
          <li class="step step-warning">13</li>
          <li class="step step-warning">14</li>
          <li class="step">15</li>
          <li class="step step-neutral">16</li>
          <li class="step step-neutral">17</li>
          <li class="step step-neutral">18</li>
          <li class="step step-neutral">19</li>
          <li class="step step-neutral">20</li>
          <li class="step step-neutral">21</li>
          <li class="step step-neutral">22</li>
          <li class="step step-neutral">23</li>
          <li class="step step-neutral">end</li>
        </ul>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
