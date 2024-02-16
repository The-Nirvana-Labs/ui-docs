<template>
  <Demonstration title="Pagination with an active button">
    <template #output>
      <Center>
        <div class="join">
          <button class="join-item btn btn-secondary">1</button>
          <button class="join-item btn btn-secondary btn-active">2</button>
          <button class="join-item btn btn-secondary">4</button>
          <button class="join-item btn btn-secondary">3</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join">
        <button class="join-item btn btn-secondary">1</button>
        <button class="join-item btn btn-secondary btn-active">2</button>
        <button class="join-item btn btn-secondary">4</button>
        <button class="join-item btn btn-secondary">3</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col items-center">
          <div class="join my-3">
            <button class="join-item btn btn-secondary btn-xs">1</button>
            <button class="join-item btn btn-secondary btn-xs btn-active">
              2
            </button>
            <button class="join-item btn btn-secondary btn-xs">3</button>
            <button class="join-item btn btn-secondary btn-xs">4</button>
          </div>
          <div class="join my-3">
            <button class="join-item btn btn-secondary btn-sm">1</button>
            <button class="join-item btn btn-secondary btn-sm btn-active">
              2
            </button>
            <button class="join-item btn btn-secondary btn-sm">3</button>
            <button class="join-item btn btn-secondary btn-sm">4</button>
          </div>
          <div class="join my-3">
            <button class="join-item btn btn-secondary btn-md">1</button>
            <button class="join-item btn btn-secondary btn-md btn-active">
              2
            </button>
            <button class="join-item btn btn-secondary btn-md">3</button>
            <button class="join-item btn btn-secondary btn-md">4</button>
          </div>
          <div class="join my-3">
            <button class="join-item btn btn-secondary btn-lg">1</button>
            <button class="join-item btn btn-secondary btn-lg btn-active">
              2
            </button>
            <button class="join-item btn btn-secondary btn-lg">3</button>
            <button class="join-item btn btn-secondary btn-lg">4</button>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join">
        <button class="join-item btn btn-xs">1</button>
        <button class="join-item btn btn-xs btn-active">2</button>
        <button class="join-item btn btn-xs">3</button>
        <button class="join-item btn btn-xs">4</button>
      </div>
      <div class="join">
        <button class="join-item btn btn-sm">1</button>
        <button class="join-item btn btn-sm btn-active">2</button>
        <button class="join-item btn btn-sm">3</button>
        <button class="join-item btn btn-sm">4</button>
      </div>
      <div class="join">
        <button class="join-item btn btn-md">1</button>
        <button class="join-item btn btn-md btn-active">2</button>
        <button class="join-item btn btn-md">3</button>
        <button class="join-item btn btn-md">4</button>
      </div>
      <div class="join">
        <button class="join-item btn btn-lg">1</button>
        <button class="join-item btn btn-lg btn-active">2</button>
        <button class="join-item btn btn-lg">3</button>
        <button class="join-item btn btn-lg">4</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With a disabled button">
    <template #output>
      <Center>
        <div class="join">
          <button class="join-item btn btn-secondary">1</button>
          <button class="join-item btn btn-secondary">2</button>
          <button class="join-item btn btn-secondary btn-disabled">...</button>
          <button class="join-item btn btn-secondary">99</button>
          <button class="join-item btn btn-secondary">100</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join">
        <button class="join-item btn btn-secondary">1</button>
        <button class="join-item btn btn-secondary">2</button>
        <button class="join-item btn btn-secondary btn-disabled">...</button>
        <button class="join-item btn btn-secondary">99</button>
        <button class="join-item btn btn-secondary">100</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Extra small buttons">
    <template #output>
      <Center>
        <div class="join">
          <button class="join-item btn btn-secondary">«</button>
          <button class="join-item btn btn-secondary">Page 22</button>
          <button class="join-item btn btn-secondary">»</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join">
        <button class="join-item btn btn-secondary">«</button>
        <button class="join-item btn btn-secondary">Page 22</button>
        <button class="join-item btn btn-secondary">»</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Nex/Prev outline buttons with equal width">
    <template #output>
      <Center>
        <div class="join grid grid-cols-2">
          <button class="join-item btn btn-outline">Previous page</button>
          <button class="join-item btn btn-outline">Next</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join grid grid-cols-2">
        <button class="join-item btn btn-outline">Previous page</button>
        <button class="join-item btn btn-outline">Next</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Using radio inputs">
    <template #output>
      <Center>
        <div class="join">
          <input
            class="join-item btn btn-secondary btn-square"
            type="radio"
            name="options"
            aria-label="1"
            checked
          />
          <input
            class="join-item btn btn-secondary btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            class="join-item btn btn-secondary btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            class="join-item btn btn-secondary btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="join">
        <input
          class="join-item btn btn-secondary btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          class="join-item btn btn-secondary btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          class="join-item btn btn-secondary btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          class="join-item btn btn-secondary btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
