<template>
  <Demonstration title="Select">
    <template #output>
      <Center>
        <select class="select w-full max-w-xs">
          <option disabled selected>Pick your favorite Simpson</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select w-full max-w-xs">
        <option disabled selected>Pick your favorite Simpson</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Select with border">
    <template #output>
      <Center>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Ghost (no background)">
    <template #output>
      <Center>
        <select class="select select-ghost w-full max-w-xs">
          <option disabled selected>Pick the best JS framework</option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-ghost w-full max-w-xs">
        <option disabled selected>Pick the best JS framework</option>
        <option>Svelte</option>
        <option>Vue</option>
        <option>React</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="With form-control and labels">
    <template #output>
      <Center>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Pick the best fantasy franchise</span>
            <span class="label-text-alt">Alt label</span>
          </div>
          <select class="select select-bordered">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
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
          <span class="label-text">Pick the best fantasy franchise</span>
          <span class="label-text-alt">Alt label</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <div class="label">
          <span class="label-text-alt">Alt label</span>
          <span class="label-text-alt">Alt label</span>
        </div>
      </label>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Primary Color">
    <template #output>
      <Center>
        <select class="select select-primary w-full max-w-xs">
          <option disabled selected>What is the best TV show?</option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-primary w-full max-w-xs">
        <option disabled selected>What is the best TV show?</option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Secondary Color">
    <template #output>
      <Center>
        <select class="select select-secondary w-full max-w-xs">
          <option disabled selected>Pick your favorite language</option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>C#</option>
          <option>C++</option>
          <option>Rust</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-secondary w-full max-w-xs">
        <option disabled selected>Pick your favorite language</option>
        <option>Java</option>
        <option>Go</option>
        <option>C</option>
        <option>C#</option>
        <option>C++</option>
        <option>Rust</option>
        <option>JavaScript</option>
        <option>Python</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Accent Color">
    <template #output>
      <Center>
        <select class="select select-accent w-full max-w-xs">
          <option disabled selected>Dark mode or light mode?</option>
          <option>Auto</option>
          <option>Dark mode</option>
          <option>Light mode</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-accent w-full max-w-xs">
        <option disabled selected>Dark mode or light mode?</option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Info Color">
    <template #output>
      <Center>
        <select class="select select-info w-full max-w-xs">
          <option disabled selected>Select language</option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-info w-full max-w-xs">
        <option disabled selected>Select language</option>
        <option>English</option>
        <option>Japanese</option>
        <option>Italian</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Success Color">
    <template #output>
      <Center>
        <select class="select select-success w-full max-w-xs">
          <option disabled selected>Pick your favorite anime</option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojo's Bizarre Adventure</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-success w-full max-w-xs">
        <option disabled selected>Pick your favorite anime</option>
        <option>One Piece</option>
        <option>Naruto</option>
        <option>Death Note</option>
        <option>Attack on Titan</option>
        <option>Bleach</option>
        <option>Fullmetal Alchemist</option>
        <option>Jojo's Bizarre Adventure</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Warning Color">
    <template #output>
      <Center>
        <select class="select select-warning w-full max-w-xs">
          <option disabled selected>Pick a pizza</option>
          <option>Cheese</option>
          <option>Veggie</option>
          <option>Pepperoni</option>
          <option>Margherita</option>
          <option>Hawaiian</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-warning w-full max-w-xs">
        <option disabled selected>Pick a pizza</option>
        <option>Cheese</option>
        <option>Veggie</option>
        <option>Pepperoni</option>
        <option>Margherita</option>
        <option>Hawaiian</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Error Color">
    <template #output>
      <Center>
        <select class="select select-error w-full max-w-xs">
          <option disabled selected>What is the best headless CMS</option>
          <option>Strapi</option>
          <option>Ghost</option>
          <option>Netlify CMS</option>
          <option>Sanity</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select select-error w-full max-w-xs">
        <option disabled selected>What is the best headless CMS</option>
        <option>Strapi</option>
        <option>Ghost</option>
        <option>Netlify CMS</option>
        <option>Sanity</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col justify-center items-center w-full">
          <!-- lg -->
          <select class="select select-bordered select-lg w-full max-w-xs my-2">
            <option disabled selected>Large</option>
            <option>Large Apple</option>
            <option>Large Orange</option>
            <option>Large Tomato</option>
          </select>
          <!-- md -->
          <select class="select select-bordered w-full max-w-xs my-2">
            <option disabled selected>Normal</option>
            <option>Normal Apple</option>
            <option>Normal Orange</option>
            <option>Normal Tomato</option>
          </select>
          <!-- sm -->
          <select class="select select-bordered select-sm w-full max-w-xs my-2">
            <option disabled selected>Small</option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
          <!-- xs -->
          <select class="select select-bordered select-xs w-full max-w-xs my-2">
            <option disabled selected>Tiny</option>
            <option>Tiny Apple</option>
            <option>Tiny Orange</option>
            <option>Tiny Tomato</option>
          </select>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- lg -->
      <select class="select select-bordered select-lg w-full max-w-xs">
        <option disabled selected>Large</option>
        <option>Large Apple</option>
        <option>Large Orange</option>
        <option>Large Tomato</option>
      </select>
      <!-- md -->
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Normal</option>
        <option>Normal Apple</option>
        <option>Normal Orange</option>
        <option>Normal Tomato</option>
      </select>
      <!-- sm -->
      <select class="select select-bordered select-sm w-full max-w-xs">
        <option disabled selected>Small</option>
        <option>Small Apple</option>
        <option>Small Orange</option>
        <option>Small Tomato</option>
      </select>
      <!-- xs -->
      <select class="select select-bordered select-xs w-full max-w-xs">
        <option disabled selected>Tiny</option>
        <option>Tiny Apple</option>
        <option>Tiny Orange</option>
        <option>Tiny Tomato</option>
      </select>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Disabled">
    <template #output>
      <Center>
        <select class="select w-full max-w-xs" disabled>
          <option>You can't touch this</option>
        </select>
      </Center>
    </template>
    <template #code>
      {{ `
      <select class="select w-full max-w-xs" disabled>
        <option>You can't touch this</option>
      </select>
      ` }}
    </template>
  </Demonstration>
</template>
