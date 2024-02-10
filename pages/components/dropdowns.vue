<template>
  <Demonstration title="Dropdown Menu using <details> tag">
    <template #output>
      <details class="dropdown">
        <summary class="m-1 btn btn-primary">open or close</summary>
        <ul
          class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
    </template>
    <template #code>
      {{ `
      <details class="dropdown">
        <summary class="m-1 btn btn-primary">open or close</summary>
        <ul
          class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      ` }}
    </template>
    <template #jsx>
      {{ `
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul
          className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      ` }}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Clickable Button">
    <template #output>
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Alignment to Top">
    <template #output>
      <div class="dropdown dropdown-top">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown dropdown-top">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown dropdown-top">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Alignment to Top and Right">
    <template #output>
      <div class="dropdown dropdown-top dropdown-end">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown dropdown-top dropdown-end">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Alignment to Bottom">
    <template #output>
      <div class="dropdown dropdown-bottom">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown dropdown-bottom">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Alignment to Bottom and Right">
    <template #output>
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
  <Demonstration title="Dropdown Menu with Alignment to Left">
    <template #output>
      <div class="dropdown dropdown-left">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </template>
    <template #code>
      {{ `
      <div class="dropdown dropdown-left">
        <div tabindex="0" role="button" class="btn btn-primary m-1">Click</div>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      ` }}
    </template>
    <template #jsx>
      {{`
      <div className="dropdown dropdown-left">
        <div tabIndex="0" role="button" className="btn btn-primary m-1">
          Click
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      `}}
    </template>
  </Demonstration>
</template>
