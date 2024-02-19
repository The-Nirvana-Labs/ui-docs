import { Center } from '#build/components';
<template>
  <div>
    <Demonstration title="Avatar">
      <template #output>
        <Center>
          <div class="avatar">
            <div class="w-24 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{ `
        <div class="avatar">
          <div class="w-24 rounded">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar in custom sizes">
      <template #output>
        <Center>
          <div class="avatar">
            <div class="w-32 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-20 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-8 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar">
          <div class="w-32 rounded">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-20 rounded">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-16 rounded">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-8 rounded">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar rounded">
      <template #output>
        <Center>
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar">
          <div class="w-24 rounded-xl">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar with mask">
      <template #output>
        <Center>
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-24 mask mask-hexagon">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-24 mask mask-triangle">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="avatar">
          <div class="w-24 mask mask-triangle">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar group">
      <template #output>
        <Center>
          <div class="avatar-group -space-x-6 rtl:space-x-reverse">
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar-group -space-x-6 rtl:space-x-reverse">
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar group with counter">
      <template #output>
        <Center>
          <div class="avatar-group -space-x-6 rtl:space-x-reverse">
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div class="avatar placeholder">
              <div class="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar-group -space-x-6 rtl:space-x-reverse">
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title=" Avatar with ring">
      <template #output>
        <Center>
          <div class="avatar">
            <div
              class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar">
          <div
            class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar with presence indicator">
      <template #output>
        <Center>
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="avatar offline">
            <div class="w-24 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="avatar offline">
          <div class="w-24 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Avatar placeholder">
      <template #output>
        <Center>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-24">
              <span class="text-3xl">D</span>
            </div>
          </div>
          <div class="avatar online placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-16">
              <span class="text-xl">AI</span>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-12">
              <span>SY</span>
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-8">
              <span class="text-xs">UI</span>
            </div>
          </div>
        </Center>
      </template>
      <template #code>
        {{`
        <div class="avatar placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-24">
            <span class="text-3xl">D</span>
          </div>
        </div>
        <div class="avatar online placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-16">
            <span class="text-xl">AI</span>
          </div>
        </div>
        <div class="avatar placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-12">
            <span>SY</span>
          </div>
        </div>
        <div class="avatar placeholder">
          <div class="bg-neutral text-neutral-content rounded-full w-8">
            <span class="text-xs">UI</span>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>
  </div>
</template>
