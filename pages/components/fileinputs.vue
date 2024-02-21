<template>
  <Demonstration title="File input">
    <template #output>
      <Center>
        <input type="file" class="file-input w-full max-w-xs" />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="file" class="file-input w-full max-w-xs" />

      ` }}
    </template>
  </Demonstration>

  <Demonstration title="File input with border">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered w-full max-w-xs"
      />

      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Ghost (no background)">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-ghost w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="file" class="file-input file-input-ghost w-full max-w-xs" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With form-control and labels">
    <template #output>
      <Center>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Pick a file</span>
            <span class="label-text-alt">Alt label</span>
          </div>
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
          />
          <div class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
          </div>
        </label>
      </Center>
    </template>
    <template #code>
      {{ `
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Pick a file</span>
          <span class="label-text-alt">Alt label</span>
        </div>
        <input
          type="file"
          class="file-input file-input-bordered w-full max-w-xs"
        />
        <div class="label">
          <span class="label-text-alt">Alt label</span>
          <span class="label-text-alt">Alt label</span>
        </div>
      </label>

      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-secondary w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-accent w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-accent w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-info w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-info w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-success w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-warning w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-warning w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error color">
    <template #output>
      <Center>
        <input
          type="file"
          class="file-input file-input-bordered file-input-error w-full max-w-xs"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        class="file-input file-input-bordered file-input-error w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col w-full justify-center items-center">
          <!-- xs -->
          <input
            type="file"
            class="file-input file-input-bordered file-input-xs w-full max-w-xs my-2"
          />
          <!-- sm -->
          <input
            type="file"
            class="file-input file-input-bordered file-input-sm w-full max-w-xs my-2"
          />
          <!-- md -->
          <input
            type="file"
            class="file-input file-input-bordered file-input-md w-full max-w-xs my-2"
          />
          <!-- lg -->
          <input
            type="file"
            class="file-input file-input-bordered file-input-lg w-full max-w-xs my-2"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- xs -->
      <input
        type="file"
        class="file-input file-input-bordered file-input-xs w-full max-w-xs"
      />
      <!-- sm -->
      <input
        type="file"
        class="file-input file-input-bordered file-input-sm w-full max-w-xs"
      />
      <!-- md -->
      <input
        type="file"
        class="file-input file-input-bordered file-input-md w-full max-w-xs"
      />
      <!-- lg -->
      <input
        type="file"
        class="file-input file-input-bordered file-input-lg w-full max-w-xs"
      />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled">
    <template #output>
      <Center>
        <input
          type="file"
          placeholder="You can't touch this"
          class="file-input file-input-bordered w-full max-w-xs"
          disabled
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="file"
        placeholder="You can't touch this"
        class="file-input file-input-bordered w-full max-w-xs"
        disabled
      />
      ` }}
    </template>
  </Demonstration>
</template>
