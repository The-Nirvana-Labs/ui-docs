<template>
  <h3 class="mx-3 text-xl font-bold my-3">Method 1: using dialog element</h3>
  <Demonstration title="Dialog modal">
    <template #info>
      <p class="text-sm">
        opens on click using ID.showModal() method. can be closed using
        ID.close() method
      </p>
    </template>
    <template #output>
      <Center>
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn btn-info" onclick="my_modal_1.showModal()">
          open modal
        </button>
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- Open the modal using ID.showModal() method -->
      <button class="btn btn-info" onclick="my_modal_1.showModal()">
        open modal
      </button>
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Dialog modal, closes when clicked outside">
    <template #info>
      <p class="text-sm">
        there is a second form with 'modal-backdrop' class and it covers the
        screen so we can close the modal when clicked outside
      </p>
    </template>
    <template #output>
      <Center>
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn btn-info" onclick="my_modal_2.showModal()">open modal</button>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- Open the modal using ID.showModal() method -->
      <button class="btn btn-info" onclick="my_modal_2.showModal()">open modal</button>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Dialog modal with a close button at corner">
    <template #output>
      <Center>
        <!-- You can open the modal using ID.showModal() method -->
        <button class="btn btn-info" onclick="my_modal_3.showModal()">
          open modal
        </button>
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- You can open the modal using ID.showModal() method -->
      <button class="btn btn-info" onclick="my_modal_3.showModal()">
        open modal
      </button>
      <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button
              class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Dialog modal with custom width">
    <template #info>
      <p class="text-sm">
        You can use any w-* and max-w-* utility class to customize the width
      </p>
    </template>
    <template #output>
      <Center>
        <!-- You can open the modal using ID.showModal() method -->
        <button class="btn btn-info" onclick="my_modal_4.showModal()">
          open modal
        </button>
        <dialog id="my_modal_4" class="modal">
          <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- You can open the modal using ID.showModal() method -->
      <button class="btn btn-info" onclick="my_modal_4.showModal()">
        open modal
      </button>
      <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Responsive">
    <template #info>
      <p class="text-sm">
        Modal goes bottom on mobile screen and goes middle on desktop
      </p>
    </template>
    <template #output>
      <Center>
        <!-- Open the modal using ID.showModal() method -->
        <button class="btn btn-info" onclick="my_modal_5.showModal()">
          open modal
        </button>
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- Open the modal using ID.showModal() method -->
      <button class="btn btn-info" onclick="my_modal_5.showModal()">
        open modal
      </button>
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      ` }}
    </template>
  </Demonstration>

  <h3 class="mx-3 text-xl font-bold my-3">Method 2: using a hidden checkbox</h3>

  <Demonstration title="Modal using label + hidden checkbox">
    <template #output>
      <Center>
        <!-- The button to open modal -->
        <label for="my_modal_6" class="btn btn-info">open modal</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">This modal works with a hidden checkbox!</p>
            <div class="modal-action">
              <label for="my_modal_6" class="btn">Close!</label>
            </div>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- The button to open modal -->
      <label for="my_modal_6" class="btn btn-info">open modal</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my_modal_6" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">This modal works with a hidden checkbox!</p>
          <div class="modal-action">
            <label for="my_modal_6" class="btn">Close!</label>
          </div>
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>

  <Demonstration title="Modal that closes when clicked outside">
    <template #info>
      <p class="text-sm">
        Modal works with a hidden checkbox and labels can toggle the checkbox so
        we can use another label tag with 'modal-backdrop' class that covers the
        screen so we can close the modal when clicked outside
      </p>
    </template>
    <template #output>
      <Center>
        <!-- The button to open modal -->
        <label for="my_modal_7" class="btn btn-info">open modal</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">This modal works with a hidden checkbox!</p>
          </div>
          <label class="modal-backdrop" for="my_modal_7">Close</label>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- The button to open modal -->
      <label for="my_modal_7" class="btn btn-info">open modal</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my_modal_7" class="modal-toggle" />
      <div class="modal" role="dialog">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          <p class="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <label class="modal-backdrop" for="my_modal_7">Close</label>
      </div>
      ` }}
    </template>
  </Demonstration>

  <h3 class="mx-3 text-xl font-bold my-3">Method 3: using anchor links</h3>

  <Demonstration title="Modal using anchor link">
    <template #info>
      <p class="text-sm">
        Anchor links might not work well on some SPA frameworks so if there are
        problems, use the first example
      </p>
    </template>
    <template #output>
      <Center>
        <!-- The button to open modal -->
        <a href="#my_modal_8" class="btn btn-info">open modal</a>
        <!-- Put this part before </body> tag -->
        <div class="modal" role="dialog" id="my_modal_8">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">This modal works with anchor links</p>
            <div class="modal-action">
              <a href="#" class="btn">Yay!</a>
            </div>
          </div>
        </div>
      </Center>
    </template>
    <template #code>
      {{ `
      <!-- The button to open modal -->
      <a href="#my_modal_8" class="btn btn-info">open modal</a>
      <!-- Put this part before </body> tag -->
      <div class="modal" role="dialog" id="my_modal_8">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">This modal works with anchor links</p>
          <div class="modal-action">
            <a href="#" class="btn">Yay!</a>
          </div>
        </div>
      </div>
      ` }}
    </template>
  </Demonstration>
</template>
