<template>
  <Demonstration title="Toggle">
    <template #output>
      <Center>
        <input type="checkbox" class="toggle" checked />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="toggle" checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With label and form-control">
    <template #output>
      <Center>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" class="toggle" checked />
        </label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Checkboxes with brand colors">
    <template #output>
      <Center>
        <div class="flex flex-col">
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <span class="label-text">Remember me</span>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
          </div>
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <span class="label-text">Remember me</span>
              <input type="checkbox" class="toggle toggle-secondary" checked />
            </label>
          </div>
          <div class="form-control w-52">
            <label class="cursor-pointer label">
              <span class="label-text">Remember me</span>
              <input type="checkbox" class="toggle toggle-accent" checked />
            </label>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="flex flex-col">
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-primary" checked />
          </label>
        </div>
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-secondary" checked />
          </label>
        </div>
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-accent" checked />
          </label>
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Checkboxes with state colors">
    <template #output>
      <Center>
        <Column>
          <input type="checkbox" class="toggle toggle-success" checked />
          <input type="checkbox" class="toggle toggle-warning" checked />
          <input type="checkbox" class="toggle toggle-info" checked />
          <input type="checkbox" class="toggle toggle-error" checked />
        </Column>
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="toggle toggle-success" checked />
      <input type="checkbox" class="toggle toggle-warning" checked />
      <input type="checkbox" class="toggle toggle-info" checked />
      <input type="checkbox" class="toggle toggle-error" checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <Column>
          <input type="checkbox" class="toggle toggle-xs" checked />
          <input type="checkbox" class="toggle toggle-sm" checked />
          <input type="checkbox" class="toggle toggle-md" checked />
          <input type="checkbox" class="toggle toggle-lg" checked />
        </Column>
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="toggle toggle-xs" checked />
      <input type="checkbox" class="toggle toggle-sm" checked />
      <input type="checkbox" class="toggle toggle-md" checked />
      <input type="checkbox" class="toggle toggle-lg" checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled">
    <template #output>
      <Center>
        <input type="checkbox" class="toggle" disabled />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="toggle" disabled />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled and checked">
    <template #output>
      <Center>
        <input type="checkbox" class="toggle" disabled checked />
      </Center>
    </template>
    <template #code>
      {{ `
      <input type="checkbox" class="toggle" disabled checked />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Indeterminate">
    <template #output>
      <Center>
        <!-- You can make a toggle indeterminate using JS -->
        <input
          intermediate="{{ true }}"
          type="checkbox"
          class="toggle"
          id="my-toggle"
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- You can make a toggle indeterminate using JS -->
      <script>
        document.getElementById("my-toggle").indeterminate = true;
      </script>
      <input type="checkbox" class="toggle" id="my-toggle" />
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Toggle with custom color">
    <template #output>
      <Center>
        <input
          type="checkbox"
          class="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"
          checked
        />
      </Center>
    </template>
    <template #code>
      {{ `
      <input
        type="checkbox"
        class="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"
        checked
      />
      ` }}
    </template>
  </Demonstration>
</template>

<script>
if (document) {
  const intermediateToggle = document.getElementById("my-toggle");
  if (intermediateToggle != undefined) {
    intermediateToggle.indeterminate = true;
  }
}
</script>
