<template>
  <div>
    <Demonstration title="Accordion using radio inputs">
      <template #output>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </template>
      <template #code>
        {{ `
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Accordion with arrow icon">
      <template #output>
        <!-- Accordion Group 2 with arrow icon -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </template>
      <template #code>
        {{`
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Accordion with plus/minus icon">
      <template #output>
        <!-- Accordion Group 3 with plus/minus icon -->
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </template>
      <template #code>
        {{`
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>

    <Demonstration title="Using Accordion and Join together">
      <template #output>
        <div class="join join-vertical w-full">
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </template>
      <template #code>
        {{`
        <div class="join join-vertical w-full">
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div class="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        `}}
      </template>
    </Demonstration>
  </div>
</template>
