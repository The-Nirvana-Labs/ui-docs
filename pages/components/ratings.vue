<template>
  <Demonstration title="Rating">
    <template #output>
      <Center>
        <div class="rating">
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" checked />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating">
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" checked />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-1" class="mask mask-star" />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Mask-star-2 with warning color">
    <template #output>
      <Center>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating">
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Mask-heart with multiple colors">
    <template #output>
      <Center>
        <div class="rating gap-1">
          <input
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-lime-400"
          />
          <input
            type="radio"
            name="rating-3"
            class="mask mask-heart bg-green-400"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating gap-1">
        <input
          type="radio"
          name="rating-3"
          class="mask mask-heart bg-red-400"
        />
        <input
          type="radio"
          name="rating-3"
          class="mask mask-heart bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-3"
          class="mask mask-heart bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-3"
          class="mask mask-heart bg-lime-400"
        />
        <input
          type="radio"
          name="rating-3"
          class="mask mask-heart bg-green-400"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Mask-star-2 with green-500 color">
    <template #output>
      <Center>
        <div class="rating">
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            class="mask mask-star-2 bg-green-500"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating">
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          checked
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col items-center justify-center">
          <!-- xs -->
          <div class="rating rating-xs my-2">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <!-- sm -->
          <div class="rating rating-sm my-2">
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <!-- md -->
          <div class="rating rating-md my-2">
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <!-- lg -->
          <div class="rating rating-lg my-2">
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- xs -->
      <div class="rating rating-xs">
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      <!-- sm -->
      <div class="rating rating-sm">
        <input
          type="radio"
          name="rating-6"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-6"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      <!-- md -->
      <div class="rating rating-md">
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      <!-- lg -->
      <div class="rating rating-lg">
        <input
          type="radio"
          name="rating-8"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-8"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With `rating-hidden`">
    <template #info>
      <p class="text-sm">
        "rating-hidden" is a hidden radio at the start to allow uses remove
        their rating.
      </p>
    </template>
    <template #output>
      <Center>
        <div class="rating rating-lg">
          <input type="radio" name="rating-9" class="rating-hidden" />
          <input type="radio" name="rating-9" class="mask mask-star-2" />
          <input
            type="radio"
            name="rating-9"
            class="mask mask-star-2"
            checked
          />
          <input type="radio" name="rating-9" class="mask mask-star-2" />
          <input type="radio" name="rating-9" class="mask mask-star-2" />
          <input type="radio" name="rating-9" class="mask mask-star-2" />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating rating-lg">
        <input type="radio" name="rating-9" class="rating-hidden" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" checked />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Half stars">
    <template #output>
      <Center>
        <div class="rating rating-lg rating-half">
          <input type="radio" name="rating-10" class="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-1"
            checked
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            class="bg-green-500 mask mask-star-2 mask-half-2"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="rating rating-lg rating-half">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
          checked
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
