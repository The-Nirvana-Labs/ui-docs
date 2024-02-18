<template>
  <Demonstration title="Tabs">
    <template #output>
      <Center>
        <div role="tablist" class="tabs">
          <a role="tab" class="tab">Tab 1</a>
          <a role="tab" class="tab tab-active">Tab 2</a>
          <a role="tab" class="tab">Tab 3</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Bordered">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-bordered">
          <a role="tab" class="tab">Tab 1</a>
          <a role="tab" class="tab tab-active">Tab 2</a>
          <a role="tab" class="tab">Tab 3</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-bordered">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Lifted">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-lifted">
          <a role="tab" class="tab">Tab 1</a>
          <a role="tab" class="tab tab-active">Tab 2</a>
          <a role="tab" class="tab">Tab 3</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-lifted">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Boxed">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-boxed">
          <a role="tab" class="tab">Tab 1</a>
          <a role="tab" class="tab tab-active">Tab 2</a>
          <a role="tab" class="tab">Tab 3</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-boxed">
        <a role="tab" class="tab">Tab 1</a>
        <a role="tab" class="tab tab-active">Tab 2</a>
        <a role="tab" class="tab">Tab 3</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Sizes">
    <template #output>
      <Center>
        <div class="flex flex-col w-[45%]">
          <!-- xs -->
          <div role="tablist" class="tabs tabs-lifted my-2 tabs-xs">
            <a role="tab" class="tab">Tiny</a>
            <a role="tab" class="tab tab-active">Tiny</a>
            <a role="tab" class="tab">Tiny</a>
          </div>
          <!-- sm -->
          <div role="tablist" class="tabs tabs-lifted my-2 tabs-sm">
            <a role="tab" class="tab">Small</a>
            <a role="tab" class="tab tab-active">Small</a>
            <a role="tab" class="tab">Small</a>
          </div>
          <!-- md -->
          <div role="tablist" class="tabs tabs-lifted my-2">
            <a role="tab" class="tab">Normal</a>
            <a role="tab" class="tab tab-active">Normal</a>
            <a role="tab" class="tab">Normal</a>
          </div>
          <!-- lg -->
          <div role="tablist" class="tabs tabs-lifted my-2 tabs-lg">
            <a role="tab" class="tab">Large</a>
            <a role="tab" class="tab tab-active">Large</a>
            <a role="tab" class="tab">Large</a>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- xs -->
      <div role="tablist" class="tabs tabs-lifted tabs-xs">
        <a role="tab" class="tab">Tiny</a>
        <a role="tab" class="tab tab-active">Tiny</a>
        <a role="tab" class="tab">Tiny</a>
      </div>
      <!-- sm -->
      <div role="tablist" class="tabs tabs-lifted tabs-sm">
        <a role="tab" class="tab">Small</a>
        <a role="tab" class="tab tab-active">Small</a>
        <a role="tab" class="tab">Small</a>
      </div>
      <!-- md -->
      <div role="tablist" class="tabs tabs-lifted">
        <a role="tab" class="tab">Normal</a>
        <a role="tab" class="tab tab-active">Normal</a>
        <a role="tab" class="tab">Normal</a>
      </div>
      <!-- lg -->
      <div role="tablist" class="tabs tabs-lifted tabs-lg">
        <a role="tab" class="tab">Large</a>
        <a role="tab" class="tab tab-active">Large</a>
        <a role="tab" class="tab">Large</a>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Radio tab bordered + tab content">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            class="tab"
            aria-label="Tab 1"
          />
          <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            class="tab"
            aria-label="Tab 2"
            checked
          />
          <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            class="tab"
            aria-label="Tab 3"
          />
          <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab"
          aria-label="Tab 1"
        />
        <div role="tabpanel" class="tab-content p-10">Tab content 1</div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab"
          aria-label="Tab 2"
          checked
        />
        <div role="tabpanel" class="tab-content p-10">Tab content 2</div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab"
          aria-label="Tab 3"
        />
        <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Radio tab lifted + tab content">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="Tab 1"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="Tab 2"
            checked
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="Tab 3"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          class="tab"
          aria-label="Tab 1"
        />
        <div
          role="tabpanel"
          class="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          class="tab"
          aria-label="Tab 2"
          checked
        />
        <div
          role="tabpanel"
          class="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          class="tab"
          aria-label="Tab 3"
        />
        <div
          role="tabpanel"
          class="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Tabs with custom color">
    <template #output>
      <Center>
        <div role="tablist" class="tabs tabs-lifted">
          <a role="tab" class="tab">Tab 1</a>
          <a
            role="tab"
            class="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary"
            >Tab 2</a
          >
          <a role="tab" class="tab">Tab 3</a>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <div role="tablist" class="tabs tabs-lifted">
        <a role="tab" class="tab">Tab 1</a>
        <a
          role="tab"
          class="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary"
          >Tab 2</a
        >
        <a role="tab" class="tab">Tab 3</a>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
