<template>
  <Demonstration title="Empty badge as indicator">
    <template #output>
      <Center>
        <div class="indicator">
          <span class="indicator-item badge badge-secondary"></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span class="indicator-item badge badge-secondary"></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Badge as indicator">
    <template #output>
      <Center>
        <div class="indicator">
          <span class="indicator-item badge badge-primary">new</span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span class="indicator-item badge badge-primary">new</span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="for button">
    <template #output>
      <Center>
        <div class="indicator">
          <span class="indicator-item badge badge-secondary">99+</span>
          <button class="btn">inbox</button>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span class="indicator-item badge badge-secondary">99+</span>
        <button class="btn">inbox</button>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="for tab">
    <template #output>
      <Center>
        <div class="tabs tabs-lifted">
          <a class="tab">Messages</a>
          <a class="indicator tab tab-active">
            Notifications
            <span class="indicator-item badge">8</span>
          </a>
          <a class="tab">Requests</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="tabs tabs-lifted">
        <a class="tab">Messages</a>
        <a class="indicator tab tab-active">
          Notifications
          <span class="indicator-item badge">8</span>
        </a>
        <a class="tab">Requests</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="for avatar">
    <template #output>
      <Center>
        <div class="avatar indicator">
          <span class="indicator-item badge badge-secondary">typing…</span>
          <div class="w-20 h-20 rounded-lg">
            <img
              alt="Tailwind CSS examples"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="avatar indicator">
        <span class="indicator-item badge badge-secondary">typing…</span>
        <div class="w-20 h-20 rounded-lg">
          <img
            alt="Tailwind CSS examples"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="for an input">
    <template #output>
      <Center>
        <div class="indicator">
          <span class="indicator-item badge">Required</span>
          <input
            type="text"
            placeholder="Your email address"
            class="input input-bordered"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span class="indicator-item badge">Required</span>
        <input
          type="text"
          placeholder="Your email address"
          class="input input-bordered"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="A button as an indicator for a card">
    <template #output>
      <Center>
        <div class="indicator">
          <div class="indicator-item indicator-bottom">
            <button class="btn btn-primary">Apply</button>
          </div>
          <div class="card border">
            <div class="card-body">
              <h2 class="card-title">Job Title</h2>
              <p>Rerum reiciendis beatae tenetur excepturi</p>
            </div>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <div class="indicator-item indicator-bottom">
          <button class="btn btn-primary">Apply</button>
        </div>
        <div class="card border">
          <div class="card-body">
            <h2 class="card-title">Job Title</h2>
            <p>Rerum reiciendis beatae tenetur excepturi</p>
          </div>
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="in center of an image">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-center indicator-middle badge badge-secondary"
            >Uploading Image...</span
          >
          <img
            alt="Tailwind CSS examples"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-center indicator-middle badge badge-secondary"
          >Uploading Image...</span
        >
        <img
          alt="Tailwind CSS examples"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        />
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-top (default) indicator-start">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-start badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-start badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title=" indicator-top (default) indicator-center">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-center badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-center badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-top (default) indicator-end (default)">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-center badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-center badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-top (default) indicator-end (default)">
    <template #output>
      <Center>
        <div class="indicator">
          <span class="indicator-item badge badge-secondary"></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span class="indicator-item badge badge-secondary"></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-middle indicator-start">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-middle indicator-start badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-middle indicator-start badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-middle indicator-center">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-middle indicator-center badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-middle indicator-center badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-middle indicator-end (default)">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-middle badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-middle badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-bottom indicator-start">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-bottom indicator-start badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-bottom indicator-start badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-bottom indicator-center">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-bottom indicator-center badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-bottom indicator-center badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="indicator-bottom indicator-end (default)">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-bottom badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-bottom badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="multiple indicators">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-top indicator-start badge badge-secondary"
            >top+start</span
          >
          <span
            class="indicator-item indicator-top indicator-center badge badge-secondary"
            >top+center</span
          >
          <span
            class="indicator-item indicator-top indicator-end badge badge-secondary"
            >top+end</span
          >
          <span
            class="indicator-item indicator-middle indicator-start badge badge-secondary"
            >middle+start</span
          >
          <span
            class="indicator-item indicator-middle indicator-center badge badge-secondary"
            >middle+center</span
          >
          <span
            class="indicator-item indicator-middle indicator-end badge badge-secondary"
            >middle+end</span
          >
          <span
            class="indicator-item indicator-bottom indicator-start badge badge-secondary"
            >bottom+start</span
          >
          <span
            class="indicator-item indicator-bottom indicator-center badge badge-secondary"
            >bottom+center</span
          >
          <span
            class="indicator-item indicator-bottom indicator-end badge badge-secondary"
            >bottom+end</span
          >
          <div class="grid w-60 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-top indicator-start badge badge-secondary"
          >top+start</span
        >
        <span
          class="indicator-item indicator-top indicator-center badge badge-secondary"
          >top+center</span
        >
        <span
          class="indicator-item indicator-top indicator-end badge badge-secondary"
          >top+end</span
        >
        <span
          class="indicator-item indicator-middle indicator-start badge badge-secondary"
          >middle+start</span
        >
        <span
          class="indicator-item indicator-middle indicator-center badge badge-secondary"
          >middle+center</span
        >
        <span
          class="indicator-item indicator-middle indicator-end badge badge-secondary"
          >middle+end</span
        >
        <span
          class="indicator-item indicator-bottom indicator-start badge badge-secondary"
          >bottom+start</span
        >
        <span
          class="indicator-item indicator-bottom indicator-center badge badge-secondary"
          >bottom+center</span
        >
        <span
          class="indicator-item indicator-bottom indicator-end badge badge-secondary"
          >bottom+end</span
        >
        <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Responsive">
    <template #output>
      <Center>
        <div class="indicator">
          <span
            class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
          ></span>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div class="indicator">
        <span
          class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
