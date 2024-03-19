<template>
  <Demonstration title="Buttons">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn">Button</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn">Button</button>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Buttons with brand colors">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn">Default</button>
          <button class="btn btn-neutral">Neutral</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-ghost">Ghost</button>
          <button class="btn btn-link">Link</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn">Button</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Active Buttons">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn btn-active">Default</button>
          <button class="btn btn-active btn-neutral">Neutral</button>
          <button class="btn btn-active btn-primary">Primary</button>
          <button class="btn btn-active btn-secondary">Secondary</button>
          <button class="btn btn-active btn-accent">Accent</button>
          <button class="btn btn-active btn-ghost">Ghost</button>
          <button class="btn btn-active btn-link">Link</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `<button class="btn btn-active">Default</button>
      <button class="btn btn-active btn-neutral">Neutral</button>
      <button class="btn btn-active btn-primary">Primary</button>
      <button class="btn btn-active btn-secondary">Secondary</button>
      <button class="btn btn-active btn-accent">Accent</button>
      <button class="btn btn-active btn-ghost">Ghost</button>
      <button class="btn btn-active btn-link">Link</button>` }}
    </template>
  </Demonstration>

  <Demonstration title="Buttons with State Colors">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>`}}
    </template>
  </Demonstration>


  <Demonstration title="Button sizes">
    <template #output>
      <Center>
        <div class="flex space-x-2 items-center">
          <button class="btn btn-neutral btn-lg">Large</button>
          <button class="btn btn-neutral">Normal</button>
          <button class="btn btn-neutral btn-sm">Small</button>
          <button class="btn btn-neutral btn-xs">Tiny</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-neutral btn-lg">Large</button>
      <button class="btn btn-neutral">Normal</button>
      <button class="btn btn-neutral btn-sm">Small</button>
      <button class="btn btn-neutral btn-xs">Tiny</button>` }}
    </template>
  </Demonstration>

  <Demonstration title="Responsive Button">
    <template #output>
      <Center>
        <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
        Responsive</button
      >` }}
    </template>
  </Demonstration>

  <Demonstration title="Wide Button">
    <template #output>
      <Center>
        <button class="btn btn-primary btn-wide">Wide</button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary btn-wide">Wide</button>` }}
    </template>
  </Demonstration>

  <Demonstration title="Glass Button">
    <template #output>
      <Center>
        <button class="btn glass">Glass button</button>
      </Center>
    </template>
    <template #code>
      {{ `<button class="btn glass">Glass button</button>` }}
    </template>
  </Demonstration>

  <Demonstration title="Buttons with different HTML tags">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <a role="button" class="btn btn-primary">Link</a>
          <button type="submit" class="btn btn-primary">Button</button>
          <input type="button" value="Input" class="btn btn-primary" />
          <input type="submit" value="Submit" class="btn btn-primary" />
          <input type="radio" aria-label="Radio" class="btn btn-primary" />
          <input type="checkbox" aria-label="Checkbox" class="btn btn-primary" />
          <input type="reset" value="Reset" class="btn btn-primary" />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <a role="button" class="btn btn-primary">Link</a>
      <button type="submit" class="btn btn-primary">Button</button>
      <input type="button" value="Input" class="btn btn-primary" />
      <input type="submit" value="Submit" class="btn btn-primary" />
      <input type="radio" aria-label="Radio" class="btn btn-primary" />
      <input type="checkbox" aria-label="Checkbox" class="btn btn-primary" />
      <input type="reset" value="Reset" class="btn btn-primary" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled Buttons">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn btn-primary" disabled>
            Disabled using attribute
          </button>
          <button
            class="btn btn-disabled"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Disabled using class name
          </button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary" disabled>Disabled using attribute</button>
      <button
        class="btn btn-disabled"
        tabindex="-1"
        role="button"
        aria-disabled="true"
      >
        Disabled using class name
      </button>
      ` }}
    </template>
  </Demonstration>
  <Demonstration title="Circle Buttons">
    <template #output>
      <Center>
        <div class="flex space-x-2">
          <button class="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button class="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button class="btn btn-circle btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Button with SVG Icon at start">
    <template #output>
      <Center>
        <button class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Button
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Button
      </button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Button with SVG Icon at end">
    <template #output>
      <Center>
        <button class="btn btn-primary">
          Button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary">
        Button
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Block Button">
    <template #output>
      <Center>
        <button class="btn btn-primary btn-block">block</button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary btn-block">block</button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Square Button with Loading Spinner">
    <template #output>
      <Center>
        <button class="btn btn-primary btn-square">
          <span class="loading loading-spinner"></span>
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary btn-square">
        <span class="loading loading-spinner"></span>
      </button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Button with Loading Spinner and Text">
    <template #output>
      <Center>
        <button class="btn btn-primary">
          <span class="loading loading-spinner"></span>
          loading
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary">
        <span class="loading loading-spinner"></span>
        loading
      </button>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Button without Click Animation">
    <template #output>
      <Center>
        <button class="btn btn-primary no-animation">
          I don't have click animation
        </button>
      </Center>
    </template>
    <template #code>
      {{ `
      <button class="btn btn-primary no-animation">
        I don't have click animation
      </button>
      ` }}
    </template>
  </Demonstration>
</template>
