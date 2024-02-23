<template>
  <Demonstration title="Skeleton">
    <template #output>
      <Center>
        <div class="skeleton w-32 h-32"></div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="skeleton w-32 h-32"></div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Skeleton - circle with content">
    <template #output>
      <Center>
        <div class="flex flex-col gap-4 w-52">
          <div class="flex gap-4 items-center">
            <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div class="flex flex-col gap-4">
              <div class="skeleton h-4 w-20"></div>
              <div class="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div class="skeleton h-32 w-full"></div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="flex flex-col gap-4 w-52">
        <div class="flex gap-4 items-center">
          <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div class="flex flex-col gap-4">
            <div class="skeleton h-4 w-20"></div>
            <div class="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div class="skeleton h-32 w-full"></div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Skeleton - rectangle with content">
    <template #output>
      <Center>
        <div class="flex flex-col gap-4 w-52">
          <div class="skeleton h-32 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="flex flex-col gap-4 w-52">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
